import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

console.log(
  'Cameras',
  await sql`
  SELECT
  *
  FROM
  cameras
  `,
);
