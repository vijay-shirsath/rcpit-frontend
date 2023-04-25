import React from 'react'
import ProductCard from './ProductCard';

const RelatedProducts = () => {

{/*multiple cursors here in the product slug */}

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='mt-[50px] md:mt-[50px] mb-[50px] md:mb-0'>
      <h1 className='mb-7 font-bold text-2xl text-center'>LIFE @RCPIT</h1>
        <h1 className='mb-5 font-bold text-2xl'>RECENT ACTIVITIES</h1>
       <ProductCard responsive = {responsive}/>
    </div>
  )
}

export default RelatedProducts