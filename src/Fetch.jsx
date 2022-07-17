import { useEffect, useState } from "react"
const useFetch = () => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const url = `https://nepal-weather-api.herokuapp.com/api/?place=${city}`;
    

    useEffect(() => {
        const fetch = () => {
         axios.get(url).then((data) => { setData(data.data); setLoading(false) }).catch((err) => console.log(err))
        }

        fetch();
    }, [])


    return [isLoading, data];
};
export default useFetch;


