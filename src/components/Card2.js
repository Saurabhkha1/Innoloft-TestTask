export const Card2 = ({ picture, Title, Type, description }) => {
  return (
    <>
      <div className="bg-white mt-3 w-[40rem] border shadow-sm ">
        <img src={picture} alt="" />

        <div class="mt-2 ">
          <h2 class="font-bold  text-xl text-grey-800 text-justify  border shadow-md">
            {Title}
          </h2>

          <h3 class="font-bold  text-xm text-grey-800 text-justify">{Type}</h3>
          <p className="text-grey-600 mt-1 mb-2 ">{description}</p>
        </div>
      </div>
    </>
  );
};
