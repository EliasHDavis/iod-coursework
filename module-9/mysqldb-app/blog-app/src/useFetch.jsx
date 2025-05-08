import { useState, useEffect } from 'react';

export default function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://localhost:8081/api/posts')
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
  
      fetchData();
    }, []); //you can use number of posts to reload the function with the new ammount

    return  {
      loading, 
      error, 
      data
    }
    
}
//return data as an array of posts