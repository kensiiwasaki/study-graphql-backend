// 誰の投稿かのリゾルバ
function postedBy(parent, args, context) {
  return context.prisma.link
    .finedUnique({
      where: { id: parent.id },
    })
    .postedBy();
}

module.exports = {
  postedBy,
};
