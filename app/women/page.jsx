import React from "react";
import Produc from "../product/page";
import Navbar from "../navbar/page";
import './bbb.css'

const products = [
  { id: 1,
    name: 'Product-1',
    price: '$42',
    image: 'https://specials-images.forbesimg.com/imageserve/64fb2d3f0e6bda5647f9e2d1/Everlane-Tencell-Oversized-Blazer/960x0.jpg?cropX1=0&cropX2=640&cropY1=0&cropY2=640'
  },
  { id: 1, 
    name: 'Product-2',
    price: '$40', 
    image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/XBCIVNU6VDOTSTB3KGOJVKPWQM.jpg'
  },
  { id: 1, 
    name: 'Product-3',
    price: '$35', 
    image: 'https://specials-images.forbesimg.com/imageserve/64f78dc0de89ced7fc1e813e/City-Sleek-Barrel-Leg-Pant-Full-Length-Light-Utilitech/0x800.jpg?cropX1=32&cropX2=732&cropY1=0&cropY2=924'
  },
  { id: 1, 
    name: 'Product-3',
    price: '$35', 
    image: 'https://specials-images.forbesimg.com/imageserve/64f78dc0de89ced7fc1e813e/City-Sleek-Barrel-Leg-Pant-Full-Length-Light-Utilitech/0x800.jpg?cropX1=32&cropX2=732&cropY1=0&cropY2=924'
  },
]

const Card = () =>{

      return(
        <div>
          <div className="card-con">
          <Navbar/>
         {products.map(product => (
          <Produc key={product.id}
           product={product}
           />
         ))}
         </div>
        </div>
      )
}

export default Card;