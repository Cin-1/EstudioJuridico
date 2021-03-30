import React, { useState } from 'react';
import {css, cx} from '@emotion/css'; 
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Quote = () => {

    const quotes = {
        0: {
            client: "Burger King",
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nulla molestias rerum quam illo harum consectetur iure facilis quas error!",
        },
        1: {
            client: "Mc Donalds",
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nulla molestias rerum quam illo harum consectetur iure facilis quas error! Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        2: {
            client: "Mostaza",
            quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nulla molestias rerum quam illo harum consectetur iure facilis quas error!",
        },
    }

    const [ current, setCurrent ] = useState(quotes[0]);

    const [ active, setActive ] = useState(0);

    const handleSetClick = e => {
        setCurrent(quotes[e.target.getAttribute("data-quote")])
        setActive(e.target.getAttribute("data-quote"))
    }

    console.log(current);

    return ( 
        <div className={css`
            background-image: url("images/library.png");
            height: 400px;
            padding: 0 30px 0 35px;
        `}>
            <div className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 40px auto;
                max-width: 700px;
                padding-top: 60px;
                
                p {
                    text-aling: center;
                    margin-bottom: 20px;
                    color: #fff;
                }
            `}>
                <p style={{
                    minHeight: "100px", 
                    fontSize: "1.3rem",
                }}>{current.quote} <FormatQuoteIcon /></p>
                <p style={{
                    fontSize: "1.5rem",
                }}>{current.client}</p>
                <div className={css`
                    display: flex;

                    span {
                        height: 20px;
                        width: 20px;
                        margin: 0 3px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    }

                    span::before {
                        content: "";
                        height: 12px;
                        width: 12px;
                        background-color: #d4d4d4;
                        border-radius: 50%;
                        transition: background-color 0.3s ease;
                    }
                    span:hover::before {
                        background-color: #B69D74;
                    }

                    span[data-quote="${active}"]::before {
                        background-color: #B69D74;
                    }
                `}>
                    {Object.keys(quotes).map(index => (
                        <span 
                            onClick={e => handleSetClick(e)}
                            data-quote={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Quote;