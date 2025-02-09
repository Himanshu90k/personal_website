const GlowingArrow = () => {
    return (
        <svg className="relative -left-2" xmlns="http://www.w3.org/2000/svg" width="82" height="48" viewBox="0 0 82 48" fill="none">
            <g filter="url(#filter0_d_82_104)">
                <path
                    d="M72.4142 25.4142C73.1953 24.6332 73.1953 23.3668 72.4142 22.5858L59.6863 9.85786C58.9052 9.07681 57.6389 9.07681 56.8579 9.85786C56.0768 10.6389 56.0768 
                    11.9052 56.8579 12.6863L68.1716 24L56.8579 35.3137C56.0768 36.0948 56.0768 37.3611 56.8579 38.1421C57.6389 38.9232 58.9052 38.9232 59.6863 38.1421L72.4142 25.4142ZM9 26L71 26L71 22L9 22L9 26Z" fill="white"
                />
            </g>
            <defs>
                <filter id="filter0_d_82_104" x="0" y="0.271973" width="82" height="47.4561" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feOffset dx="0" dy="0" result="offsetShadow" />
                    <feGaussianBlur in="offsetShadow" stdDeviation="4.5" result="BLURRED_SHADOW" />
                    <feMerge>
                        <feMergeNode in="BLURRED_SHADOW" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    )
};

export default GlowingArrow;