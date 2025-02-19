import ReactCard from "../Components/skill_cards/ReactCard";
import JavaScriptCard from "../Components/skill_cards/JavaScriptCard";
import TypeScriptCard from "../Components/skill_cards/TypeScriptCard";
import HtmlCard from "../Components/skill_cards/HtmlCard";
import CssCard from "../Components/skill_cards/CssCard";
import TailwindCard from "../Components/skill_cards/TailwindCard";
import NextJsCard from "../Components/skill_cards/NextJsCard";
import GoCard from "../Components/skill_cards/GoCard";
import SqlCard from "../Components/skill_cards/SqlCard";
import NodeCard from "../Components/skill_cards/NodeCard";
import MongoDbCard from "../Components/skill_cards/MonogDbCard";
import GlowingCircle from "../Components/icons/GlowingCircle";
import GlowingLine from "../Components/icons/GlowingLine";
import Top from "../Components/skill_lines&dots/Top";
import Right from "../Components/skill_lines&dots/Right";
import Bottom from "../Components/skill_lines&dots/Bottom";
import Left from "../Components/skill_lines&dots/Left";

const SkillsSection = () => {
    return (
        <section className="relative -z-10 h-fit w-screen bg-blackBg">
            {/* Skill Line */}
            <div className="flex flex-col w-fit items-center pl-14 py-10">
                <GlowingCircle position="top-12" />
                <GlowingLine />
                <GlowingCircle position="-top-12" />
            </div>

            {/*Front-End Skill Cards */}
            <ReactCard />
            <JavaScriptCard />
            <TypeScriptCard />
            <HtmlCard />
            <CssCard />
            <TailwindCard />
            <NextJsCard />

            {/* Skill Line */}
            <div className="flex flex-col w-fit items-center pl-14 py-10">
                <GlowingCircle position="top-12" />
                <GlowingLine />
                <GlowingCircle position="-top-12" />
            </div>

            {/* Back-End Skill Cards */}
            <div className="absolute bottom-[8%] left-[15%] min-w-[1100px] flex justify-center items-center h-1/3 p-2">
                {/* backend circle */}
                <div className="w-82 h-82 flex items-center justify-center shadow-backend-shadow rounded-12-xl border-12px backend-border border-transparent"
                >
                    <h2 className="font-josefin text-white text-6xl italic font-bold">backend</h2>
                </div>

                {/*Back-End Skill Cards */}
                <GoCard />
                <SqlCard />
                <NodeCard />
                <MongoDbCard />

                {/* connected lines and dots */}
                <Top />
                <Right />
                <Bottom />
                <Left />

            </div>
        </section>
    )
};

export default SkillsSection;