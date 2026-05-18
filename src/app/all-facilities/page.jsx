import FacilityCard from "@/Components/FacilityCard";


const AllFacilitiesPage = async () => {

    const res = await fetch('http://localhost:5000/facility');
    const data = await res.json();

    console.log(data);

    return (
        <div className="mt-[60px]">
            <h1 className="text-center text-4xl font-bold">All Facilities</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
                {
                    data.map(d => <FacilityCard key={d._id} data={d}></FacilityCard>)
                }
            </div>
        </div>

    );
};

export default AllFacilitiesPage;