import { Link } from 'react-router-dom'




export const SpaceShip = ({ name, model, url, }) => {

  let shipId;
  if (url.length === 34) {
    shipId = (url.slice(url.length - 2, url.length - 1))
  } else {
    shipId = (url.slice(url.length - 3, url.length - 1))
  }


  return (
    <article className='container justify-center items-center mx-auto px-6 mt-4 gap-2 '  >

      <div className='flex flex-col bg-gray-700  text-gray-300 mt-2 px-8 py-2 ' >

        <h3 className='text-xl font-bold'>{name}</h3>
        <h6 className='text-md'>{model}</h6>
        <Link to={`/spaceship/${shipId}`} className='text-sm hover:underline text-gray-400'>Details</Link>
      </div>

    </article>
  )
}
