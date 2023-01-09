import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../components/Loading";
import { useParams } from "react-router-dom";

export const SingleSpaceShip = () => {
  const [loading, setLoading] = useState(false);
  const [ships, setShips] = useState([]);
  const [imgUrl, setImgUrl] = useState();

  
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
        setLoading(false)
      };
      getShip();
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    
  }, [shipId]);
  
  if(loading){
    return <Loading />
  }
  
  return (
    <>
      <img src={imgUrl} alt={ships.name} />

      <h1>{ships.name}</h1>

      <h3>Model: {ships.model}</h3>

      <h3>Manufacturer: {ships.manufacturer}</h3>

      <h3>Cost in credits: {ships.cost_in_credits}</h3>

      <h3>Length: {ships.length}</h3>

      <h3>Max speed: {ships.max_atmosphering_speed} km/s</h3>

      <h3>Crew: {ships.crew}</h3>
    </>
  );
}

