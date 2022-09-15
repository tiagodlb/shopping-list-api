import { faker } from "@faker-js/faker";
import itemFactory from "../factories/itemFactory";
import { prisma } from "../src/database";

async function main() {
  const item = await itemFactory();

  await prisma.items.upsert({
    where: { title: item.title },
    update: {},
    create: item,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
