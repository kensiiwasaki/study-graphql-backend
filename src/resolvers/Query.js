function feed(parent, args, context) {
  return context.prisma.link.findMany();
}

modules.exports = {
  feed,
};
