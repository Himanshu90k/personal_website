import GlowingArrow from "../icons/GlowingArrow";
import NextJsIcon from "../icons/NextJsIcon";

const NextJsCard = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex justify-evenly items-center w-11/12 h-82 rounded-2xl bg-nextCard">
                <div className="flex flex-col gap-3">
                    <h3 className="font-inter text-white text-8xl font-black next-shadow">Next.js</h3>
                    <hr className="w-full border-4 shadow-next-line-shadow" />
                    <div className="flex items-center">
                        <GlowingArrow />
                        <p className="font-inter text-white text-4.5xl font-medium next-shadow">07</p>
                    </div>
                </div>

                <NextJsIcon />
            </div>
        </div>
    )
};

export default NextJsCard;