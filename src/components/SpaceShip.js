import { Link } from 'react-router-dom'




export const SpaceShip = ({name,model,url,}) => {
  
let shipId;
  if(url.length === 34){ 
    shipId = (url.slice(url.length-2,url.length-1))
  } else{
    shipId = (url.slice(url.length-3,url.length-1))
  }


  return (
    <article className='' >
    
    <div className='flex flex-col bg-gray-700 gap-2 mt-2 text-gray-300  py-2' >
      <div>{name}</div>
      <div>{model}</div>
      <Link to={`/spaceship/${shipId}`} className='flex justify-end px-2'>details</Link>
    </div>
  </article>
  )
}
