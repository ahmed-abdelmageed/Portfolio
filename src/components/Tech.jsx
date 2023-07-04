import React from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Tech = () => {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("h2", {
      className: `${styles.sectionHeadText} text-center`,
      children: "Technologis"
    }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("div", {
      className: "flex flex-row flex-wrap justify-center gap-10",
      children: technologies.map(technology => /*#__PURE__*/_jsx("div", {
        className: "w-28 h-28",
        children: /*#__PURE__*/_jsx(BallCanvas, {
          icon: technology.icon
        })
      }, technology.name))
    }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {})]
  });
};
export default Tech;