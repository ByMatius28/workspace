import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.combo.create({
        data: {
        name: 'Kentuki',
        description: 'El mejor combo personal para chuparte los dedos o no?',
        items:"Hamburguesa de Pollo. Papas Pequeña, Bebida Pequeña",
        price: 5.50
        }   
});
  const post2 = await prisma.combo.create({
    data: {
    name: 'Chiroski',
    description: 'El mejor combo para cuando estas corto de presupuesto crack ;3',
    items:"Presa de Pollo, papas, bebida pequeña,1 galleta",
    price: 2.99
    }
  });
}
main()
.catch(e => {
    console.error(e)
    process.exit(1)
})
.finally(async () =>{
    await prisma.$disconnect();
});
