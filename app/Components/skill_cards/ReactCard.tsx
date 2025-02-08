import Image from "next/image";
import ReactIcon from "../icons/ReactIcon";
import Arrow from "../icons/Arrow";
import galaxy from "@/public/galaxyBg.png";

const ReactCard = () => {
    return (
        <div className="absolute left-40 top-60 overflow-visible">
            <div className="relative w-100 h-50 overflow-visible">
                <Image
                    src={galaxy}
                    alt="react"
                    className="mask object-center"
                />

                <ReactIcon />
            </div>

            <div className="w-fit flex flex-col gap-2 absolute z-10 top-1/4 -left-7">
                <h3 className="font-inter text-white text-4.5xl font-black">React</h3>
                <hr className="border-4 w-full" />
                <div className="flex items-center gap-1">
                    <Arrow />
                    <p className="font-inter text-white text-opacity-50 text-xl font-medium">01</p>
                </div>
            </div>
        </div>
    )
};

export default ReactCard;