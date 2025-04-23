import mentorDetails from "../mentorsData.json";

const Mentors = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {mentorDetails.map(({ id, name, image, expertise, years_of_experience }) => (
        <div
          key={id}
          className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4"
        >
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">{name}</h2>
          <p className="text-sm text-gray-600">{expertise}</p>
          <p className="text-sm text-gray-500">{years_of_experience} years experience</p>
        </div>
      ))}
    </div>
  );
};

export default Mentors;
