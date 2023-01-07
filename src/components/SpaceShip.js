import { Link } from 'react-router-dom'
import logo from '../logo.png'
// import { useGlobalContext } from '../Context'


export const SpaceShip = ({name,model,id,url}) => {
  //We are now using props from spaceshiplist
  // const {spaceShips} = useGlobalContext()

const shipId = (url.slice(url.length-2,url.length-1))
const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;

//replacement of broken Image
const replaceImage = (error) => {
  error.target.src = logo 
}
  return (
    <article >
    <div>
    </div>
    <div >
      <h3>{name}</h3>
      <h4>{model}</h4>
     
     <img onError={replaceImage}  src={imageUrl}  alt='starship '/> 
      <Link to={`/spaceship/${id}`} > details</Link>
    </div>
  </article>
  )
}
