import Banner from "@/Components/Banner";
import FacilityCard from "@/Components/FacilityCard";
import FacilityType from "@/Components/FacilityType";
import UiVerseButton from "@/Components/UiVerseButton";
import Image from "next/image";

export default async function Home() {

  const res = await fetch(`http://localhost:5000/facility`);

  const data = await res.json();

  console.log(data);

  return (
    <div className="bg-gray-100">
      <Banner></Banner>

      <div className="max-w-7xl mx-auto">
        <h1 className="font-hind text-center text-4xl font-extrabold mt-[30px]">Featured Facilities</h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[30px]">
          {
            data.slice(0, 6).map(d => <FacilityCard key={d._id} data={d}></FacilityCard>)
          }
        </div>

        <h1 className="font-hind text-center text-4xl font-extrabold mt-[60px]">Facilities you will get</h1>

        <FacilityType></FacilityType>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-8 py-4 border border-gray-100 shadow-lg mt-[100px] bg-gray-200 space-y-6">
          <div >
            <Image
              src="https://i.ibb.co.com/nqyKry2T/83222ec7ad5d81a365b7b5165a3afb32.jpg"
              alt="Football"
              height={700}
              width={400}
              className="mx-auto"
              
            />

          </div>
          <div className="space-y-8">
            <p className="font-hind text-5xl font-extrabold">Whether it is football, cricket, badminton, or any other sport, book top-quality turf grounds with ease and focus on what matters most—playing your best game.</p>
            <div className="mt-[60px]"> <UiVerseButton title={"Book Now"} href={"/all-facilities"}></UiVerseButton></div>

          </div>

        </div>
      </div>


    </div>
  );
}
