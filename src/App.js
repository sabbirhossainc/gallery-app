import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState("yellow flower");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
        // console.log(data)
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="max-w-screen mx-auto bg-stone-100">
      <Hero/>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <NotFound />}

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-rows-12 gap-1 md:grid-cols-3 md:gap-4 place-items-center justify-between items-center">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
