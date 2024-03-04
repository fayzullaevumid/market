'use client'
import React, { useEffect } from "react";
import './card.css'
import Products from "../products/page";
import Navbar from "../navbar/page";
import { db } from "../config";
import {getDocs, doc, collection } from "firebase/firestore";

const products = [
  { id: 1,
    name: 'Product-1',
    price: '$20',
    image: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/831062/1.jpg?6945'
  },
  { id: 1, 
    name: 'Product-2',
    price: '$20', 
    image: 'https://images.meesho.com/images/products/204307799/s8zxk_512.webp'
  },
  { id: 1, 
    name: 'Product-3',
    price: '$22', 
    image: 'https://rukminim2.flixcart.com/image/550/650/xif0q/shirt/x/l/d/s-st28-vebnor-original-imagq6aqgh2hzv22.jpeg?q=90&crop=true'
  },
  { id: 1, 
    name: 'Product-4',
    price: '$19', 
    image: 'https://images.wrangler.com/is/image/Wrangler/MGW90BR-HERO?$KDP-XLARGE$'
  },
  { id: 1, 
    name: 'Product-5',
    price: '$15', 
    image: 'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
  },
  { id: 1, 
    name: 'Product-6',
    price: '$16', 
    image: 'https://i.ebayimg.com/images/g/9BQAAOSwH19kCY9Y/s-l1200.webp'
  },
  { id: 1,
    name: 'Product-7',
    price: '$32',
    image: 'https://www.oneills.com/media/wysiwyg/cms-category-landing/kids-subcat/kids-landing-all-clothing-september-23.jpg'
  },
  { id: 1, 
    name: 'Product-8',
    price: '$28', 
    image: 'https://thumbs.nosto.com/quick/oneillsirelandnew/8/867164/262a5d9c0ccba02196512e9c0d09d1f599876e37a7a2765abb95478b4b3c3172/A'
  },
  { id: 1, 
    name: 'Product-9',
    price: '$25', 
    image: 'https://thumbs.nosto.com/quick/oneillsusanew/8/848858/4aa375aefad60857fb87126a73fa601da1bc75e4a4f47d0a5e8aa3346df0e4c6/A'
  },
  { id: 1, 
    name: 'Product-10',
    price: '$28', 
    image: 'https://www.oneills.com/media/catalog/product/cache/7c0093f75f453d86e7d165133c528de2/a/m/am3a9082.jpg'
  },
  { id: 1, 
    name: 'Product-11',
    price: '$30', 
    image: 'https://www.sportsdirect.com/images/products/31800402_h.jpg'
  },
  { id: 1, 
    name: 'Product-12',
    price: '$23', 
    image: 'https://craft-products-production.imgix.net/images/2414_d5fbe3b310-1910153-680100_evolve-halfzip-jr_closeup1-original.jpg?q=70&fit=clip&w=600&fm=jpg&auto=format    '
  },
  { id: 1,
    name: 'Product-13',
    price: '$42',
    image: 'https://specials-images.forbesimg.com/imageserve/64fb2d3f0e6bda5647f9e2d1/Everlane-Tencell-Oversized-Blazer/960x0.jpg?cropX1=0&cropX2=640&cropY1=0&cropY2=640'
  },
  { id: 1, 
    name: 'Product-14',
    price: '$40', 
    image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/XBCIVNU6VDOTSTB3KGOJVKPWQM.jpg'
  },
  { id: 1, 
    name: 'Product-15',
    price: '$35', 
    image: 'https://specials-images.forbesimg.com/imageserve/64f78dc0de89ced7fc1e813e/City-Sleek-Barrel-Leg-Pant-Full-Length-Light-Utilitech/0x800.jpg?cropX1=32&cropX2=732&cropY1=0&cropY2=924'
  },
  { id: 1, 
    name: 'Product-15',
    price: '$35', 
    image: 'https://specials-images.forbesimg.com/imageserve/64f78dc0de89ced7fc1e813e/City-Sleek-Barrel-Leg-Pant-Full-Length-Light-Utilitech/0x800.jpg?cropX1=32&cropX2=732&cropY1=0&cropY2=924'
  },
]

const Card = () =>{
  const market = collection(db, 'market_project_uz')
  useEffect(() => {
  const getKorzina = async () => {
  const data = await getDocs(market)
  console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
};
getKorzina();
},[] )
      return(
        <div>
          <div className="card-con">
          <Navbar/>
         {products.map(product => (
          <Products key={product.id}
           product={product}
           />
         ))}
         </div>
        </div>
      )
}

export default Card;