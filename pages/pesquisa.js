import React from 'react';
import Link from 'next/link';

const Pesquisa = () =>{
    return (
      <div className='pt-6'>
      <div className="mt12 text-center">
          <p>Criticas e sugestões.</p>
      </div>
      <div className="w-1/5 mx-auto">
          <label className='font-bold m-2'>Seu nome:</label>
          <input type="text" className='p-4 block shadow bg-blue-100 m-2 rouded'></input>
      </div>
      <div className="mt12 text-center">
          <p>Mensagem desconto.</p>
      </div>
  </div>
            );
}

export default Pesquisa