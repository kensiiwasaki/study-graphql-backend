// データベースにアクセスするためのクライアントライブラリ
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: 'GraphQLチュートリアルをUdemyで学ぶ',
      url: 'www.udemy-graphql-tutorial.com',
    },
  });
}
