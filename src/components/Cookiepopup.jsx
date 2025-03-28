"use client";
import { FaCookieBite } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";


const Cookiepopup = () => {
    const [cookiesAccpeted, setCookiesAccepted] = useState(false);
    console.log(cookiesAccpeted);

    return (
        !cookiesAccpeted && (
            <section className="cookie-popup">
                <header className="top">
                    <FaCookieBite className="cookie-icon" />
                    <button className="close"><GrFormClose /></button>
                </header>
                <footer>
                    <p>We use cookies to improve your user experience.</p>
                    <button onClick={() => setCookiesAccepted(!cookiesAccpeted)} className="accept">I Like Cookies</button>
                </footer>
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