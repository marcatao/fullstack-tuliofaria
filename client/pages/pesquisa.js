import React, { useState} from 'react';
import Link from 'next/link';

const Pesquisa = () =>{

    const  [ form, setForm] = useState({
        Nome : '111',
        Email: '222',
        Whatsapp: '333'
    })  


const save = async () =>{
 
try{ 
 const response = await fetch('api/save',{
       method: 'POST',
       body: JSON.stringify(form)
   })

   const data = await response.json()
   console.log(data)

}   catch (err){
    console.log(err)
}
}
const onChange = evt =>{
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
        ...old,
        [key]: value
    }))
}
    return (
      <div className='pt-6'>
      <div className="mt12 text-center">
          <p>Criticas e sugestões.</p>
      </div>
      <div className="w-1/5 mx-auto">
      
          <input type="text" className='p-4 block shadow bg-blue-100 m-2 rouded'placeholder="Nome" onChange={onChange} name="Nome" value={form.Nome}></input>
          <input type="text" className='p-4 block shadow bg-blue-100 m-2 rouded'placeholder="Email"  onChange={onChange} name="Email" value={form.Email}></input>
          <input type="text" className='p-4 block shadow bg-blue-100 m-2 rouded'placeholder="Whatsapp"  onChange={onChange} name="Whatsapp" value={form.Whatsapp}></input>
          <button className='bg-yellow-400 px-6 py-4 font-bold rounded-lg shadow-lg block m-2'
                  onClick={save}>Enviar resposta</button>
      </div>
      <div className="mt12 text-center">
          <p>Mensagem desconto.</p>
      </div>
  </div>
            );
}

export default Pesquisa