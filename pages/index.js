import React from 'react'
import Link from 'next/link'

const Index = () =>{
    return (
            <div>
                <h1>Ola Teste</h1>
                <div>
                   <Link href='/sobre' >
                    <a>Sobre</a>
                   </Link>
                </div>
            </div>
            )
}

export default Index