import type { Sql } from 'postgres';

export type Camera = {
  id: number;
  brand: string;
  title: string;
  technology: string;
  condition: string;
  productionYear: Date;
  price: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE cameras (
      brand varchar(30) NOT NULL,
      title varchar(30) NOT NULL,
      technology varchar(30) NOT NULL,
      condition varchar(30) NOT NULL,
      production_year varchar(10) NOT NULL,
      price integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE cameras`;
}
