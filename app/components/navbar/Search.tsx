'use clinet'
import {BiSearch} from 'react-icons/bi'

const Search = () => {
  return (
    // <div>
    <div className='
    border-[1px]
    w-full
    py-1
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
      '>
<div className='
flex
flex-row
items-center
justify-between'>

  <div className='
  text-sm
  font-semibold
  px-6'>
AnyWhere
  </div>
  <div className='
  hidden
  sm:block
  text-sm
  font-semibold
  px-3
  border-x-[1px]
  flex-1
  text-center'>
Any Week
  </div>
  <div className='
  flex
  flex-row
  text-sm
  pl-3
  pr-2
  gap-3
  items-center
  text-gray-600
  '>
    <div className='hidden sm:block'>Add Guests</div>
    <div className='
    p-2
    bg-rose-500
    rounded-full
    text-white'>
      <BiSearch size={18}/>
    </div>
  </div>

</div>
      </div>
    // </div>
  )
}

export default Search