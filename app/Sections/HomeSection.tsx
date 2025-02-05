import Navbar from "../Components/Navbar";

const HomeSection = () => {
    return (
        <section className="relative">

            {/* background */}
            <div className="absolute -z-20 h-screen w-3/5 bg-homeBg">
            </div>
            <video className="absolute object-cover -z-10 right-0 h-screen w-2/5" autoPlay loop muted>
                <source src="/bgVideo.mp4" type="video/mp4" />
            </video>

            {/* navbar */}
            <Navbar />
        </section>
    )
};

export default HomeSection;