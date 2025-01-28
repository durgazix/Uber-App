import React from "react";

const LocalSearchPanel = (props) => {
  const locations = [
    "NH-18, Near GIET University, NC-13 Hostel, Room-No.- 73",
    "NH-5, Near HITECH College, Hitect food plaza, Hostel No. 5, Room No - 6",
    "NH-16, Near Mugpal High School, ICICI Bank, Mugpal Village",
    "NH-20, Near Saraswati sishu vidya mandir, Rasulpur Block, Room-No.- 73",
  ];

  return (
    <div>
      {locations.map(function (elem) {
        return (
          <div
            key={elem}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center border-2 p-3 border-gray-200 active:border-black rounded-xl gap-5 my-3 justify-start"
          >
            <h2 className="bg-[#eee] flex items-center justify-center w-16 h-10 rounded-full px-2">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
            <h4 className="font-medium textbase">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocalSearchPanel;
