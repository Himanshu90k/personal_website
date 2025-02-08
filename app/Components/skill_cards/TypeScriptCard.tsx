import Image from "next/image";
import TypeScriptBg from "@/public/TypeScriptBg.png";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import Arrow from "../icons/Arrow";

const TypeScriptCard = () => {
    return (
        <div className="absolute left-[42%]  top-1/3 overflow-visible">
            <div className="relative w-100 h-50 overflow-visible">
                <Image
                    src={TypeScriptBg}
                    alt="react"
                    className="mask object-center"
                />

                <TypeScriptIcon />
            </div>

            <div className="w-fit flex flex-col gap-2 absolute z-10 top-6 -left-14">
                <h3 className="font-inter text-white text-4.5xl font-black">Type<br />Script</h3>
                <hr className="border-4 w-full" />
                <div className="flex items-center gap-1">
                    <Arrow />
                    <p className="font-inter text-white text-opacity-50 text-xl font-medium">03</p>
                </div>
            </div>
        </div>
    )
};

export default TypeScriptCard;