const fetchDataWithFetch = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data; 
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

const fetchDataWithAsyncAwait = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

import axios from 'axios';
const fetchDataWithAxios = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments/1';
    try {
        const response = await axios.get(apiUrl); 
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
};


// Demo
import { useState } from 'react';

// *Custom hook for data fetching
const useDataFetcher = (fetchFunction: any) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const executeFetch = async () => {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const result = await fetchFunction(); 
            console.log(result);
            setData(result);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    return { data, loading, error, executeFetch };
};

// Component to display fetch results
interface FetchResultProps {
    title: string;
    state: {
        data: any;
        loading: boolean;
        error: any;
    };
    executeFetch: () => Promise<void>;
}
const FetchResult: React.FC<FetchResultProps> = ({ title, state, executeFetch }) => {
    return (
        <section>
            <h2>{title}</h2>
            <button onClick={executeFetch}>Fetch Data with Fetch API</button>
            {state.loading && <p>Loading...</p>}
            {state.data && <pre>{JSON.stringify(state.data, null, 2)}</pre>}
            <hr />
        </section>
    );
};

// Main component
const DataFetching = () => {
    const fetchState = useDataFetcher(fetchDataWithFetch);
    const asyncState = useDataFetcher(fetchDataWithAsyncAwait);
    const axiosState = useDataFetcher(fetchDataWithAxios);
    return (
        <div>
            <FetchResult title='Fetch API' state={fetchState} executeFetch={fetchState.executeFetch} />
            <FetchResult title='Async/Await' state={asyncState} executeFetch={asyncState.executeFetch} />
            <FetchResult title='Axios' state={axiosState} executeFetch={axiosState.executeFetch} />
        </div>
    );

}
export default DataFetching;