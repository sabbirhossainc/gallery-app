import { React } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ImageCard = ({ image, searchText }) => {
  // const [btnText, setBtnText] = useState("");

  const getTabData = (e) => {
    const value = e.target.innerText;
    let regEx = /[^a-zA-Z]/g;
    const btnData = value.replace(regEx, "");
    searchText(btnData);
    console.log(btnData);
  };

  const tags = image.tags.split(",");

  function download() {
    axios({
      url: image.largeImageURL,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      const imageName = image.user + ".jpg";
      link.href = url;
      link.setAttribute("download", imageName);
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <div className="mx-w-sm rounded-md overflow-hidden items-center justify-center text-center shadow-lg m-4 p-3 w-96 bg-zinc-200">
      <img
        src={image.webformatURL}
        alt="Not-found"
        className="object-cover rounded-t-md w-96 h-96 bg-stone-300"
      />
      <div className=" px-6 py-4 w-full bg-slate-300">
        <div className="flex pb-4 items-center justify-start">
          {/* <p className="font-bold text-gray-800 text-xl underline decoration-2 decoration-teal-500 hover:decoration-indigo-500 cursor-pointer">
            <span className="pr-1">
              <FontAwesomeIcon className="text-teal-500" icon={faUser} />
            </span>
        </p> */}
          <img
            src={image.userImageURL}
            alt=""
            className="object-cover w-7 h-7 ring-1 ring-slate-500  rounded-full"
          />
          &nbsp;
          <a
            href={`https://pixabay.com/users/${image.user}-${image.user_id}/`}
            target="{_blank}"
            className="font-bold text-gray-800 text-xl underline decoration-2 decoration-teal-500 hover:decoration-indigo-500 cursor-pointer"
          >
            {image.user}
          </a>
          <div className="flex flex-1 justify-end ">
            <button
              onClick={download}
              className="bg-slate-200 text-indigo-500 hover:text-teal-500 px-3 py-[1%] font-bold shadow-md rounded-full duration-200"
            >
              Download &nbsp;
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <div className=" divide-indigo-500 divide-y-4">
          <div></div>
          <ul className="bg-slate-200 rounded-md w-auto p-4">
            <li>
              <strong>
                Views: &nbsp;
                <span className="text-teal-500">{image.views}</span>
              </strong>
            </li>
            <li>
              <strong>
                Downloads: &nbsp;
                <span className="text-teal-500">{image.downloads}</span>
              </strong>
            </li>
            <li>
              <strong>
                Likes: &nbsp;
                <span className="text-teal-500">{image.likes}</span>
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 pb-4 w-full bg-slate-300 rounded-b-md">
        {tags.map((tag, index) => (
          <button
            key={index}
            value=""
            onClick={(e) => getTabData(e)}
            className="inline-block bg-teal-500 hover:bg-indigo-500 rounded-full shadow-md text-slate-50 mr-2 px-3 py-1 my-1 text-sm font-bold duration-100"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
