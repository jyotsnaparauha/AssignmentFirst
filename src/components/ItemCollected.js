
import BasicForm from "./BasicForm";
import ShowDataInTable from "./ShowDataInTable";
import React, {useState} from "react";
const ItemCollected =()=>{
    const Dummy_data=[{   id:'e1',
                       name:'',
                       lastname:'',
                       email:'',
                       message:'',
                       detail:'',
}];
    const[loadedData,setLoadedData]= useState(Dummy_data);
    let[isLoading,setIsLoading]=useState(false);
    const setIsLoadingTrue=()=>{
        setIsLoading(true);
        console.log(isLoading);
    }
    const setIsLoadingFalse=()=>{
        
        setIsLoading(false);
        console.log(isLoading);
    }
    const addDataHandler=(data)=>{
      
          setLoadedData((prevState)=>{
        return[...prevState,data]
         }
        )
       
    }
     return(
        <React.Fragment>
       
         {!isLoading && <BasicForm onAdd={addDataHandler} isLodingTrue={setIsLoadingTrue} isLodingFalse={setIsLoadingFalse}/>}
         {isLoading &&  <ShowDataInTable data={loadedData} /> }
         {isLoading && <button onClick={setIsLoadingFalse}>Return</button>}
         </React.Fragment> 
    );

}
export default ItemCollected ;