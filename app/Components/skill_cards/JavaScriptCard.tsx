import Image from "next/image";
import JavaScriptIcon from "../icons/JavaScriptIcon";
import Arrow from "../icons/Arrow";
import JavaScript from "@/public/JavaScriptBg.png";

const JavaScriptCard = () => {
    return (
        <div className="absolute right-8 top-60 overflow-visible">
            <div className="relative w-100 h-50 overflow-visible">
                <Image
                    src={JavaScript}
                    alt="react"
                    className="mask object-center"
                />

                <JavaScriptIcon />
            </div>

            <div className="w-fit flex flex-col gap-2 absolute z-10 top-4 -left-14">
                <h3 className="font-inter text-white text-4.5xl font-black">Java<br />Script</h3>
                <hr className="border-4 w-full" />
                <div className="flex items-center gap-1">
                    <Arrow />
                    <p className="font-inter text-white text-opacity-50 text-xl font-medium">02</p>
                </div>
            </div>
        </div>
    )
};

export default JavaScriptCard;