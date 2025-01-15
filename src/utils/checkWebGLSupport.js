import { WebGLRenderer } from "three";

export function checkWebGLSupport() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!context && !!window.WebGLRenderingContext;
  } catch (e) {
    return false;
  }
}
