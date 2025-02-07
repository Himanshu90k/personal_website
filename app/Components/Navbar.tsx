import ContactButton from "./ContactButton";

const Navbar = () => {
    return (
        <div className="fixed z-20 top-0 flex w-full justify-center pt-7">
            <nav className="flex justify-between w-11/12 items-center">
                <h1 className="font-josefin text-white text-5xl font-bold">H.R</h1>

                <ul className="relative flex gap-6">
                    <li className="font-josefin text-white font-semibold">Introduction</li>
                    <li className="font-josefin text-white font-semibold">Skills</li>
                    <li className="font-josefin text-white font-semibold">Projects</li>
                    <li className="font-josefin text-white font-semibold">Education</li>

                    <hr className="absolute z-10 border-white w-24 border -left-1 bottom-0" />
                </ul>

                <ContactButton />
            </nav>
        </div>
    )
};

export default Navbar;