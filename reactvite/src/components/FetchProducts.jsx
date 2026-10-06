import React from 'react'

function FetchProducts() {
    useEffect(()=>{
        function fetchData(){
            try{
                fetch("https://dummyjson.com/products")
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data);
                })
            }catch(e){
                console.error("Error is", +e);
            }
            finally{
                
            }
        }
        fetchData();
    },[])
  return (
    <div>FetchProducts</div>
  )
}

export default FetchProducts