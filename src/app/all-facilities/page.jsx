import FacilityCard from "@/Components/FacilityCard";
import SearchFacility from "@/Components/SearchFacility";

const AllFacilitiesPage = async ({ searchParams }) => {


    const params = await searchParams

    const search = params?.search || "";
    const sportType = params?.sportType || "";

    // console.log("SEARCH PARAMS:", params);

    const res = await fetch(`http://localhost:5000/facility?search=${search}&sportType=${sportType}`,
        { cache: "no-store" });

    const data = await res.json();

    console.log(data);

    return (

        <div className="mt-[60px] ">
            <div className=" max-w-7xl mx-auto ">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
                    <h1 className=" text-4xl font-bold">All Facilities</h1>
                    <div>
                        <SearchFacility></SearchFacility>
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[30px]">
                    {
                        data.map(d => <FacilityCard key={d._id} data={d}></FacilityCard>)
                    }
                </div>
            </div>



        </div>

    );
};

export default AllFacilitiesPage;