const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        {
          name: "Computer Science",
        },
        {
          name: "Music",
        },
        {
          name: "Fitness",
        },
        {
          name: "Film",
        },
        {
          name: "Photography",
        },
        {
          name: "Art",
        },
      ],
    });
    console.log("seeded the db categories");
  } catch (err) {
    console.error("error seeding the db categories", err);
  } finally {
    await db.$disconnect();
  }
}

main();
