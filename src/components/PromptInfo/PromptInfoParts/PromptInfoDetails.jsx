import React from 'react';
import Title from "../../ui/Title/Title";
import {Rating} from "@mui/material";

const PromptInfoDetails = ({product}) => {
    return (
        <div className="prompt__info-descr">
            <div className="prompt__info-head">
                <Title fontSize="48px">{product.title}</Title>
                <div className="prompt__head-tools">
                    <div className="prompt__info-rate">
                        <p>{product.details.rate}</p>
                        <Rating name="half-rating-read" defaultValue={product.details.rate} precision={0.1} readOnly
                                style={{color: 'rgb(237, 67, 220)', fontSize: 22}}/>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none">
                        <path
                            d="M16.6875 3.9375C14.7188 3.9375 13.0069 4.82531 12 6.31312C10.9931 4.82531 9.28125 3.9375 7.3125 3.9375C5.82119 3.93924 4.39146 4.53243 3.33694 5.58694C2.28243 6.64146 1.68924 8.07119 1.6875 9.5625C1.6875 12.3 3.39375 15.1491 6.75937 18.0291C8.30162 19.3432 9.96752 20.5049 11.7338 21.4978C11.8156 21.5418 11.9071 21.5648 12 21.5648C12.0929 21.5648 12.1844 21.5418 12.2662 21.4978C14.0325 20.5049 15.6984 19.3432 17.2406 18.0291C20.6062 15.1491 22.3125 12.3 22.3125 9.5625C22.3108 8.07119 21.7176 6.64146 20.6631 5.58694C19.6085 4.53243 18.1788 3.93924 16.6875 3.9375ZM12 20.3541C10.4616 19.4663 2.8125 14.7863 2.8125 9.5625C2.81374 8.36941 3.28825 7.22553 4.13189 6.38189C4.97553 5.53825 6.11941 5.06374 7.3125 5.0625C9.21375 5.0625 10.8103 6.07781 11.4797 7.71281C11.5221 7.81598 11.5942 7.90422 11.6868 7.96632C11.7795 8.02842 11.8885 8.06158 12 8.06158C12.1115 8.06158 12.2205 8.02842 12.3132 7.96632C12.4058 7.90422 12.4779 7.81598 12.5203 7.71281C13.1897 6.07781 14.7863 5.0625 16.6875 5.0625C17.8806 5.06374 19.0245 5.53825 19.8681 6.38189C20.7118 7.22553 21.1863 8.36941 21.1875 9.5625C21.1875 14.7863 13.5384 19.4663 12 20.3541Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
            <p className="prompt__descr-text">
                Dive into a world of vibrant, imaginative art collages featuring diverse characters and enchanting
                backgrounds. Each piece blends vintage and modern elements to create a unique, whimsical aesthetic.
                Perfect for creative projects, art collections, and adding a touch of whimsy to personal or professional
                spaces. Unlock All Prompts and Enjoy 20 FREE Bonus Prompts! EXTRA BONUS - An Additional Free Prompt
                Included!
            </p>
        </div>
    );
};

export default PromptInfoDetails;