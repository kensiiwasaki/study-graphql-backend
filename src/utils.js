const jwt = require('jsonwebtoken');

APP_SECRET = 'GraphQL-is-aw3some';

// トークンを複合するための関数
function getTokenPayload(token) {
  // トークン化されたものの前の情報(user.id)を複合する
  return jwt.verify(token, APP_SECRET);
}

// ユーザーIDを取得するための関数
function getUserId(req, authToken) {
  if (req) {
    // ヘッダーを確認する(認証権限があるか確認する)
    const authHeader = req.headers.authorization;
    // 権限があるなら
    if (authHeader) {
      const token = authHeader.replace('Bearer', '');
      if (!token) {
        throw new Error('トークンがみつかれませんでした');
      }
      // トークンの複合する
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error('認証権限がありません');
}

module.exports = {
  APP_SECRET,
  getUserId,
};
