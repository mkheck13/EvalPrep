"use client"

import PaginationComponent from '@/components/PaginationComponent'
import React, { useEffect, useState } from 'react'

export default function page(){

  const [form, setForm] = useState({name: '', favoriteCat: ''})
  const isFilled = form.name != '' && form.favoriteCat != '';
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setForm({...form, [e.target.name]: e.target.value})
    // created a clone of the form and setting the values based on the target values
  }

  const handleForm = () =>{
    isFilled ? setIsSubmitted(true)
    : setForm({name: '', favoriteCat: ''})
    //resetting values to empty strings if "isFilled" is false
  }

  useEffect(()=>{
    console.log(form)
  },[form])


  return (
    <>
    
    <div className="flex flex-col items-center  p-24">
      <h1>Jacob's Lecture</h1>
    </div>

    <div className="text-center">
      <p>A form that is requires both fields be filled out before it can be submitted and disappears</p>
      <br />
      <form className={isSubmitted ? 'hidden' : ''}>
        <h1>Favorite Cat Form</h1>
        <div className="bg-white shadow-md rounded p-8">
          <div className="mb-4">
            <input onChange={updateForm} type="text" name='name'placeholder='Name' className="border rounded p-3" value={form.name} />
          </div>
          <div className="mb-4">
            <input onChange={updateForm} type="text" name='favoriteCat' placeholder='Favorite Cat' className="border rounded p-3" value={form.favoriteCat} />
          </div>
          <button className={`text-white py-2 px-4 rounded ${isFilled ? 'bg-green-500' : 'bg-red-500'}`} type="button" onClick={handleForm}>{isFilled ? "Submit" : "Clear"}</button>
        </div>
      </form>
      <p className={`${isSubmitted ? "" : "hidden"} text-white`}>Thank You for your submission</p>





    </div>








    <div className="flex min-h-screen flex-col items-center  p-24">
      <PaginationComponent/>
    </div>
    </>
  )
}

