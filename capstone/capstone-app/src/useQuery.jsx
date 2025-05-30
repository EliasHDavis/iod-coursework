import { useEffect, useState } from "react";

export function useQuery(requestConfig){

    const [ data, setData ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
      
        const queryData = async () => {
          setLoading(true);
          try {
            const response = await fetch(requestConfig.url, requestConfig.options)
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

        if (requestConfig){
    queryData(); 
        }

    }, [requestConfig]); 

    return  {
      loading, 
      error, 
      data
    }
    
}