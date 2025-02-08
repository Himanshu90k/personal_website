import TailwindIcon from "../icons/TailwindIcon";
import Arrow from "../icons/Arrow";

const TailwindCard = () => {
    return (
        <div className="absolute left-[80%] top-[22%] bg-skillCard shadow-skill-card-shadow w-50 h-100">
            <TailwindIcon />

            <div className="w-fit flex flex-col gap-2 absolute bottom-14 left-[7%] z-10">
                <h3 className="font-inter text-white text-4.5xl font-black">Tailwind</h3>
                <hr className="border-4 w-full" />
                <div className="flex items-center gap-1">
                    <Arrow />
                    <p className="font-inter text-white text-opacity-50 text-xl font-medium">06</p>
                </div>
            </div>
        </div>
    )
};

export default TailwindCard;