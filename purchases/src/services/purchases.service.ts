import { Injectable } from '@nestjs/common';

import { PrismaService } from '../database/prisma/prisma.service';
import { KafkaService } from '../messaging/kafka.service';

interface CreatePurchaseParams {
  customerId: string;
  productId: string;
}

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService, private kafka: KafkaService) {}

  listAllPurchases() {
    return this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  listAllByCustomer(customerId: string) {
    return this.prisma.purchase.findMany({
      where: {
        customerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  getPurchaseById(id: string) {
    return this.prisma.purchase.findUnique({
      where: {
        id,
      },
    });
  }

  async createPurchase({ customerId, productId }: CreatePurchaseParams) {
    const productExists = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!productExists) {
      throw new Error('Product does not exist');
    }

    const purchase = await this.prisma.purchase.create({
      data: {
        status: 'PENDING',
        customerId,
        productId,
      },
    });

    const customer = await this.prisma.customer.findUnique({
      where: {
        id: customerId,
      },
    });

    this.kafka.emit('purchases.new-purchase', {
      customer: {
        authUserId: customer.authUserId,
      },
      product: {
        id: productId,
        title: productExists.title,
        slug: productExists.slug,
      },
    });

    return purchase;
  }
}
