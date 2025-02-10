const MongoIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="129" viewBox="0 0 68 129" fill="none">
            <g filter="url(#filter0_d_95_186)">
                <path d="M36.4587 120L33.4765 119.013C33.4765 119.013 33.8736 103.949 28.4134 102.89C24.8395 98.7356 28.9416 -74.476 42.0062 102.299C39.5274 103.555 37.6308 105.718 36.7129 108.337C36.2209 112.205 36.1357 116.114 36.4587 120Z" fill="url(#paint0_linear_95_186)" />
                <path d="M38.0709 105.447C46.0113 99.48 52.0922 91.3856 55.6069 82.1049C59.1217 72.8243 59.9258 62.7383 57.926 53.0194C52.0886 27.311 38.2655 18.8592 36.7764 15.6323C35.4916 13.6229 34.3949 11.4996 33.5003 9.28939L34.6003 80.9201C34.6003 80.9201 32.3209 102.811 38.0709 105.447Z" fill="url(#paint1_linear_95_186)" />
                <path d="M31.9596 106.399C31.9596 106.399 7.65297 89.8714 9.05871 60.6348C9.18984 51.8208 11.2142 43.1375 14.995 35.1715C18.7759 27.2055 24.2251 20.1422 30.9747 14.4588C31.7635 13.7898 32.3902 12.9511 32.8077 12.0056C33.2251 11.0602 33.4226 10.0326 33.3851 9C34.8981 12.2507 34.6519 57.5348 34.8107 62.831C35.4262 83.4334 33.6631 102.51 31.9596 106.399Z" fill="url(#paint2_linear_95_186)" />
            </g>
            <defs>
                <filter id="filter0_d_95_186" x="0" y="0" width="68" height="129" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feOffset in="SourceGraphic" dx="0" dy="0" result="SHADOW" />
                    <feGaussianBlur in="SHADOW" stdDeviation="4.5" result="BLURRED_SHADOW" />
                    <feColorMatrix in="BLURRED_SHADOW" type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.647059 0 0 0 0 0.286275 0 0 0 1 0" result="COLORED_SHADOW" />
                    <feMerge>
                        <feMergeNode in="COLORED_SHADOW" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="paint0_linear_95_186" x1="-27.3224" y1="57.6618" x2="36.9881" y2="122.12" gradientUnits="userSpaceOnUse">
                    <stop offset="0.231" stopColor="#999875" />
                    <stop offset="0.563" stopColor="#9B9977" />
                    <stop offset="0.683" stopColor="#A09F7E" />
                    <stop offset="0.768" stopColor="#A9A889" />
                    <stop offset="0.837" stopColor="#B7B69A" />
                    <stop offset="0.896" stopColor="#C9C7B0" />
                    <stop offset="0.948" stopColor="#DEDDCB" />
                    <stop offset="0.994" stopColor="#F8F6EB" />
                    <stop offset="1" stopColor="#FBF9EF" />
                </linearGradient>
                <linearGradient id="paint1_linear_95_186" x1="0.138686" y1="8.40915" x2="10.5727" y2="119.269" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#48A547" />
                    <stop offset="1" stopColor="#3F9143" />
                </linearGradient>
                <linearGradient id="paint2_linear_95_186" x1="6.96786" y1="63.5288" x2="47.6196" y2="49.8915" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#41A247" />
                    <stop offset="0.352" stopColor="#4BA74B" />
                    <stop offset="0.956" stopColor="#67B554" />
                    <stop offset="1" stopColor="#69B655" />
                </linearGradient>
            </defs>
        </svg>
    )
};

export default MongoIcon;