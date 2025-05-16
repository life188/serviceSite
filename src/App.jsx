import Home from "./Home";
import Navbar from "./Nav-bar";
import Project from "./Project";

import serviceSiteImage from "./assets/ServiceSiteImage.jpg";
import GameAnimated from "./assets/GameAnimated.jpg";
import StoreAnimated from "./assets/StoreAnimated.jpg";
import SportsAnalytics from "./assets/SportsAnalytics.jpg";
import animatedpicture from "./assets/animatedpicture.jpg";

function App() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <Navbar />
      <Home immage={animatedpicture} />
      <div className="flex justify-center gap-6 p-6">
        <a href="https://github.com/life188">
          <Project
            title="Service Site"
            description="This is a github link to the service site that I am building that is coming soon"
            imageUrl={serviceSiteImage}
          />
        </a>
        <a href="https://github.com/life188">
          <Project
            title="Game"
            description="This is a github link to the game site that I am building that is coming soon"
            imageUrl={GameAnimated}
          />
        </a>
        <a href="https://github.com/life188">
          <Project
            title="E-Commerce site"
            description="This is a github link to the E-Commerce site that I am building that is coming soon"
            imageUrl={StoreAnimated}
          />
        </a>
        <a href="https://github.com/life188">
          <Project
            title="Analytics site + final portfolio"
            description="This is a github link to the sports analytics site that I am building that is coming soon"
            imageUrl={SportsAnalytics}
          />
        </a>
      </div>
    </div>
  );
}

export default App;
