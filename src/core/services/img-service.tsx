import { Photo1, Photo2, Photo3, Photo5 } from '../contants/images'
import { IImageData } from '../interfaces/image-data'

export const PhotoService = {
  getImages: (): Promise<IImageData[]> => {
    return new Promise((resolve) => {
      const images: IImageData[] = [
        {
          itemImageSrc: Photo1,
          thumbnailImageSrc: Photo1,
          data: 'Descripción de la imagen 1',
        },
        {
          itemImageSrc: Photo2,
          thumbnailImageSrc: Photo2,
          data: 'Descripción de la imagen 2',
        },
        {
          itemImageSrc: Photo3,
          thumbnailImageSrc: Photo3,
          data: 'Descripción de la imagen 3',
        },
        {
          itemImageSrc: Photo5,
          thumbnailImageSrc: Photo5,
          data: 'Descripción de la imagen 5',
        },
      ]

      setTimeout(() => {
        resolve(images)
      }, 1000)
    })
  },
}
