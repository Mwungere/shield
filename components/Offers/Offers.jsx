import { OffersData } from '@/constants'
import React from 'react'

const Offers = () => {
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
        <h1 className='text-4xl text-primary font-serif font-bold my-16'>What We Offer</h1>
        <div className='overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide'>
            {OffersData.map((offer, index) => (
                <div key={index} className=''>
                    <img src={offer.imageUrl} alt="img" className='' />
                    <div className=''>
                        <h2 className='text-2xl font-bold text-primary'>{offer.title}</h2>
                        <p className='text-lg text-primary opacity-50'>{offer.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Offers
