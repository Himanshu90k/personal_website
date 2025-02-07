import GlowingCircle from "../Components/icons/GlowingCircle";

const SkillsSection = () => {
    return (
        <section className="relative -z-10 h-fit w-screen bg-blackBg">
            {/* Skill Line */}
            <div className="flex flex-col w-fit items-center pt-24">
                <GlowingCircle />
                {/* line */}
                <div className="relative -top-12 -z-10 w-2 h-260 bg-white shadow-line-shadow"></div>
                <GlowingCircle />
            </div>
        </section>
    )
};

export default SkillsSection;