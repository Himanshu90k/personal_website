interface ConnectionDotProps {
    position: string;
};

const ConnectionDot:React.FC<ConnectionDotProps> = ({position}) => {
    return (
        <svg className={`absolute ${position}`} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <g filter="url(#filter0_d_97_54)">
                <circle cx="35" cy="35" r="3.5" stroke="#E50F0F" strokeWidth="3" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_97_54" x="0.799999" y="0.799999" width="68.4" height="68.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feOffset in="SourceGraphic" dx="0" dy="0" result="OFFSET" />
                    <feMorphology radius="6" operator="dilate" in="OFFSET" result="SHADOW" />
                    <feGaussianBlur in="SHADOW" stdDeviation="11.6" result="BLURRED_SHADOW" />
                    <feColorMatrix in="BLURRED_SHADOW" type="matrix" values="0 0 0 0 0.899948 0 0 0 0 0.0592468 0 0 0 0 0.0592468 0 0 0 1 0" result="COLORED_SHADOW" />
                    <feMerge>
                        <feMergeNode in="COLORED_SHADOW" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    )
};

export default ConnectionDot;