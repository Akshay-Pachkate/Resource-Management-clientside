import TextField from '@mui/material/TextField';
import { AllResources, ResourceTypes } from "../assets/ResourceCategories";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const [resources, setResources] = useState(AllResources);
  const [searchVal, setSearchVal] = useState("");
  const [filters, setFilters] = useState([]);
  
  useEffect(() => {
    if(filters.length > 0){
      let filteredResources = [];
      AllResources.map(resource => {
        if(filters.includes(resource.type))
          filteredResources.push(resource);
      })
      setResources(filteredResources);
    }else{
      setResources(AllResources);
    }
  }, [filters])

  // function to search for resources
  

  const updateFilter = (event) => {
    const { id, checked} = event.target;
    if(!checked){
      setFilters(prev => prev.filter(filter => filter !== id));
    }else{
      setFilters(prev => [...prev, id]);
    }
    
  }
  
  const search = () => {

    console.log(searchVal);
    
    if(searchVal.trim() !== ""){
      let filteredRes = resources.filter(res => {
        if(res.res.toLowerCase().includes(searchVal.trim().toLowerCase())){
          return res;
        }
      })

      setResources(filteredRes);
    } 
  }



  return (
    <>
      
      <div className="flex max-md:flex-col gap-4 py-4 w-full" >
          
        <aside className="flex flex-col max-md:gap-0 max-md:bg-gray-50 max-md:rounded-xl gap-4 w-[25%] max-md:w-full md:max-lg:w-[30%]" >
          <div className="flex gap-4 md:bg-gray-50 p-4 justify-center items-center rounded-lg " >
            <TextField onChange={e => setSearchVal(e.target.value)}  id="outlined-basic" label="Type Resource name" variant="outlined" size="small" />
            <button onClick={() => search()} className='px-2 py-1 bg-primary text-white rounded-lg h-full' >Search</button>  
          </div> 
          
          
          
          <div className="sm:flex max-sm:mx-auto max-sm:grid max-sm:grid-cols-3 mx-auto md:flex-col justify-center max-sm:flex-wrap max-md:items-center sm:max-md:gap-8 max-md:gap-2 gap-[7px] w-full max-sm:mt-4  md:bg-gray-50 p-4 rounded-lg" >
          {ResourceTypes && ResourceTypes.map((resource, index) => {
            return (
              <div key={index} className="flex gap-2 items-center" >
                <input type="checkbox" onChange={(event) => updateFilter(event)} id={resource} className="h-4 w-4 checkbox" />
                <label htmlFor={resource} className=" font-medium " >{resource}</label>
              </div>
            )
          })}
          </div>
        

        </aside>

        <div className="flex-1 grid grid-cols-4 max-lg:grid-cols-2  lg:max-xl:grid-cols-3 gap-4 ">
          {resources && resources.map((resource, index) =>{
            return <Link to={`/resource/${resource.res}`} key={index}  className=' bg-white grid items-center  aspect-square border rounded-xl hover:bg-secondary hover:text-white transition-colors duration-250' >
              <h1 className='text-2xl text-center h-fit' >{resource.res}</h1>
            </Link>
          })}
        </div>        

      </div>

      
    </>
  );
};

export default Dashboard;
