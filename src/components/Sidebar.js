import home from "./../assets/home.png";
import member from "./../assets/members.png";
import organisation from "./../assets/organisation.png";

export const Sidebar = () => {
  const sidebarData = [
    {
      id: 1,
      image: home,
      label: "Home",
    },
    {
      id: 2,
      image: member,
      label: "Memeber",
    },
    {
      id: 3,
      image: organisation,
      label: "Organisation",
    },
  ];

  return (
    <>
      <div className="flex flex-col mt-2">
        {sidebarData.map((item) => {
          return (
            <>
              <div class="w-64 bg-gray-100 flex flex-row items-center ">
                <div className="p-3">
                  <img src={item?.image} alt="svg" />
                </div>
                <div>{item?.label}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
