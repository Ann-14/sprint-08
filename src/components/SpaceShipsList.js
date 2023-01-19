
import {Loading} from './Loading'
import {  useGlobalContext } from '../Context'
import { SpaceShip } from './SpaceShip'


export const SpaceShipsList = () => {
const {loading,spaceShips,handleNextPage,handlePreviousPage,setUrlShip} = useGlobalContext()

if(loading){
  return <Loading />
}
if(spaceShips.length < 1){
  return (
  <h2>
No spaceships matched your search criteria
  </h2>
  )
}
return (
  
    <article className=''>
    <div>
      {
        spaceShips.map((item,index) => {
          return <SpaceShip key={index} id={index} {...item} />
        })
      }
    <button onClick={handleNextPage}>Next ➡ </button>
    <button onClick={handlePreviousPage}>Back ⬅</button>
    </div>
    </article>
)
}
