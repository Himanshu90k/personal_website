import SqlIcon from "../icons/SqlIcon";
import Arrow from "../icons/Arrow";
import ConnectionDot from "../icons/ConnectionDot";

const SqlCard = () => {
    return (
        <div className="absolute top-[29%] left-1 flex items-center gap-4">
            <div className="w-fit">
                <h3 className="font-josefin text-white text-4xl font-bold">SQL</h3>
                <hr className="w-full border-2" />
                <div className="flex gap-1 pt-1 items-center">
                    <Arrow />
                    <p className="font-inter text-sm font-medium opacity-50 text-white">09</p>
                </div>
            </div>

            <div className="w-50 h-50 flex justify-center items-center border-8px border-transparent rounded-10-xl shadow-sql-shadow sql-border">
                <SqlIcon />
                <ConnectionDot position="-right-9" />
                {/* connecting line */}
                <svg className="absolute -z-10 -right-24 -bottom-[71px]" xmlns="http://www.w3.org/2000/svg" width="106" height="182" viewBox="0 0 106 182" fill="none">
                    <g filter="url(#filter0_d_95_227)">
                        <path d="M96.5 172H55V10.5H9.5" stroke="#E50F0F" strokeWidth="2" />
                    </g>
                    <defs>
                        <filter id="filter0_d_95_227" x="0.5" y="0.5" width="105" height="181.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.899948 0 0 0 0 0.0592468 0 0 0 0 0.0592468 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_227" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_227" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
};

export default SqlCard;