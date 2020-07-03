import React from 'react'
import Link from 'next/link'

const Header = () =>{
    return(
       <React.Fragment>
        <div className="bg-gray-200 p-8 text-center shadow-md">
            <div className="container mx-auto">
            <Link href="/">Palpitbox </Link>
            </div>
        </div>
        <div className="bg-gray-100 p-2 shadow-md text-center">
                  <Link href='/sobre' >
                    <a  className="px-3 hover:underline" >Sobre</a>
                   </Link>
                   <Link href='/contato' >
                    <a className="px-3 hover:underline" >Contato</a>
                   </Link>
                   <Link href='/pesquisa' >
                    <a className="px-3 hover:underline" >Pesquisa</a>
                   </Link>
        </div>
        </React.Fragment>          
    )
}

export default Header