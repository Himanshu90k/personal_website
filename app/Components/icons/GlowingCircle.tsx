interface GlowingCircleProps {
    position: string;
};

const GlowingCircle:React.FC<GlowingCircleProps> = ({position}) => {
    return (
        <svg className={`relative ${position}`} xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
            <g filter="url(#filter0_d_84_9)">
                <circle cx="46" cy="46" r="12" stroke="#E50F0F" strokeWidth="8" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_84_9" x="0.799999" y="0.799999" width="90.4" height="90.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

export default GlowingCircle;