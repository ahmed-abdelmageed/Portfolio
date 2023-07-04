import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Computers = ({
  isMobile
}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return /*#__PURE__*/_jsxs("mesh", {
    children: [/*#__PURE__*/_jsx("hemisphereLight", {
      intensity: 0.15,
      groundColor: "black"
    }), /*#__PURE__*/_jsx("spotLight", {
      position: [-20, 50, 10],
      angle: 0.12,
      penumbra: 1,
      intensity: 1,
      castShadow: true,
      "shadow-mapSize": 1024
    }), /*#__PURE__*/_jsx("pointLight", {
      intensity: 1
    }), /*#__PURE__*/_jsx("primitive", {
      object: computer.scene,
      scale: isMobile ? 0.65 : 0.75,
      position: isMobile ? [0, -3.1, -2.2] : [0, -3.25, -1.5],
      rotation: [-0.01, -0.2, -0.1]
    })]
  });
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return /*#__PURE__*/_jsxs(Canvas, {
    frameloop: "demand",
    shadows: true,
    dpr: [1, 2],
    camera: {
      position: [20, 3, 5],
      fov: 25
    },
    gl: {
      preserveDrawingBuffer: true
    },
    children: [/*#__PURE__*/_jsxs(Suspense, {
      fallback: /*#__PURE__*/_jsx(CanvasLoader, {}),
      children: [/*#__PURE__*/_jsx(OrbitControls, {
        enableZoom: false,
        maxPolarAngle: Math.PI / 2,
        minPolarAngle: Math.PI / 2
      }), /*#__PURE__*/_jsx(Computers, {
        isMobile: isMobile
      })]
    }), /*#__PURE__*/_jsx(Preload, {
      all: true
    })]
  });
};
export default ComputersCanvas;