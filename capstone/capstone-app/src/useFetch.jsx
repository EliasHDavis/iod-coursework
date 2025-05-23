import { useEffect, useState } from "react";

export async function useFetch(url){

    const [ data, setData ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
    
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const json = await response.json();
          setData(json);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      };

      if (url){
   fetchData(); 
      }
  
   
    }, [url]); 

    return  {
      loading, 
      error, 
      data
    }
    
}