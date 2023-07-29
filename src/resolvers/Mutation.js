// ユーザの新規登録
const bcrypt = require('bcryptjs');

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
}
