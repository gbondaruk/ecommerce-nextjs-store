import Image from 'next/image';
import Link from 'next/link';
import { getCamerasInsecure } from '../../database/cameras';
import styles from './cameras.module.scss';

export const metadata = {
  title: 'Cameras',
  description: 'A collection of beautiful vintage cameras',
};

export default async function CamerasPage() {
  const cameras = await getCamerasInsecure();

  return (
    <div className={styles.cameraPage}>
      <h1>Cameras</h1>

      {cameras.map((camera) => {
        return (
          <div key={`camera-${camera.id}`}>
            <Link href={`/cameras/${camera.id}`}>
              <div>
                {camera.brand} {camera.title}
              </div>
              <Image
                src={`/images/${camera.title.toLowerCase()}.png`}
                alt={camera.title}
                width={300}
                height={200}
              />
              <div>Price: €{camera.price}</div>
              <br />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
