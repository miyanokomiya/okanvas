export function readImageFile(
  file: File
): Promise<{ base64: string; image: HTMLImageElement }> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = () => {
      const base64 = fileReader.result as string
      const image = new Image()
      image.onload = () => {
        resolve({
          base64,
          image,
        })
      }
      image.onerror = reject
      image.src = base64
    }
    fileReader.onerror = reject
    fileReader.readAsDataURL(file)
  })
}
