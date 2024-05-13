import techLogo from "./../assets/settingsTechnology.png";

export const OfferDetails = ({ technologies, businessModel }) => {
  return (
    <>
      <div className="p-5 mt-9 border shadow-md">
        <p className="font-medium">Offer details</p>
        <div className="flex flex-row gap-7 w-[60rem] ">
          <div>
            <div>
              <img src={techLogo} alt="logo" className="w-5 h-5 inline " />
              Technology
              <div className="flex flex-row gap-2 text-sm mt-1">
                {technologies?.map((item, index) => {
                  return (
                    <>
                      <div className=" p-2 border rounded-full bg-[#ddd]  text-sm mt-1">
                        <div className="">{item?.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              TRL
              <div className="bg-[#ddd] p-2 border rounded-full   text-sm mt-1"></div>
            </div>
          </div>

          <div>
            <div className="">
              Business Model
              <div className="flex flex-row gap-1 text-sm mt-1">
                {businessModel?.map((item) => {
                  return (
                    <>
                      <div className=" bg-[#ddd] p-2 border rounded-full w-[9rem] ">
                        {item?.name}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="mt-2">
                Costs
                <div className=" bg-[#ddd] p-1 border rounded-full w-[6rem] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
