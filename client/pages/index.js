import React from 'react'
import Link from 'next/link'


const Index = () =>{
    return (
            <div>
                <div className="mt12 text-center">
                    <p>O restaurante X sempre busca por atender melhor seus clientes.<br />
                    Por isso, estamos sempre abertos a ouvir sua opinião.</p>
                </div>
                <div className="text-center my-12">
                    <Link href='/pesquisa' >
                        <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg'>
                            Quero Opniar
                        </a>
                    </Link>
                </div>
                <div className="mt12 text-center">
                    <p>Mensagem desconto.</p>
                </div>
            </div>
            )
}

export default Index