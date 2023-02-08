
import { Loading } from './Loading'
import { useGlobalContext } from '../Context'
import { SpaceShip } from './SpaceShip'

import { MdOutlineNavigateNext } from 'react-icons/md';

import { MdArrowBackIos } from 'react-icons/md';


export const SpaceShipsList = () => {
  const { loading, spaceShips, handleNextPage, handlePreviousPage,  } = useGlobalContext()
 
  if (loading) {
    return <Loading />
  }
  if (spaceShips.length < 1) {
    return (
      <h2>
        No spaceships matched your search criteria
      </h2>
    )
  }
  return (
    <>
      <article className=''>
        <div>
          {
            spaceShips.map((item, index) => {
              return <SpaceShip key={index} id={index} {...item} />
            })
          }
        </div>
        <div className='flex justify-center mt-6 mb-7' >
          <div>
            <button className="bg-transparent p-2 rounded border border-gray-300 mr-4 hover:border-yellow-500 flex" onClick={handlePreviousPage}><MdArrowBackIos className='arrow-back mt-1'></MdArrowBackIos>Previous</button>
          </div>
          <div>
            <button className="bg-transparent p-2 rounded border border-gray-300 mr-4 hover:border-yellow-500  flex" onClick={handleNextPage}>Next<MdOutlineNavigateNext className='arrow-next'></MdOutlineNavigateNext></button>
          </div>
        </div>
      </article>
    </>
  )
}
