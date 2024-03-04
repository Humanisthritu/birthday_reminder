import { useState } from "react";
import data from "./components/Data"
import List from "./components/List";


function App() {

    const [people,setPeople] = useState(data)
  


  return (
   <>
   <main>
    <section className='container'>
        <h1>
            {people.length} birthday today
        </h1>
        <List people ={people}/> 
        <button onClick={()=>setPeople([])}>clear all</button>
    </section>
   </main>
   

   </>
  );
}

export default App;
