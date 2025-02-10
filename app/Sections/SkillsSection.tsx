import ReactCard from "../Components/skill_cards/ReactCard";
import JavaScriptCard from "../Components/skill_cards/JavaScriptCard";
import TypeScriptCard from "../Components/skill_cards/TypeScriptCard";
import HtmlCard from "../Components/skill_cards/HtmlCard";
import CssCard from "../Components/skill_cards/CssCard";
import TailwindCard from "../Components/skill_cards/TailwindCard";
import NextJsCard from "../Components/skill_cards/NextJsCard";
import GoIcon from "../Components/icons/GoIcon";
import SqlIcon from "../Components/icons/SqlIcon";
import NodeIcon from "../Components/icons/NodeIcon";
import MongoIcon from "../Components/icons/MongoIcon";
import Arrow from "../Components/icons/Arrow";
import GlowingDot from "../Components/icons/GlowingDot";
import GlowingLine from "../Components/icons/GlowingLine";


const SkillsSection = () => {
    return (
        <section className="relative -z-10 h-fit w-screen bg-blackBg">
            {/* Skill Line */}
            <div className="flex flex-col w-fit items-center pl-14 py-10">
                <GlowingDot position="top-12" />
                <GlowingLine />
                <GlowingDot position="-top-12" />
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
            <div className="flex flex-col w-fit items-center pl-14 py-10">
                <GlowingDot position="top-12" />
                <GlowingLine />
                <GlowingDot position="-top-12" />
            </div>

            {/* Backend Skills */}
            <div className="absolute bottom-[5%] left-[15%] w-3/4 flex justify-center items-center h-1/3 p-2">
                {/* backend circle */}
                <div className="w-82 h-82 flex items-center justify-center shadow-backend-shadow rounded-12-xl border-12px backend-border border-transparent"
                >
                    <h2 className="font-josefin text-white text-6xl italic font-bold">backend</h2>
                </div>

                {/* go circle */}
                <div className="absolute top-[5%] right-0 flex items-center gap-4">
                    <div className="w-50 h-50 flex justify-center items-center go-border border-8px border-transparent shadow-go-shadow rounded-10-xl">
                        <GoIcon />
                    </div>

                    <div className="w-fit">
                        <h3 className="font-josefin text-white text-4xl font-bold">Go</h3>
                        <hr className="w-full border-2" />
                        <div className="flex gap-1 pt-1 items-center">
                            <Arrow />
                            <p className="font-inter text-sm font-medium opacity-50 text-white">08</p>
                        </div>
                    </div>
                </div>

                {/* sql circle */}
                <div className="absolute top-[15%] left-0 flex items-center gap-4">
                    <div className="w-fit">
                        <h3 className="font-josefin text-white text-4xl font-bold">SQL</h3>
                        <hr className="w-full border-2" />
                        <div className="flex gap-1 pt-1 items-center">
                            <Arrow />
                            <p className="font-inter text-sm font-medium opacity-50 text-white">09</p>
                        </div>
                    </div>

                    <div className="w-50 h-50 flex justify-center items-center border-8px border-transparent rounded-10-xl shadow-sql-shadow sql-border">
                        <SqlIcon />
                    </div>
                </div>

                {/* Node circle */}
                <div className="absolute bottom-[15%] right-0 flex items-center gap-4">
                    <div className="w-50 h-50 flex justify-center items-center border-8px border-transparent rounded-10-xl shadow-node-shadow node-border">
                        <NodeIcon />
                    </div>

                    <div className="w-fit">
                        <h3 className="font-josefin text-white text-4xl font-bold">Node.js</h3>
                        <hr className="w-full border-2" />
                        <div className="flex gap-1 pt-1 items-center">
                            <Arrow />
                            <p className="font-inter text-sm font-medium opacity-50 text-white">10</p>
                        </div>
                    </div>
                </div>

                {/* MongoDB circle */}
                <div className="absolute bottom-[5%] left-0 flex items-center gap-4">
                <div className="w-fit">
                        <h3 className="font-josefin text-white text-4xl font-bold">MongoDB</h3>
                        <hr className="w-full border-2" />
                        <div className="flex gap-1 pt-1 items-center">
                            <Arrow />
                            <p className="font-inter text-sm font-medium opacity-50 text-white">11</p>
                        </div>
                    </div>

                    <div className="w-50 h-50 flex justify-center items-center border-8px border-transparent rounded-10-xl shadow-mongo-shadow mongo-border">
                        <MongoIcon />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SkillsSection;