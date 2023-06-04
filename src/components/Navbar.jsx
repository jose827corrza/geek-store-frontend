
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../context/context'

const Navbar = () => {
    const {count} = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between item-center fixed z-10 w-full top-0 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-mono font-semibold text-lg text-cyan-800'>
                <NavLink 
                to={'/'}
                >
                Geek Store
                </NavLink>
            </li>
            <li>
                <NavLink to={'/motorcycles'}
                className={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Motorcycles
                </NavLink>
            </li>
            <li>
                <NavLink to={'/skateboards'}
                className={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Skteboards
                </NavLink>
            </li>
            <li>
                <NavLink to={'/electronics'}
                className={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Electronics
                </NavLink>
            </li>
        </ul>

        <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
                testman@gmail.com
            </li>
            <li>
                <NavLink to={'/my-orders'}
                className={({isActive}) => isActive ? activeStyle : undefined}
                >
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to={'/signin'}
                className={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Sign In
                </NavLink>
            </li>
            <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'/>
                {count}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar