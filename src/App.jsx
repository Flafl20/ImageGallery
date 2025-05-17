import Card from "./compunds/card"
import { useState, useEffect } from "react"
import Spiner from "./compunds/Spiner"
import ImageSearch from "./compunds/imageSearch"

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

  const fetchingImages = async () => {
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY
    const URL = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`

    try {
      const response = await fetch(URL, { mode: "cors" })
      const data = await response.json()
      console.log(data.hits)
      setImages(data.hits)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchingImages()
    }, 1000)
  }, [term])

  return (
    <>
      <div className="mt-3">
        <ImageSearch searchText={(text) => setTerm(text)} />
      </div>
      <div className="mx-auto flex justify-center items-center m-5">
        {isLoading ? (
          <Spiner />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) =>
              isLoading ? <Spiner /> : <Card image={image} />
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default App
