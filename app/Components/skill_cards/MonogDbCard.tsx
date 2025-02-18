import MongoIcon from "../icons/MongoIcon";
import Arrow from "../icons/Arrow";
import ConnectionDot from "../icons/ConnectionDot";

const MongoDbCard = () => {
    return (
        <div className="absolute bottom-[11.2%] left-[3%] flex items-center gap-4">
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
                <ConnectionDot position="-top-9" />
                {/* connecting line */}
                <svg className="absolute -z-10 -top-[61%] -right-[36.1%]" xmlns="http://www.w3.org/2000/svg" width="250" height="126" viewBox="0 0 250 126" fill="none">
                    <g filter="url(#filter0_d_95_224)">
                        <path d="M10.5 117V57H240V9.5" stroke="#C936D4" strokeWidth="2" />
                    </g>
                    <defs>
                        <filter id="filter0_d_95_224" x="0.5" y="0.5" width="249.5" height="125.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.80075 0 0 0 0 0.335833 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_224" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_224" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
};

export default MongoDbCard;