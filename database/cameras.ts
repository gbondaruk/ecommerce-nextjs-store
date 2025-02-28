import { cache } from 'react';
import { sql } from '../database/connect';
import type { Camera } from '../migrations/00000-createTableCameras';

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
      id = ${id}
  `;

  return camera;
});
