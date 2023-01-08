
import {Loading} from './Loading'
import {  useGlobalContext } from '../Context'
import { SpaceShip } from './SpaceShip'


export const SpaceShipsList = () => {
const {spaceShips,loading,handleNextPage,handlePreviousPage} = useGlobalContext()
console.log(spaceShips)

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
  <div>
    <h2>spaceShips</h2>
    <div>
      {
        spaceShips.map((item,index) => {
          return <SpaceShip key={index} id={index} {...item} />
        })
      }
    </div>
    <button onClick={handleNextPage}>Next ➡ </button>
    <button onClick={handlePreviousPage}>Back ⬅</button>
  </div>
)
}
