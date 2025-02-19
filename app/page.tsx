import Navbar from "./Components/Navbar";
import HomeSection from "./Sections/HomeSection";
import ProjectsSection from "./Sections/ProjectsSection";
import SkillsSection from "./Sections/SkillsSection";

export default function Home() {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
