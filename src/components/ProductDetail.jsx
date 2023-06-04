import {XMarkIcon} from '@heroicons/react/24/solid'

import '../styles/styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/context'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg  bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='text-xl text-medium'>Details</h2>
            <div>
                <XMarkIcon 
                  onClick={() => context.closeProductDetail()}
                  className='h-6 w-6 text-black cursor-pointer'/>
            </div>
            <h2>{context.productToShow.name}</h2>
        </div>
    </aside>
  )
}

export default ProductDetail