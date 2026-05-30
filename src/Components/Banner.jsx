import UiVerseButton from "./UiVerseButton";


const Banner = () => {
    return (
        <div className="hero min-h-screen relative overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/banner_video.mp4" type="video/mp4" />
            </video>

            <div className="hero-overlay absolute inset-0 bg-black/50 flex items-center">
                <div className="w-full max-w-[1440px] mx-auto space-y-4">
                    <h1 className="font-banner text-white text-8xl font-extrabold stroke-black">
                        Play More. Manage Less.
                    </h1>
                    <p className="font-banner text-white text-3xl">
                        Smart sports facility booking for players, teams, and venue managers.
                    </p>
                    <div className="mt-[60px]"> <UiVerseButton title={"Explore Facilities"} href={"/all-facilities"}></UiVerseButton></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;