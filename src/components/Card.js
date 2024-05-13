export const Card = ({ firstName, lastName, CompanyName, Image }) => {
  return (
    <>
      <div class=" bg-white rounded-xl  flex space-x-4">
        <div class="">
          <img
            class="w-10 h-10 rounded-full"
            src={Image}
            alt="Rounded avatar"
          />
        </div>
        <div>
          <div class="text-xl font-medium text-black">
            {`${firstName}  ${lastName}`}
          </div>
          <p class="text-slate-500">{CompanyName}</p>
        </div>
      </div>
    </>
  );
};
