import React from 'react'

const ImageCard = ({image}) => {

    const tags = image.tags.split(',');

  return (
    <div className="mx-w-sm rounded-md flex flex-col overflow-hidden place-items-center justify-center shadow-lg m-4 p-4 w-96">
      <img src={image.webformatURL} alt="Not-found" className="object-cover w-96 aspect-square rounded-t-md h-96 bg-stone-300" />
      <div className=" px-6 py-4 w-full bg-slate-300">
        <div className="font-bold text-gray-800 text-xl mb-2 uppercase">
          {image.user}
        </div>
        <ul className="bg-slate-200 rounded-md w-auto p-4">
          <li>
            <strong>Views: </strong>{image.views}
          </li>
          <li>
            <strong>Downloads: </strong>{image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>{image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 pb-4 w-full bg-slate-300 rounded-b-md">
        {tags.map((tag, index) => (
        <span key={index} className="inline-block bg-indigo-300 rounded-full shadow-md text-slate-800 mr-2 px-3 py-1 my-1 text-sm font-bold">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard