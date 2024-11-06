import EachPlace from "./eachPlace/EachPlace";

const PlaceListTable = () => {
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="bg-[#F8F8F8] w-[50%]">
          <EachPlace />
        </div>
      </div>
    </>
  );
};

export default PlaceListTable;