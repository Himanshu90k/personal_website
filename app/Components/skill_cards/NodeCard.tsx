import NodeIcon from "../icons/NodeIcon";
import Arrow from "../icons/Arrow";
import ConnectionDot from "../icons/ConnectionDot";

const NodeCard = () => {
    return (
        <div className="absolute bottom-[28%] -right-[3.5%] flex items-center gap-4">
            <div className="w-50 h-50 flex justify-center items-center border-8px border-transparent rounded-10-xl shadow-node-shadow node-border">
                <NodeIcon />
                <ConnectionDot position="-left-9" />
                {/* connecting line */}
                <svg className="absolute -z-10 -left-[25%] top-[-41%]" xmlns="http://www.w3.org/2000/svg" width="91" height="192" viewBox="0 0 91 192" fill="none">
                    <g filter="url(#filter0_d_95_225)">
                        <path d="M82 182H36.7606V10H9" stroke="#CC56FF" strokeWidth="2" />
                    </g>
                    <defs>
                        <filter id="filter0_d_95_225" x="0" y="0" width="91" height="192" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.80075 0 0 0 0 0.335833 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_225" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_225" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="w-fit">
                <h3 className="font-josefin text-white text-4xl font-bold">Node.js</h3>
                <hr className="w-full border-2" />
                <div className="flex gap-1 pt-1 items-center">
                    <Arrow />
                    <p className="font-inter text-sm font-medium opacity-50 text-white">10</p>
                </div>
            </div>
        </div>
    )
};

export default NodeCard;