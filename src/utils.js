// トークンを複合するための関数

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
    }
  }
}
