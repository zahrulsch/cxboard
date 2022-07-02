export interface FileReaderData {
  base64Text: string | ArrayBuffer
  fileBlobUrl: string
}

export interface VideoReaderData {
  videoBinary: string | ArrayBuffer
  previewUrl: string
}

export interface FileReaderDropOptions {
  onError?: (error: string) => void
  onSuccess?: (data: FileReaderData) => void
}

export interface FileReaderOptions {
  allow?: string[]
  onError?: (error: string) => void
  onSuccess?: (data: FileReaderData) => void
}

export interface VideoInputReaderOptions {
  onError?: (e: string) => void
  onSuccess?: (data: VideoReaderData) => void  
}

export function tVideoInputReader(e: Event, options?: VideoInputReaderOptions) {
  const target = e.target as HTMLInputElement
  const { files } = target
  window.URL = window.URL || window.webkitURL

  if (!files) {
    options?.onError?.('Input file tidak ditemukan, silahkan coba lagi!')
  } else {
    const file = files[0]

    if (file.type !== 'video/mp4') {
      options?.onError?.('Format file video anda bukan mp4, pilih video dengan format yang memenuhi')
    } else {
      const video = document.createElement('video')
      video.preload = 'metadata'

      video.onloadedmetadata = function() {
        window.URL.revokeObjectURL(video.src)
        const duration = video.duration

        if (duration > 60) {
          options?.onError?.('Durasi video kemungkinan lebih dari 60s, coba pilih video dengan durasi lebih pendek')
        } else if (duration < 10) {
          options?.onError?.('Durasi video kemungkinan kurang dari 10s, coba pilih video dengan durasi lebih panjang')
        } else {
          const reader = new FileReader()

          reader.onload = function(e) {
            if (!e.target?.result) {
              options?.onError?.('Gagal saat populate hasil render video, silahkan coba lagi')
            } else {
              options?.onSuccess?.({
                previewUrl: URL.createObjectURL(file),
                videoBinary: e.target.result
              })
            }
          }

          reader.onerror = function() {
            options?.onError?.('Gagal saat membaca file video, silahkan coba lagi')
          }
          
          reader.readAsArrayBuffer(file)
        }
      }
      
      video.onerror =  function() {
        options?.onError?.('Gagal saat memuat file video, silahkan coba lagi')
      }

      video.src = URL.createObjectURL(file)
    }
  }
}

export function tFileReader(e: Event, options?: FileReaderOptions) {
  const target = e.target as HTMLInputElement
  const { files } = target

  if (!files) {
    options?.onError?.('Files dapat dikenali, cek kembali file yang coba anda masukkan!')
  } else {
    if (options?.allow) {
      if (!options.allow.includes(files[0].type)) {
        options?.onError?.('Format file anda tidak memenuhi syarat, coba cek kembali!')
      } else {
        const createFileUrl = URL.createObjectURL(files[0])
        const reader = new FileReader()

        reader.readAsDataURL(files[0])
        reader.onload = data => {
          if (data.target?.result) {
            options?.onSuccess?.({
              base64Text: String( data.target.result),
              fileBlobUrl: createFileUrl
            })
          } else {
            options?.onError?.('Gagal saat memuat file, silahkan coba lagi!')
          }
        }

        reader.onerror = () => {
          options?.onError?.('Gagal saat membaca file, silahkan coba lagi!')
        }
      }
    } else {
      const createFileUrl = URL.createObjectURL(files[0])
      const reader = new FileReader()

      reader.readAsDataURL(files[0])
      reader.onload = data => {
        if (data.target?.result) {
          options?.onSuccess?.({
            base64Text: data.target.result,
            fileBlobUrl: createFileUrl
          })
        } else {
          options?.onError?.('Gagal saat memuat file, silahkan coba lagi!')
        }
      }

      reader.onerror = () => {
        options?.onError?.('Gagal saat membaca file, silahkan coba lagi!')
      }
    }
  }

  target.value = ''
}

export function tFileReaderDrop(e: DragEvent, options?: FileReaderDropOptions) {
  const element = e.dataTransfer?.getData('text/html')

  if (element) {
    const renderedElement = new DOMParser().parseFromString(element, 'text/xml')
    const imageurl = renderedElement.documentElement.getAttribute('src') || renderedElement.documentElement.getAttribute('data-src')
    
    if (!imageurl) {
      options?.onError?.('Source gambar tidak ditemukan')
    } else {
      const imageElement = new Image()

      imageElement.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.height = imageElement.height
        canvas.width = imageElement.width

        const context = canvas.getContext('2d')
        if (!context) {
          options?.onError?.('Gagal saat endapatkan konteks canvas')
        } else {
          context.drawImage(imageElement, 0, 0)
          const base64Image = canvas.toDataURL('image/png')
          const base64ImageFilter = base64Image

          options?.onSuccess?.({
            base64Text: base64ImageFilter,
            fileBlobUrl: base64Image
          })
        }
      }

      imageElement.setAttribute('crossOrigin', 'anonymous')
      imageElement.src = imageurl
    }
  }
}