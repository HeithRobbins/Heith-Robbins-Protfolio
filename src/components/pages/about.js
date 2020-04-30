import React from "react";

import profilePicture from "../../../static/assets/images/bio/headshot.jpg"



export default function () {
    return (
        <div className="content-page-wrapper">
            <div
             className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                My name is Heith Britten Robbins. Many call me Brit, but I prefer Heith. I’m an interesting person to work with, projecting positive characteristics: fun, energetic, motivating spirit, trend setter, persistent with non-negotiable integrity to job tasks. I aim for excellence where upper management can see I'm a reliable asset. I know most job aspects, but can adapt and learn quickly company policy and procedures while meeting job training requirements enthusiastically. My assertiveness will be notable from my first assignment. I've had much success in all my employment efforts. I strive for an engaging position enhancing my skills, leadership qualities & knowledge beneficial to my future employment & personal family. I just finishing schooling at 'Bottega.' My goal is to achieve my 'FullStack Software Development Certification.' I feel very confident with my skills with React.js, node.js, Python, Flask, HTML5 and SCSS/CSS. I'm learning more of SQL, MongoDB, UML and Firebase still learning but, able to talk about those skills. 
            </div>
        </div>
    );
}