import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  const post = await prisma.post.update({
    where: { id: 4 },
    data: {
      title: 'Follow Pentacode on Twitter'
    }
  });

  console.log(post);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
