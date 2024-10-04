'use client'
import React, { useState, useEffect } from 'react'
import plantation from '../../assets/Plantation/plantation.png'
import { features } from '../../data/Plantation/data'

import Plant from '../../components/Plantation/Plant'
import whyChooseUs from '../../assets/Plantation/whyChooseUs.png'
import Features from '../../components/Plantation/Features'
import everyoneDeservesPlant from '../../assets/Plantation/everyoneDeservesPlant.png'
import { CiSearch, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Cart from '../../components/Plantation/Cart'
import { useSelector } from 'react-redux'
import { fetchCollection } from '@/services/firestore'
import Loading from '@/components/loader/loader'
import Link from 'next/link'
import SocialWorkUpload from '@/components/SocialWorkUpload'

function Page() {
  const isMember = useSelector((state) => state.user.userData.isMember);
  const [category, setCategory] = useState('Software')

  const [activeCategory, setActiveCategory] = useState('0')
  const [categoryData, setCategoryData] = useState([])

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    updateCategoryData('Software')
  }, [])

  const updateCategoryData = async (selectedCategory) => {
    let data = []
    setLoading(true);
    switch (selectedCategory.toLowerCase()) {
      case 'software':
        data = await fetchCollection('Software-Resources');
        break;

      case 'courses':
        data = await fetchCollection('courses-resources');
        break;
      case 'premium graphics':
        data = await fetchCollection('premiumGraphics-resources');
        break;
      case 'influencer media':
        data = await fetchCollection('influencerMedia-resources');
        break;
      case 'a++ premium':
        data = await fetchCollection('extraPremium-resources');
        break;
      case 'internship':
        data = await fetchCollection('internship-resources'); // Ensure this collection exists in Firestore
        break;
      default:
        data = [];
    }
    setCategoryData(data)
    setLoading(false);
  }

  const changeCategory = (e) => {
    const selectedCategory = e.target.innerHTML.replace(/&amp;/g, '&').trim(); // Sanitize the HTML entity
    setCategory(selectedCategory)
    updateCategoryData(selectedCategory)

    const currentElement = document.getElementById(e.target.id)
    if (currentElement) {
      currentElement.classList.add('bg-green-200', 'text-green-800', 'shadow-lg')
      currentElement.classList.remove('bg-white', 'text-gray-700')
    }

    const lastActiveElement = document.getElementById(activeCategory)
    if (lastActiveElement) {
      lastActiveElement.classList.remove('bg-green-200', 'text-green-800', 'shadow-lg')
      lastActiveElement.classList.add('bg-white', 'text-gray-700')
    }
    setActiveCategory(e.target.id)
  }

  const [cart, setCart] = useState(false)

  useEffect(()=>{
    console.log(categoryData);
  },[categoryData])

  const renderPlants = () => (
    <>
      {loading && <Loading/>}
      <ul className='flex flex-wrap justify-center p-5 text-center mb-10'>
        <li 
          onClick={changeCategory} 
          id='0' 
          className={`px-4 py-2 mx-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
            activeCategory === '0' ? 'bg-green-200 text-green-800 shadow-lg' : 'bg-white text-gray-600 shadow-md hover:bg-green-300 hover:text-green-900'
          }`}
        >
          Software
        </li>

        <li 
          onClick={changeCategory} 
          id='1' 
          className={`px-4 py-2 mx-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
            activeCategory === '1' ? 'bg-green-200 text-green-800 shadow-lg' : 'bg-white text-gray-600 shadow-md hover:bg-green-300 hover:text-green-900'
          }`}
        >
          Courses
        </li>
        <li 
          onClick={changeCategory} 
          id='2' 
          className={`px-4 py-2 mx-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
            activeCategory === '2' ? 'bg-green-200 text-green-800 shadow-lg' : 'bg-white text-gray-600 shadow-md hover:bg-green-300 hover:text-green-900'
          }`}
        >
          Premium Graphics
        </li>
        <li 
          onClick={changeCategory} 
          id='3' 
          className={`px-4 py-2 mx-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
            activeCategory === '3' ? 'bg-green-200 text-green-800 shadow-lg' : 'bg-white text-gray-600 shadow-md hover:bg-green-300 hover:text-green-900'
          }`}
        >
          Influencer Media
        </li>
        <li 
          onClick={changeCategory} 
          id='4' 
          className={`px-4 py-2 mx-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
            activeCategory === '4' ? 'bg-green-200 text-green-800 shadow-lg' : 'bg-white text-gray-600 shadow-md hover:bg-green-300 hover:text-green-900'
          }`}
        >
          A++ Premium
        </li>
        <li 
          onClick={changeCategory} 
          id='5' 
          className={`px-4 py-2 mx-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
            activeCategory === '5' ? 'bg-green-200 text-green-800 shadow-lg' : 'bg-white text-gray-600 shadow-md hover:bg-green-300 hover:text-green-900'
          }`}
        >
          Internship
        </li>
      </ul>

      <div className='flex flex-col md:flex-row w-11/12 md:w-4/5 mx-auto justify-between text-2xl my-10'>
        <h1 className='text-center md:text-left font-bold text-xl md:text-2xl'>{category}</h1>
        <div className='flex gap-4 mt-4 md:mt-0'>
          <CiSearch className='text-xl md:text-2xl cursor-pointer' />
          <FiShoppingCart onClick={() => setCart(true)} className='text-xl md:text-2xl cursor-pointer' />
          <CiUser className='text-xl md:text-2xl cursor-pointer' />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 md:w-4/5 gap-4 mx-auto'>
        {categoryData.map((item, idx) => (
          <Plant
            img={item.img_url}
            id={item.id}
            name={item.title}
            rate={item.membership}
            key={idx}
            category={item.category}
            deliver={item.membership}
            tag={item.Tag}
            downloadLink={item.downloadLink}
          />
        ))}
      </div>
    </>
  )

  return (
    <>
      <div className='w-full bg-[#F2FFF4] relative'>
        <div 
          style={{ backgroundImage: `url(${plantation.src})` }} 
          className='w-full h-64 md:h-96 lg:h-[80vh] bg-cover bg-no-repeat bg-center'
        >
          <div className='flex flex-col ml-[10%] md:ml-[30%] justify-center h-full w-4/5 lg:w-3/5 gap-4 lg:gap-6 absolute'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#306131] z-50'>
              📹 Upload Your Social Work Video and Get a Free Product!
            </h1>
            <a href="#socialWorkUpload">
              <button className='bg-blue-500 text-white w-36 rounded-xl py-2 px-4 text-sm md:text-base z-50'>
                Explore more
              </button>
            </a>
          </div>
        </div>
      </div>

      {cart ? <Cart setCart={setCart} /> : renderPlants()}

      <h1 className='text-center font-bold text-2xl md:text-3xl my-10'>Why People Choose Us?</h1>
      <div className='w-11/12 mx-auto mb-10 flex flex-col md:flex-row gap-8'>
        <div 
          className='w-full md:w-1/2 h-60 md:h-[35rem] lg:h-[40rem] rounded-xl p-6 md:p-10 bg-cover bg-center bg-no-repeat shadow-md flex flex-col gap-4' 
          style={{ backgroundImage: `url(${whyChooseUs.src})` }}
        >
          <h1 className='font-bold text-lg md:text-2xl lg:text-3xl w-4/5'>BECOME SKILLED AT WHAT MATTERS</h1>
          <button className='rounded-full border bg-[#203a63] text-white text-sm md:text-base w-3/4 md:w-1/3 p-2'>
            Read Our Story --
            {'>'}
          </button>
        </div>
        <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {features.map((item, idx) => (
            <Features 
              img={item.img} 
              title={item.title} 
              content={item.content} 
              col={item.col} 
              key={idx} 
            />
          ))}
        </div>
      </div>

      <div 
        className='w-11/12 mx-auto py-10 rounded-3xl mt-36 bg-cover bg-no-repeat bg-center' 
        style={{ backgroundImage: `url(/banner.png)` }}
      >
        <div className='md:w-5/6 lg:w-3/5 mx-auto bg-black/50 backdrop-opacity-80 rounded-2xl flex flex-col text-white font-extrabold place-items-center gap-4 text-center p-5'>
          <h1 className='text-lg md:text-2xl'>We believe everyone deserves a plant</h1>
          <p className='text-xs md:text-base'>
            Regardless of your plant expertise, we can provide you with information, connections, inspiration as you pursue your interest in gardening.
          </p>
          <Link href={'/Donate-premium'}>
            <button className='border text-xs md:text-base border-white w-max px-6 md:px-10 py-2 rounded-full'>
              Donate Premium --
              {'>'}
            </button>
          </Link>
        </div>
      </div>

      <div id="socialWorkUpload">
        <SocialWorkUpload />
      </div>
    </>
  )
}

export default Page
