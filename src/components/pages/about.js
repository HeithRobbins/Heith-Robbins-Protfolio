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
                I’m the kind of guy people want to work with: fun, energetic, motivating spirit, with hard nose integrity to job tasks, making upper management proud to have me as a reliable asset. I know the job aspects, but can learn to adapt to company job training requirements enthusiastically. My honest assertiveness will first & foremost prove myself an asset as I have in all my employment efforts striving for an engaging position enhancing my skills, leadership qualities & knowledge beneficial to my employment & personal family. I'm just Finishing Schooling at Bottega, hopefully going to achieving my FullStack Software Development Certification. I feel very Confident with my skills with React.js, node.js, Python, Flask, HTML5 and SCSS/CSS. I'm still learning more of SQL, MongoDB, UML, Firebase not great with them but still can talk about.
            </div>
        </div>
    );
}