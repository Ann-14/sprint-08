import { Link } from 'react-router-dom'
import logo from '../logo.png'



export const SpaceShip = ({name,model,url,max_speed,cost,length}) => {
  
let shipId;
  if(url.length === 34){ 
    shipId = (url.slice(url.length-2,url.length-1))
  } else{
    shipId = (url.slice(url.length-3,url.length-1))
  }

console.log('URL', url.length-1)
const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;
console.log('imgurl', imageUrl)

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
      <Link to={`/spaceship/${shipId}`} > details</Link>
    </div>
  </article>
  )
}
