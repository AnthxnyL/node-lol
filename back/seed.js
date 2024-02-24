import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function seed() {
  try {
    const jsonData = fs.readFileSync('./champions.json', 'utf-8');
    const championsData = JSON.parse(jsonData);

    await Promise.all(championsData.map(champion => {
        return prisma.champion.create({
          data: champion,
        });
      }));

    console.log('Fichier ajouté avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'ajout du fichier :', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
