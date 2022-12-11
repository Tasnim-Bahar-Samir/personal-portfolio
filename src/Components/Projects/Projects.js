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
        "This website is about buy and sell used car. Implented admin,seller and buyer dashboard. Displaying data according to user role.If user oginas byer he/she will be able to order product and will have access to my orders route.If user login as seller ,will get the access to publish product and able to manage his own product.Admin is allowed to manage all buyers and all sellers.",
      gitHub: "https://github.com/Tasnim-Bahar-Samir/resaleCar.BD-client-repo",
      live: "https://resale-products.web.app/",
    },
    {
      _id: "02",
      img: img2,
      name: "Codelab-Online Courses",
      details:
        "This website is about buy and sell used car. Implented admin,seller and buyer dashboard. Displaying data according to user role.If user oginas byer he/she will be able to order product and will have access to my orders route.If user login as seller ,will get the access to publish product and able to manage his own product.Admin is allowed to manage all buyers and all sellers.",
      gitHub: "https://github.com/Tasnim-Bahar-Samir/codeLab-onlineCourse-client",
      live: "https://codelab-online-learning.web.app/",
    },
    {
      _id: "03",
      img: img3,
      name: "Phroto-Review Services",
      details:
        "This website is about buy and sell used car. Implented admin,seller and buyer dashboard. Displaying data according to user role.If user oginas byer he/she will be able to order product and will have access to my orders route.If user login as seller ,will get the access to publish product and able to manage his own product.Admin is allowed to manage all buyers and all sellers.",
      gitHub: "https://github.com/Tasnim-Bahar-Samir/phroto-review-services-client-repo",
      live: "https://photography-review-62e7e.web.app/",
    },
  ];
  return (
    <div id="projects" className="py-10 relative mx-4 md:mx-10">
      <h1 className="text-center text-4xl font-semibold text-white my-10">
        My Projects
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {projects.map((project) => (
          <div
            key={project._id}
            className= "card_shadow rounded-xl text-white bg-slate-800"
          >
            <div className="h-48 overflow-y-scroll scroll-m-0 img p-1">
              <img className=" rounded-md  w-full" src={project.img} alt="" />
            </div>
            <div className="p-4">
              <h5 className="text-xl font-semibold">{project.name}</h5>
              {/* <p>{project.details}</p> */}
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
