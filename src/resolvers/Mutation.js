// ユーザの新規登録
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

APP_SECRET = 'Graphql';

async function signup(parent, args, context) {
  // パスワードの設定(ハッシュ化)
  const password = await bcrypt.hash(args.password, 10);

  // ユーザの新規作成
  const user = await context.prisma.user.create({
    data: {
      ...args,
      password,
    },
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

// ユーザーログイン
async function login(parent, args, context) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  });
  if (!user) {
    throw new Error('そのようなユーザーは存在しません');
  }

  // パスワードの比較
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('無効なパスワードです');
  }

  // パスワードが正しいとき
  const token = jwt.sign({ userId: user.id }.APP_SECRET);

  return {
    token,
    user,
  };
}

// ニュースを投稿するリゾルバ
async function post(parent, args, context) {
  return await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
    },
  });
}
