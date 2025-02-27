import NeedCard from "../components/NeedCard";

function DonorDashboard() {
  const needs = [
    {
      institute: "Sunshine Orphanage",
      location: "5 miles away",
      need: "10 kg Rice",
    },
    { institute: "Elderly Home", location: "8 miles away", need: "5 kg Sugar" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-teal-900">Donor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {needs.map((need, index) => (
          <NeedCard
            key={index}
            institute={need.institute}
            location={need.location}
            need={need.need}
          />
        ))}
      </div>
    </div>
  );
}

export default DonorDashboard;
