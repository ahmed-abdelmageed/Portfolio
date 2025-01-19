import React, { useState } from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { github, browser, imagesIcon } from "../assets"; // Import the images icon
import { SectionWrapper } from "../hoc";

// Modal component
const Modal = ({ onClose, additional_images }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-[90%] w-[800px] relative">
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mt-5">
          {additional_images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`additional_image_${idx}`}
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ProjectCard component
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
  additional_images,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-tertiary p-5 rounded-lg shadow-md w-full max-w-[360px] flex flex-col justify-between"
      >
        <div>
          <div className="relative w-full h-[200px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex gap-1 justify-end m-3">
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
              {website_link && (
                <div
                  onClick={() => window.open(website_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={browser}
                    alt="live demo"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
              {additional_images && additional_images.length > 0 && (
                <div
                  onClick={openModal}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={imagesIcon}
                    alt="images"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] px-2 py-1 bg-gray-700 text-white rounded-lg`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Modal for displaying additional images */}
      {isModalOpen && (
        <Modal onClose={closeModal} additional_images={additional_images} />
      )}
    </>
  );
};

// Works component
const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are some of my projects, briefly described with links to code
        repositories and live demos.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
