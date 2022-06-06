import { PrismaClient } from "@prisma/client";
import {
  ProductRepository,
  ProductCreateData,
  ProductChangeData,
  ProductConsultData,
  ProductDeleteData,
  Product,
} from "../product-repositories";

const prisma = new PrismaClient({ log: ["query"] }); // { log: ["query"] } retorna no console todas as querys executadas

export class PrismaProductRepository implements ProductRepository {
  async create({ name, price }: ProductCreateData) {
    const product = await prisma.product.create({
      data: { name, price },
    });
    return product;
  }
  async change({ id, name, price }: ProductChangeData) {
    await prisma.product.update({
      where: { id },
      data: { name, price },
    });
  }
  async consult({ name }: ProductConsultData) {
    const product = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
    return product;
  }
  async delete({ id }: ProductDeleteData) {
    await prisma.product.delete({
      where: { id },
    });
  }
}
