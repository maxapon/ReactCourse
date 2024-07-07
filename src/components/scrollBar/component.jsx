import { useState, useEffect } from "react"


export const ScrollBar = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
            const scrolled = (winScroll / height) * 100;

            setPercent(scrolled)
        }
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])

    return (<div className="scrollProgressBar" style={{width: percent + '%'}}></div>)
}