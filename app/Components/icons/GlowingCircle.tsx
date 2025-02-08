interface GlowingCircleProps {
    px?: number;
    sign?: string;
}

const GlowingCircle:React.FC<GlowingCircleProps> = ({px, sign}) => {

    const position = (sign === "+")? `top-9` : `bottom-9`;

    return (
        <svg className= {`relative ${position} z-10`} xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
            <g filter="url(#filter0_d_63_30)">
                <circle cx="51" cy="51" r="13" fill="white" />
                <circle cx="51" cy="51" r="17" stroke="#E50F0F" strokeWidth="8" />
            </g>
            <defs>
                <filter id="filter0_d_63_30" x="0.799999" y="0.799999" width="100.4" height="100.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_63_30" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="11.6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.899948 0 0 0 0 0.0592468 0 0 0 0 0.0592468 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_30" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_30" result="shape" />
                </filter>
            </defs>
        </svg>
    )
};

export default GlowingCircle;