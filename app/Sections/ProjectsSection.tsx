const ProjectsSection = () => {
    return (
        <section className="relative h-screen w-screen flex justify-center align-middle bg-white">
            <iframe src="https://car-details-management.netlify.app/?date=2025-02-19" title="car details management website" className="z-30 h-full w-4/5 py-16 "></iframe>

            <div className="absolute bottom-0 w-screen h-16 bg-customRed">
                <div className="flex gap-2 h-full justify-center items-center">
                    <h2 className="font-josefin text-white text-4xl font-bold">CAR DETAILS MANAGEMENT WEBSITE</h2>
                </div>
            </div>
        </section>
    )
};

export default ProjectsSection;