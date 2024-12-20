import React from 'react';
import Card from "../../Card/Card";
import Carousel from "react-multi-carousel";
import PlaceholderCard from "../../Card/PlaceholderCard";

const CustomButtonGroup = ({ next, previous }) => {
    return (
        <div className="custom-button-group">
            <button onClick={previous} className="custom-arrow custom-left-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="41" viewBox="0 0 22 41" fill="none" className="arrow__img">
                    <path d="M21 1L1 20.5L21 40" strokeLinecap="round"/>
                </svg>
            </button>
            <button onClick={next} className="custom-arrow custom-right-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="41" viewBox="0 0 22 41" fill="none" className="arrow__img">
                    <path d="M1 1L20.5 20.5L1 40" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
    );
};

const PromptsList = ({prompts, isLoading}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1534 },
            items: 6
        },
        largeDesktop: {
            breakpoint: { max: 1534, min: 1324 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1324, min: 1024 },
            items: 5
        },
        miniDesktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="prompts__list">
            <Carousel
                arrows={false}
                responsive={responsive}
                customButtonGroup={<CustomButtonGroup/>}
                renderButtonGroupOutside={true}
            >
                {isLoading
                    ?
                    <div>
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                    </div>
                    :
                    prompts.map(prompt =>
                        <Card card={prompt} key={prompt.id}/>
                    )
                }
            </Carousel>
        </div>
    );
};

export default PromptsList;