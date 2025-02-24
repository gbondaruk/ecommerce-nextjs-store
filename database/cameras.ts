import { cache } from 'react';
import { sql } from '../database/connect';

type Camera = {
  id: number;
  brand: string;
  title: string;
  technology: string;
  condition: string;
  productionYear: Date;
  price: number;
};

export const getCamerasInsecure = cache(async () => {
  const cameras = await sql<Camera[]>`
  SELECT
  *
  FROM
  cameras
  `;

  return cameras;
});

export const getCameraInsecure = cache(async (id: number) => {
  const [camera] = await sql<Camera[]>`
  SELECT
  *
  FROM
  cameras
  WHERE
  id=${id}
  `;

  return camera;
});
