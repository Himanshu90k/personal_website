import GoIcon from "../icons/GoIcon";
import Arrow from "../icons/Arrow";
import ConnectionDot from "../icons/ConnectionDot";

const GoCard = () => {
    return (
        <div className="absolute top-[14%] right-[14%] flex items-center gap-4">
            <div className="relative w-50 h-50 flex justify-center items-center go-border border-8px border-transparent shadow-go-shadow rounded-10-xl">
                <GoIcon />
                <ConnectionDot position="-bottom-11" />
                {/* connecting line */}
                <svg className="absolute -z-10 right-[82px] -bottom-24" xmlns="http://www.w3.org/2000/svg" width="268" height="99" viewBox="0 0 268 99" fill="none">
                    <g filter="url(#filter0_d_95_226)">
                        <path d="M10.5 89.5V45.5H257.5V9" stroke="#E50F0F" strokeWidth="2" />
                    </g>
                    <defs>
                        <filter id="filter0_d_95_226" x="0.5" y="0" width="267" height="98.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.899948 0 0 0 0 0.0592468 0 0 0 0 0.0592468 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_226" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_226" result="shape" />
                        </filter>
                    </defs>
                </svg>
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
    )
};

export default GoCard;