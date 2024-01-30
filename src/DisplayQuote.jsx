import React, { useEffect } from 'react';
import { setQuote } from './reducer/quoteSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function DisplayQuote() {
    const dispatch = useDispatch();
    const quoteText = useSelector((state) => state.quote.text);

    const fetchRandomQuote = () => {
        axios.get('https://api.quotable.io/random')
            .then(response => {
                const randomQuote = response.data.content;
                dispatch(setQuote(randomQuote));
            })
            .catch(error => {
                console.error("Error while fetching: ", error);
            });
    };


    useEffect(() => {
        fetchRandomQuote();
    }, []);

    return (
        <div>
            <button onClick={fetchRandomQuote}>Get Random Quote</button>
            <h1>Random Quote : </h1>
            <p>{quoteText}</p>
        </div>
    )
}

export default DisplayQuote;