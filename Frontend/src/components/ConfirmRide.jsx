import PropTypes from "prop-types";

const ConfirmRide = ({ setVehiclePanel, setConfirmRidePanel, setVehicleFound, createRide, pickup, destination, fare, vehicleType }) => {
  return (
    <div>
      <h5
        onClick={() => {
          if (typeof setVehiclePanel === "function") { 
            setVehiclePanel(false);
          } else {
            console.error("setVehiclePanel is not a function");
          }
          setConfirmRidePanel(false);
        }}
        className="absolute p-1 top-0 w-[94%] text-center"
      >
        <i className="text-3xl bg-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>

      <div className="flex gap-3 items-center justify-between flex-col">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
          alt="Car"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-6 p-3 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="font-medium text-xl">Pickup</h3>
              <p className="text-base mt-1 text-gray-600">
                {pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b-2">
            <i className="text-xl ri-map-pin-2-fill"></i>
            <div>
              <h3 className="font-medium text-xl">Destination</h3>
              <p className="text-base mt-1 text-gray-600">
              {destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-2">
            <i className="text-xl ri-currency-fill"></i>
            <div>
              <h3 className="font-medium text-xl">Esimated Fare</h3>
              <p className="text-base mt-1 text-gray-600">
              ₹{fare && fare[vehicleType] ? fare[vehicleType] : "N/A"}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setVehicleFound(true);
            setConfirmRidePanel(false);
            createRide()
          }}
          className="w-full mt-3 bg-green-600 font-semibold text-white p-2 rounded-lg text-base"
        >
          Confirm your Vehicle
        </button>
      </div>
    </div>
  );
};

ConfirmRide.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
  setConfirmRidePanel: PropTypes.func.isRequired,
  setVehicleFound: PropTypes.func.isRequired,
  createRide: PropTypes.func.isRequired,
  pickup: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  fare: PropTypes.shape({
          car: PropTypes.number,
          auto: PropTypes.number,
          moto: PropTypes.number
  }).isRequired,
  vehicleType: PropTypes.string
};

export default ConfirmRide;
