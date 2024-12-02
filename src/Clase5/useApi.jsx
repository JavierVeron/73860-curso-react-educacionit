import { useEffect, useState } from "react"

const useApi = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
    }, [])

    return data;
}

export default useApi