import FacilityCard from "@/Components/FacilityCard";


const AllFacilitiesPage = async() => {

    const res = await fetch('http://localhost:5000/facility');
    const data = await res.json();

    console.log(data);

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
            {
                data.map(d=> <FacilityCard key={d._id} data={d}></FacilityCard>)
            }
        </div>
    );
};

export default AllFacilitiesPage;