const Navbar = () => {
    return (
        <div className="flex w-full justify-center pt-7">
            <nav className="flex justify-between w-11/12 items-center">
                <h1 className="font-josefin text-white text-5xl font-bold">H.R</h1>

                <ul className="flex gap-6">
                    <li className="font-josefin text-white font-semibold">Introduction</li>
                    <li className="font-josefin text-white font-semibold">Skills</li>
                    <li className="font-josefin text-white font-semibold">Projects</li>
                    <li className="font-josefin text-white font-semibold">Education</li>
                </ul>

                <button className="bg-customRed w-32 h-12 rounded-5-xl font-josefin text-white font-bold text-xl">
                    Contact
                </button>
            </nav>
        </div>
    )
};

export default Navbar;