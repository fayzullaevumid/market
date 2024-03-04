 'use client';
import {useRouter} from 'next/navigation'
import './page.css'

const Navbar = () => {
    const router = useRouter();
    return(
        <div className="navbar">
           <p className="text-1"><strong>Ecommercery</strong></p>
           <div className="navbar-2">
            <a href="/">Home</a>
            <a href="/card">All Products</a>
            <a href="">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/client">Client View</a>
           </div>
           <button className="button-22" onClick={() => router.push('./login')}>Login</button>
        </div>
    )
}

export default Navbar