import { useContext } from "react"

import {PlusIcon} from '@heroicons/react/24/solid'

import { ShoppingCartContext } from "../context/context"


const Card = (data) => {
  const {count, setCount, openProductDetail, setProductToShow} = useContext(ShoppingCartContext)

  const setProductDetail =(productInfo) => {
    openProductDetail()
    setProductToShow(productInfo)
  }
  return (
    <div 
      onClick={() => setProductDetail(data)}
      className=' w-56 h-60 cursor-pointer'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-1 left-1 bg-white/60 rounded-lg  text-xs text-black py-0.5 px-3'>{data.category}</span>
            <img className='w-full h-full object-cover rounded-lg' src={data.image} alt="test_card" />
            <div 
              className='absolute top-1 right-1 bg-white w-6 h-6 rounded-full flex justify-center items-center'
              onClick={() => setCount(count + 1)}
              >
              <PlusIcon 
                className='h-6 w-6 text-black'/>
            </div>
        </figure>
        <p className='flex justify-between mx-1'>
            <span className='text-sm font-light'>{data.name}</span>
            <span className='text-lg font-medium'>${data.price}</span>
        </p>
    </div>
  )
}

export default Card