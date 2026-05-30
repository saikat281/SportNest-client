import Image from "next/image";


const FacilityType = () => {
    return (
        <div className="flex justify-between items-center gap-10 mt-[60px]">
            <div>
                <div className="relative w-[100px] h-[100px] ">
                    <Image
                        src="https://i.ibb.co.com/V0PKkbsf/football-ball-svgrepo-com.jpg"
                        alt="Football"
                        fill
                        className="object-cover rounded-full"
                    />

                </div>
                <p className="text-center font-bold">Football</p>
            </div>

            <div>
                <div className="relative w-[100px] h-[100px] ">
                    <Image
                        src="https://i.ibb.co.com/yBPbswCZ/cricket-game-svgrepo-com.jpg"
                        alt="Cricket"
                        fill
                        className="object-cover rounded-full"
                    />

                </div>
                <p className="text-center font-bold">Cricket</p>
            </div>
           <div>
                <div className="relative w-[100px] h-[100px] ">
                    <Image
                        src="https://i.ibb.co.com/Qv7bMStd/basketball-svgrepo-com.jpg"
                        alt="BasketBall"
                        fill
                        className="object-cover rounded-full"
                    />

                </div>
                <p className="text-center font-bold">BasketBall</p>
            </div>
            <div>
                <div className="relative w-[100px] h-[100px] ">
                    <Image
                        src="https://i.ibb.co.com/KjZCMYZn/badminton-svgrepo-com.jpg"
                        alt="Badminton"
                        fill
                        className="object-cover rounded-full"
                    />

                </div>
                <p className="text-center font-bold">Badminton</p>
            </div>
            <div>
                <div className="relative w-[100px] h-[100px] ">
                    <Image
                        src="https://i.ibb.co.com/sr68SMZ/tennis-svgrepo-com.jpg"
                        alt="Badminton"
                        fill
                        className="object-cover rounded-full"
                    />

                </div>
                <p className="text-center font-bold">Tennis</p>
            </div>
        </div>
    );
};

export default FacilityType;