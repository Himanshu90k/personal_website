const GlowingLine = () => {
    return (
        <svg width="16" height="1430" viewBox="0 0 16 1430" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_84_8)">
                <rect x="4" y="4" width="8" height="1426" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_84_8" x="0" y="0" width="16" height="1434" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_8" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_8" result="shape" />
                </filter>
            </defs>
        </svg>
    )
};

export default GlowingLine;
