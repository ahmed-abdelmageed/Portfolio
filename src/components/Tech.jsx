import React from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
       <><h2 className={`${styles.sectionHeadText} text-center`}>
      Technologis
    </h2>
      <br/>
      <br/>
      <div className='flex flex-row flex-wrap justify-center gap-10'>

        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    <br/>
    <br/>
    <br/>
    </>
  );
}

export default Tech