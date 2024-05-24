'use client'

import PaginationComponent from '../components/PaginationComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Things we want to have this app do:</h1>
      <p>Pagination</p>
      <p>Having text change color if certain requirements are met</p>
      <p>Filling out and submiting a form</p>
      <p> API calls</p>
      <p> Working with Props</p>

      <PaginationComponent/>
      
    
    
    
   
      
    </main>
  );
}
