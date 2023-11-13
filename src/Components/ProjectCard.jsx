import React from "react";


export default function ProjectCard({ language, title, description }) {
    return (
        <div className="project--card">
            <div className="project--card--language text-xs capitalize">{language}</div>
            <div className="project--card--title text-2xl font-bold text-start mt-2">{title}</div>
            <div className="project--card--description text-sm text-start text-[#949495] ">{description}</div>
        </div>
    );
}