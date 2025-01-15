import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import { checkWebGLSupport } from "./utils/checkWebGLSupport";

const App = () => {
  // Check if WebGL is supported
  const isWebGLSupported = checkWebGLSupport();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          {/* Conditionally render StarsCanvas based on WebGL support */}
          {isWebGLSupported ? (
            <>
              {/* Uncomment this line when ready */}
              {/* <StarsCanvas /> */}
              <Contact />
            </>
          ) : (
            <div className="bg-gray-800 text-white text-center py-4">
              <p>Your browser or device does not support WebGL.</p>
              <p>For the best experience, please use a different browser or device.</p>
            </div>
          )}
        </div>
        {/* <Feedbacks /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
