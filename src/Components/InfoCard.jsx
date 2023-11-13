import React from "react";
import Navbar from "./Navbar.jsx";
import FooterLeft from "./FooterLeft.jsx";

export default function InfoCard() {
    return(
        <div className="xs:mt-5 xs:ml-4 sm:mt-7 md:mt-7 md:ml-7 md:mr-10 xl:mt-20 xl:ml-72">
            <h1 className="info--name text-6xl font-bold ">Lukáš Čeč</h1>
            <p className="info--title text-xl font-medium mt-2">Junior Frontend Developer</p>

            <p  className="mb-3 mt-10">I build websites for small <span className="highlighted">companies</span>  and <span className="highlighted">customers</span> . Since 2022 I am studying at Technical University of <span className="highlighted">Košice</span> .
                </p>

            <p>In my spare time, I post to my Twitter, spend time with my friends or just <span className="highlighted">learn</span> something new.</p>
            <Navbar />
            <FooterLeft />

        </div>
    );
}