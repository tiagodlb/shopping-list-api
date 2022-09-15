import { faker } from '@faker-js/faker';

export default async function itemFactory() {
  return {
    title: faker.commerce.productName(),
    url: faker.internet.url(),
    description: faker.lorem.paragraph(1),
    amount: parseInt(faker.random.numeric(2))
  };
}

export const idFactory = parseInt(faker.random.numeric(1))