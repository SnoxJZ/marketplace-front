import React, {useRef, useState} from 'react';
import Card from "../../Card/Card";
import Button from "../../ui/Button/Button";

const PromptsList = ({prompts}) => {
    const listRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

    const handleScroll = (direction) => {
        if (direction === 'left' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            listRef.current.scrollBy({
                left: -listRef.current.offsetWidth,
                behavior: 'smooth'
            });
        } else if (direction === 'right' && currentIndex < Math.ceil(prompts.length / itemsPerPage) - 1) {
            setCurrentIndex(currentIndex + 1);
            listRef.current.scrollBy({
                left: listRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="prompts__list">
            <div className="prompts__list-items" ref={listRef}>
                {prompts.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map(prompt => (
                    <Card card={prompt} key={prompt.id}/>
                ))}
            </div>
            <Button onClick={() => handleScroll(currentIndex === 0 ? 'right' : 'left')}>
                {currentIndex === 0 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="41" viewBox="0 0 22 41" fill="none">
                        <path d="M1 1L20.5 20.5L1 40" stroke="white" stroke-linecap="round"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="41" viewBox="0 0 22 41" fill="none">
                        <path d="M21 1L1.5 20.5L21 40" stroke="white" stroke-linecap="round"/>
                    </svg>
                )}
            </Button>
        </div>
    );
};

export default PromptsList;