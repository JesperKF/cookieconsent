"use client";
import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

const Likebutton = (props) => {
    const [likes, setLikes] = useState(0);
    return (
        <button onClick={() => setLikes(likes + 1)}>
            <FaThumbsUp /> {props.label}{likes > 1 ? "s" : ""} {likes}
        </button>
    );

};

export default Likebutton;