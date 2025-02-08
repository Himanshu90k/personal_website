import HtmlIcon from "../icons/HtmlIcon";
import Arrow from "../icons/Arrow";

const HtmlCard = () => {
    return (
        <div className="absolute left-[5%] top-[55%] bg-skillCard shadow-skill-card-shadow w-50 h-100">
            <HtmlIcon />

            <div className="w-fit flex flex-col gap-2 absolute bottom-14 left-[12%] z-10">
                <h3 className="font-inter text-white text-4.5xl font-black">&lt;html&gt;</h3>
                <hr className="border-4 w-full" />
                <div className="flex items-center gap-1">
                    <Arrow />
                    <p className="font-inter text-white text-opacity-50 text-xl font-medium">04</p>
                </div>
            </div>
        </div>
    )
};

export default HtmlCard;