import type { Sql } from 'postgres';

const cameras = [
  {
    id: 1,
    brand: 'Nikon',
    title: 'F-301',
    technology: 'analog',
    condition: 'used',
    productionYear: new Date('1985-01-01'),
    price: 300,
  },
  {
    id: 2,
    brand: 'Pentax',
    title: 'Asahi SV',
    technology: 'analog',
    condition: 'used',
    productionYear: new Date('1962-01-01'),
    price: 230,
  },
  {
    id: 3,
    brand: 'Canon',
    title: 'AF-7',
    technology: 'analog',
    condition: 'like new',
    productionYear: new Date('1994-01-01'),
    price: 40,
  },
  {
    id: 4,
    brand: 'Leica',
    title: 'R5',
    technology: 'analog',
    condition: 'used',
    productionYear: new Date('1986-01-01'),
    price: 330,
  },
  {
    id: 5,
    brand: 'Kodak',
    title: 'Brownie Hawkeye',
    technology: 'analog',
    condition: 'used',
    productionYear: new Date('1985-01-01'),
    price: 1000,
  },
];

export async function up(sql: Sql) {
  for (const camera of cameras) {
    await sql`
      INSERT INTO
        cameras (
          brand,
          title,
          technology,
          condition,
          production_year,
          price
        )
      VALUES
        (
          ${camera.brand},
          ${camera.title},
          ${camera.technology},
          ${camera.condition},
          ${camera.productionYear},
          ${camera.price}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const camera of cameras) {
    await sql`
      DELETE FROM cameras
      WHERE
        id = ${camera.id}
    `;
  }
}
