import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Cart from './Cart1'

function Menu() {
    return (
        <div className='flex gap-4'>
            <CiSearch />
            <Cart />
            <CiUser />
        </div>
    )
}

export default Menu