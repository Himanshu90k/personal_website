import Link from "next/link";
import Leetcode from "../Components/icons/Leetcode";
import Github from "../Components/icons/Github";
import Linkedin from "../Components/icons/Linkedin";
import Instagram from "../Components/icons/Instagram";
import Rocket from "../Components/icons/Rocket";
import UpIcon from "../Components/icons/UpIcon";

const HomeSection = () => {
    return (
        <section className="relative h-screen w-screen">

            {/* background */}
            <div className="absolute -z-10 h-screen w-3/5 bg-homeBg">
            </div>
            <video className="absolute object-cover -z-10 right-0 h-screen w-9/20" autoPlay loop muted>
                <source src="/bgVideo.mp4" type="video/mp4" />
            </video>

            {/* photo - introduction */}
            <main className="absolute w-screen h-full inset-0 flex flex-col items-center gap-9 justify-end pb-9">
                <div className="flex justify-between items-center gap-10 w-9/12">
                    {/* photo card */}
                    <div className="w-72 h-120 rounded-4.5-xl border-transparent photoBorder border-8px">
                        <img title="my-photo" alt="my-photo" className="w-full h-full rounded-4.5-xl object-cover" src="/myPhoto.png" />
                    </div>

                    {/* introduction */}
                    <div className="flex flex-col items-start">
                        <p className="font-josefin text-customPurple text-8xl font-bold Hi-shadow">Hi,</p>
                        <p className="font-josefin text-white font-bold text-4.5xl w-fit">I am a<br />
                            Proactive and detail-oriented<br />
                            <strong className="text-customPurple">Full-Stack Developer</strong><br />
                            specializing in<br />
                            <strong className="text-customPurple">MERN</strong> technologies.
                        </p>

                        <hr className="w-60 border-4px mb-3 border-white" />
                        <ul className="flex items-center gap-6">
                            <li>
                                <Link href={'/'}><Leetcode /></Link>
                            </li>
                            <li>
                                <Link href={'/'}><Github /></Link>
                            </li>
                            <li><Link href={'/'}><Linkedin /></Link></li>
                            <li><Link href={'/'}><Instagram /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Rocket />
                    <div className="flex flex-col items-center gap-1">
                        <UpIcon />
                        <UpIcon />
                        <UpIcon />
                    </div>
                </div>
            </main>
        </section>
    )
};

export default HomeSection;