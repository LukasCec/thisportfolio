import React from "react";
import InfoCard from "./InfoCard";
import ProjectCard from "./ProjectCard";
import projectsData from "../Data.jsx";

export default function MainBody() {
    return(
        <>

            <div className="outer">
                <div className="left">
                    <InfoCard />


                </div>
                <div className="right pt-16">
                    <section id="projects" className="text-3xl">

                        {projectsData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                language={project.language}
                                title={project.title}
                                description={project.description}
                            />
                        ))}

                    </section>

                    <section id="talks" className="mt-80"> Talkslooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooo</section>

                    <section id="interviews" className="mt-80"> Interooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooo</section>


                </div>
            </div>
        </>
    );
}
