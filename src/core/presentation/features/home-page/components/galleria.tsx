import { IImageData } from '@/core/interfaces/image-data'
import { PhotoService } from '@/core/services/img-service'
import { Galleria as GalleriaPrime } from 'primereact/galleria'
import { useEffect, useState } from 'react'

const Galleria: React.FC = () => {
  const [images, setImages] = useState<Array<IImageData>>([]) // Asegúrate de ajustar el tipo de datos según tu definición de ImageData

  useEffect(() => {
    PhotoService.getImages().then((data: IImageData[]) => setImages(data))
  }, [])

  const itemTemplate = (item: IImageData) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.data}
        className="object-contain h-100"
      />
    )
  }

  return (
    <div className="card">
      <GalleriaPrime
        value={images}
        numVisible={5}
        circular
        style={{ maxWidth: '540px' }}
        item={itemTemplate}
        showThumbnails={false}
        autoPlay
        transitionInterval={2000}
        className="container justify-center"
      />
    </div>
  )
}

export default Galleria
