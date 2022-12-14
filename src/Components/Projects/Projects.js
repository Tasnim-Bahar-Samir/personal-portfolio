import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

import img1 from "../../assets/project images/resaleImg.png";
import img2 from "../../assets/project images/CodeLabImg.png";
import img3 from "../../assets/project images/phrotoImg.png";

const Projects = () => {
  const projects = [
    {
      _id: "01",
      img: img1,
      name: "ResaleCar.BD",
      details:
        "This website is about buy and sell used car. Implented admin,seller and buyer dashboard. Buyer can buy product and seller can publish a new product.Crud operations, Stripe payment gateway.",
      gitHub: "https://github.com/Tasnim-Bahar-Samir/resaleCar.BD-client-repo",
      live: "https://resale-products.web.app/",
    },
    {
      _id: "02",
      img: img2,
      name: "Codelab-Online Courses",
      details:
        "Implemented authentication system.Users can see course details and can download a pdf of details.Login users can see their profile and can visit the premium access page.",
      gitHub: "https://github.com/Tasnim-Bahar-Samir/codeLab-onlineCourse-client",
      live: "https://codelab-online-learning.web.app/",
    },
    {
      _id: "03",
      img: img3,
      name: "Phroto-Review Services",
      details:
        "This website shows some services of a photographer.Users can see service details and can add reviews about the service. Login users can see their reviews and they can delete, edit and update their reviews.",
      gitHub: "https://github.com/Tasnim-Bahar-Samir/phroto-review-services-client-repo",
      live: "https://photography-review-62e7e.web.app/",
    },
  ];
  return (
    <div id="projects" className="py-10 relative mx-4 md:mx-10">
      <h1 className="text-center text-4xl font-semibold text-white">
        My Projects
      </h1>
      <p className="text-center text-orange-600 mb-10">See some of my projects</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        
        {projects.map((project) => (
          <div
            key={project._id}
            className= "card_shadow rounded-xl text-white bg-slate-800"
          >
            <div className="h-52 overflow-y-scroll scroll-m-0 img p-1">
              <img className=" rounded-md  w-full" src={project.img} alt="" />
            </div>
            <div className="p-4">
              <h5 className="text-xl font-semibold text-orange-600">{project.name}</h5>
              <p className="text-slate-200 text-sm my-2">{project.details}</p>
              <div className="flex justify-between mt-4">
                <a
                  className="px-2 py-1 rounded-sm border-2 flex items-center"
                  href={project.gitHub}
                  target="_blank"
                >
                  <AiFillGithub />
                  Code
                </a>
                <a
                  className="px-2 py-1 rounded-sm border-2 flex items-center"
                  href={project.live}
                  target="_blank"
                >
                  <GoLinkExternal />
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
