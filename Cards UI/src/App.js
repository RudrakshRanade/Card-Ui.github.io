import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Spinner from "./components/Spinner";
import Filter from './components/Filter';
import {filterData , apiUrl } from './data';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const[courses , setCourses] = useState(null);
  const[loading , setLoading] = useState(true);
  const[category , setCategory] = useState(filterData[0].title);

    const fetchData = async() =>{

setLoading(true);

      try{
            const res =  await fetch(apiUrl);
            const output = await res.json();
            setCourses(output.data); 
      }
    
      catch(error){
    toast.error("Something went wrong"); }

setLoading(false);

}

  useEffect(() => {
    fetchData();
  } , [] );

return(
<div className="min-h-screen flex flex-col bg-bgDark2">
  <div className="">
  <Navbar/>
  </div>

<div className="bg-bgDark2">
<div>
<Filter filterData = {filterData} setCategory = {setCategory} category = {category}></Filter>
</div>

<div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]" >
{loading ? (<Spinner/>) :  (<Cards courses = {courses} category={category}/>)  }
</div>
</div>

</div>
  );
};

export default App;
