function links(parent, args, context) {
  return context.prisma.user
    .finedUnique({
      where: { id: parent.id },
    })
    .links();
}

module.exports = {
  links,
};
