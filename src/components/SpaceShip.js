import { Link } from 'react-router-dom'




export const SpaceShip = ({name,model,url,}) => {
  
let shipId;
  if(url.length === 34){ 
    shipId = (url.slice(url.length-2,url.length-1))
  } else{
    shipId = (url.slice(url.length-3,url.length-1))
  }


  return (
    <article >
    <div>
    </div>
    <div >
      <h3>{name}</h3>
      <h4>{model}</h4>
      <Link to={`/spaceship/${shipId}`}>details</Link>
    </div>
  </article>
  )
}
