import React, { useState } from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { github, browser, imagesIcon } from "../assets"; // Import the images icon
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

// Import Swiper and its modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import modules correctly for Swiper v8+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          {/* <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full "
          >
            {additional_images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`additional_image_${idx}`}
                  className="w-full h-auto rounded-lg object-cover px-12"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
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
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
     
          <div           className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex flex-col justify-between"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex gap-1 justify-end m-3 card-img_hover">
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
                {/* {additional_images && additional_images.length > 0 && (
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
                )} */}
              </div>
            </div>

            <div className="mt-5 flex-grow">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
          <div className="mt-4 flex flex-wrap gap-2 min-h-[24px]">
            {tags && tags.length > 0 ? (
              tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  {tag.name}
                </p>
              ))
            ) : (
              <p className="text-[14px] text-transparent">#Placeholder</p>
            )}
          </div>
          </div>

      </motion.div>

      {/* Modal for displaying additional images */}
      {/* {isModalOpen && (
        <Modal onClose={closeModal} additional_images={additional_images} />
      )} */}
    </>
  );
};

// Works component
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This is my projects. Each project is briefly described with links to
          code repositories and live demos in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
