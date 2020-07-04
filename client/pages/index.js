import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch (...args).then( res => res.json())

const Index = () =>{

    const { data, error} = useSWR('/api/get-promo',fetcher);

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
                {!data && <p>Carregando...</p>}
                {!error && data && data.showCoupom &&
                <div className="mt12 text-center mb-10">
                    <p>{data.message}</p>
                </div>
                }
            </div>
            )
}

export default Index