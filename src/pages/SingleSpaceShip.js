import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../components/Loading";
import { Link, useParams } from "react-router-dom";
import logo from '../logo.png'

export const SingleSpaceShip = () => {
  const [loading, setLoading] = useState(false);
  const [ships, setShips] = useState([]);
  const [imgUrl, setImgUrl] = useState();
  const [filmsUrl, setFilmsUrl] = useState([]);
  let shipId = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      const getShip = async () => {
        const url = `https://swapi.dev/api/starships/${shipId.id}`;
        const result = await axios.get(url);
        setShips(result.data);
        const urlImg = `https://starwars-visualguide.com/assets/img/starships/${shipId.id}.jpg`;
        setImgUrl(urlImg);
        const films = `${result.data.films[0]}`;
        const resultFilms = await axios.get(films);
        setFilmsUrl(resultFilms.data);
        setLoading(false)
      };
      getShip();
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }, [shipId]);

  if (loading) {
    return <Loading />
  }

  //replacement of broken Image
  const replaceImage = (error) => {
    error.target.src = logo
  }
  return (
    <>
      <div className="flex justify-center mt-40 mb-14">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" onError={replaceImage} src={imgUrl} alt={ships.name} />
          </a>
          <div className="p-6">
            <h3 className="text-gray-900 text-2xl font-bold mb-2">{ships.name}</h3>
            <h5 className="text-gray-900 text-xl font-medium mb-2 ">{ships.model}</h5>
            <h5 className="text-gray-900 text-xl font-medium mb-2">Speed: {ships.max_atmosphering_speed}</h5>
            <h5 className="text-gray-900 text-xl font-medium mb-2">Crew: {ships.crew}</h5>
            <h5 className="text-gray-900 text-xl font-semibold mb-2"> {filmsUrl.title}</h5>
            <p className="text-gray-700 text-base mb-4">
              {filmsUrl.opening_crawl}
            </p>
            <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><Link to='/HomePage'>Back</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

