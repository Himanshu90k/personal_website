const HtmlIcon = () => {
    return (
        <svg className="absolute top-8 z-10 left-5" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
            <g clipPath="url(#clip0_80_20)">
                <g filter="url(#filter0_d_80_20)">
                    <path d="M136.667 16.6667H23.3334L33.3334 130L80 143.333L126.667 130L136.667 16.6667Z" fill="#E65100" />
                    <path d="M80 26.6667V133L117.333 122.333L125.667 26.6667H80Z" fill="#FF6D00" />
                    <path d="M80 83.3334V70.0001H108.667L106.333 108.333L80 117V103L93.6667 98.3334L94.6667 83.3334H80ZM109.667 56.6667L110.667 43.3334H80V56.6667H109.667Z" fill="white" />
                    <path d="M80 103V117L53.6667 108.333L52.3334 90.0001H65.6667L66.3334 98.3334L80 103ZM63.6667 56.6667H80V43.3334H49.6667L52 83.3334H80V70.0001H64.6667L63.6667 56.6667Z" fill="#EEEEEE" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_80_20" x="5.33337" y="-1.33325" width="149.333" height="162.667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feOffset in="SourceGraphic" dx="0" dy="0" result="SHADOW" />
                    <feGaussianBlur in="SHADOW" stdDeviation="9" result="BLURRED_SHADOW" />
                    <feColorMatrix in="BLURRED_SHADOW" type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.317647 0 0 0 0 0 0 0 0 1 0" result="COLORED_SHADOW" />
                    <feMerge>
                        <feMergeNode in="COLORED_SHADOW" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <clipPath id="clip0_80_20">
                    <rect width="160" height="160" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
};

export default HtmlIcon;