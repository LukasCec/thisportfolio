import React from "react";


export default function ProjectCard({gitLink, language, title,demoLink, description }) {
    return (

            <div className="project--card">
                    <div className="project--card--language text-xs capitalize">{language}</div>

                    <a href={gitLink} target="_blank" className="project--card--title underline text-2xl inline font-bold text-start mt-2">{title}</a>
                    <a href={demoLink} target="_blank" className="project--card--demo  text-xs inline w-2 h-2 rounded p-2 bg-amber-400">Live demo <svg fill="none"  stroke="currentColor" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true" className="flex-none mt-1 m-0 inline stroke-current"><path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path><path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path></svg></a>

                <div className="project--card--description text-sm text-start text-[#949495] mt-2">{description}</div>

            </div>

    );
}