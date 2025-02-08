import GlowingCircle from "../Components/icons/GlowingCircle";
import ReactCard from "../Components/skill_cards/ReactCard";
import JavaScriptCard from "../Components/skill_cards/JavaScriptCard";
import TypeScriptCard from "../Components/skill_cards/TypeScriptCard";
import HtmlCard from "../Components/skill_cards/HtmlCard";
import CssCard from "../Components/skill_cards/CssCard";
import TailwindCard from "../Components/skill_cards/TailwindCard";
import NextJsCard from "../Components/skill_cards/NextJsCard";


const SkillsSection = () => {
    return (
        <section className="relative -z-10 h-fit w-screen bg-blackBg">
            {/* Skill Line */}
            <div className="flex flex-col w-fit items-center pl-12 pt-24">
                <GlowingCircle px={9} sign="+" />
                {/* line */}
                <div className="w-2 h-260 bg-white shadow-line-shadow"></div>
                <GlowingCircle px={9} sign="-" />
            </div>

            {/* Skill Cards */}
            <ReactCard />
            <JavaScriptCard />
            <TypeScriptCard />
            <HtmlCard />
            <CssCard />
            <TailwindCard />
            <NextJsCard />

            {/* Skill Line */}
            <div className="flex flex-col w-fit items-center pl-12">
                <GlowingCircle px={9} sign="+" />
                {/* line */}
                <div className="w-2 h-260 bg-white shadow-line-shadow"></div>
                <GlowingCircle px={9} sign="-" />
            </div>
        </section>
    )
};

export default SkillsSection;