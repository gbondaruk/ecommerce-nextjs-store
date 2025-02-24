import Image from 'next/image';
import { getCameraInsecure } from '../../../database/cameras';
import styles from '../cameras.module.scss';

export async function generateMetadata(props) {
  const singleCamera = await getCameraInsecure(
    Number((await props.params).cameraId),
  );

  return {
    title: singleCamera.brand + '' + singleCamera.title,
    description: 'Camera product page',
  };
}

export default async function CameraPage(props) {
  const singleCamera = await getCameraInsecure(
    Number((await props.params).cameraId),
  );

  return (
    <div>
      <h1>
        {singleCamera.brand} {singleCamera.title}
      </h1>
      <Image
        src={`/images/${singleCamera.title}.jpg`}
        alt={singleCamera.title}
        width={300}
        height={200}
      />
      <div>Production year:{singleCamera.productionYear}</div>
      <br />
      This is an {singleCamera.brand} camera that is in {singleCamera.condition}
      condition.
    </div>
  );
}
