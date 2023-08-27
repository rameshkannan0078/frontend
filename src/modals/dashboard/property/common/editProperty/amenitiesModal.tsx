import PrButtonV2 from "@/components/common/PrButton/PrButtonV2";
import { Amenities } from "@/components/containers/property/amenities/commonAmenities";

function AmenitiesModal() {
  const columnCount = 3;
  const chunkSize = Amenities.length / columnCount;
  const amenitiesChunks = [];

  for (let i = 0; i < Amenities.length; i += chunkSize) {
    const chunk = Amenities.slice(i, i + chunkSize);
    amenitiesChunks.push(chunk);
  }

  return (
    <div className="mb-64">
        <div className="grid grid-cols-3">
      {amenitiesChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex}>
          {chunk.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2 p-2">
              <input
                type="checkbox"
                id={`amenity-${chunkIndex}-${index}`}
                className="form-checkbox h-6 w-6"
              />
              <label className='font-semibold text-md' htmlFor={`amenity-${chunkIndex}-${index}`}>{amenity.label}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="flex mt-12 space-x-16 justify-center">
          <PrButtonV2 label={"Save"} className="rounded-md" />
          <PrButtonV2 label={"Cancel"} className="rounded-md" dangerLink buttonStyle='danger' />
        </div>
    </div>
  );
}

export default AmenitiesModal;
