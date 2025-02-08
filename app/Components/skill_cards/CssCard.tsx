import CssIcon from "../icons/CssIcon";
import Arrow from "../icons/Arrow";

const CssCard = () => {
    return (
        <div className="absolute left-[45%] top-[65%] bg-skillCard shadow-skill-card-shadow w-50 h-100">
            <CssIcon />

            <div className="w-fit flex flex-col gap-2 absolute bottom-14 left-[21%] z-10">
                <h3 className="font-inter text-white text-4.5xl font-black">#CSS</h3>
                <hr className="border-4 w-full" />
                <div className="flex items-center gap-1">
                    <Arrow />
                    <p className="font-inter text-white text-opacity-50 text-xl font-medium">05</p>
                </div>
            </div>
        </div>
    )
};

export default CssCard;