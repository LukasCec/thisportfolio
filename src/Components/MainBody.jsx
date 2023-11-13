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
                    <div className="right xs:w-full pt-16">
                    <section id="projects" className="text-3xl">

                        {projectsData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                gitLink={project.gitLink}
                                language={project.language}
                                title={project.title}
                                demoLink={project.demoLink}
                                description={project.description}
                            />
                        ))}

                    </section>

                    <section id="talks" className="mt-20"> Talkslooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooo</section>

                    <section id="interviews" className="mt-20"> Interooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooooooooooloooooooooooooooooooooooooooooolooooooooooooooooooooooo</section>


                </div>
            </div>
        </>
    );
}
