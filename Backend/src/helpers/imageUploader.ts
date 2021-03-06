import imagekit from 'imagekit'
import { Md5 } from 'ts-md5/dist/md5'

const imagePrivate = process.env.IMAGE_PRIVATE
const imagePublic = process.env.IMAGE_PUBLIC
const imageUrl = process.env.IMAGE_URL

const imgkit = new imagekit({
  privateKey: imagePrivate || '',
  publicKey: imagePublic || '',
  urlEndpoint: imageUrl || ''
})

export function imageUploader(baseImage: string): Promise<string|null> {
  return new Promise((resolve, reject) => {
    imgkit.upload({
      file: baseImage,
      fileName: Md5.hashStr(baseImage),
      useUniqueFileName: false,
    }).then(response => {
      resolve(response.url)
    }).catch(() => reject(null))
  })
}