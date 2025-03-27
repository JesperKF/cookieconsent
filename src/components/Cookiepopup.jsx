"use client";
import { FaCookieBite } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";


const Cookiepopup = () => {
    const [isVisible, setIsVisible] = useState(true);


    const handleAccept = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <section className="cookie-popup">
                <header className="top">
                    <FaCookieBite className="cookie-icon" />
                    <button className="close" onClick={() => setIsVisible(false)}><GrFormClose /></button>
                </header>
                <p>We use cookies to improve your user experience.</p>
                <button className="accept" onClick={handleAccept}>I Like Cookies</button>
            </section>
        )
    )
}


export default Cookiepopup;








// const Likebutton = (props) => {
//     const [likes, setLikes] = useState(0);
//     return (
//         <button onClick={() => setLikes(likes + 1)}>
//             <FaThumbsUp /> {props.label}{likes > 1 ? "s" : ""} {likes}
//         </button>
//     );

// };

// export default Likebutton;