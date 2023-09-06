import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
    console.log(url)
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await axios.get(url);
                const data = await resp?.data;
                console.log(resp)

                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {isLoading, data, error};
};

