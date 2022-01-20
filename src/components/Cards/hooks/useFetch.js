import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true)
            try {
                const {data} = await axios.get(url);
                setData(data);
                setLoading(false)
            } catch (error) {
            }
        }

        fetchData();

    }, [url]);

    return { data, loading }
}

export default useFetch
