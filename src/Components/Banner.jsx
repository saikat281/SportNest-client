

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(banner_img.jpg)",
            }}
        >
            <div className="hero-overlay flex items-center ">
                <div className=" w-full max-w-[1440px] mx-auto space-y-4">
                    <h1 className="text-white text-7xl font-bold">Play More. Manage Less.</h1>
                    <p className="text-white">Smart sports facility booking for players, teams, and venue managers.</p>
                    <button className="btn">Explore Facilities</button>
                </div>

            </div>

        </div>
    );
};

export default Banner;