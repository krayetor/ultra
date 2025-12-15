import { useState, useEffect } from "react";

const useTypewriter = (words, speed = 100) => {
    
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charindex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        // current word to be displayed
        const currentWord = words[wordIndex];

        // typewriter logic function
        const handleTyping = () => {
            if (isDeleting) {
                // deleting: removes characters
                setText(currentWord.substring(0, charindex - 1));
                setCharIndex(prev => prev -1);
            } else {
                // typing: add characters
                setText(currentWord.substring(0, charindex + 1));
                setCharIndex(prev => prev + 1);
            }
        };

        let timeout;

        if (!isDeleting && charindex === currentWord.length) {
            // done typing word: waits 1 sec, then starts deleting
            timeout = setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charindex === 0) {
            // done deleting word: moves to the next word, then starts typing
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            // typing or deleting: defining speed
            const typingSpeed = isDeleting ? speed /2 : speed;
            timeout= setTimeout(handleTyping, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [charindex, isDeleting, wordIndex, words, speed]);

    return text;
};

export default useTypewriter;