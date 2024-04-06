import { prisma } from '../src/lib/prisma';

async function seed() {
    await prisma.event.create({
        data: {
            id: '652f0c6b-7c04-45b7-81e2-f16f054b2635',
            title: 'Unite',
            slug: 'unite-sumit',
            details: 'Um evento p/ devs apaixonados(as) por código!',
            maximumAttendees: 120,
        }
    })
}
    

seed().then(()=>{
    console.log('Database seeded!');
    prisma.$disconnect()
})
