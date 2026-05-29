import FacilityCard from "@/Components/FacilityCard";
import SearchFacility from "@/Components/SearchFacility";



const AllFacilitiesPage = async ({ searchParams }) => {

    const params = await searchParams

    const search = params?.search || "";
    const sportType = params?.sportType || "";

    console.log("SEARCH PARAMS:", params);

    const res = await fetch(`http://localhost:5000/facility?search=${search}&sportType=${sportType}`,
        { cache: "no-store" });

    const data = await res.json();

    console.log(data);

    return (

        <div className="mt-[60px] max-w-7xl mx-auto ">
            <div className="flex justify-between items-center ">
                <h1 className=" text-4xl font-bold">All Facilities</h1>
                <div>
                    <SearchFacility></SearchFacility>
                </div>
            </div>

            <div className=" grid grid-cols-3 gap-10 mt-[30px]">
                {
                    data.map(d => <FacilityCard key={d._id} data={d}></FacilityCard>)
                }
            </div>
        </div>

    );
};

export default AllFacilitiesPage;