'use client'
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import {products} from '../card/page'
import { db } from "../config";
import {getDocs, doc, collection } from "firebase/firestore";


const Korzina = ({name, price, image}) => {
    const [card, setCard] = useState();
    const korzina = collection(db, 'korzina')
    useEffect(() => {
const getKorzina = async () => {
    const data = await getDocs(korzina)
    console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
};
getKorzina();
},[] )
    return(
        <div>
            <Navbar/>
            <div>
               <img src="" alt="" />
               <h4></h4>
               <p></p>
            </div>
        </div>
    )
}

export default Korzina