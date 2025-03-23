import PropTypes from 'prop-types';

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="absolute p-1 top-0 w-[94%] text-center"
      >
        <i className="text-3xl bg-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('car')
        }}
        className="flex border-2 active:border-black mb-2 rounded-2xl w-full items-center p-2 justify-between"
      >
        <img
          className="h-10"
          src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="text-lg font-medium">
            Uber Lux{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h4 className="text-base font-medium">2 mins away</h4>
          <p className="text-sm font-normal text-gray-600">
            Preferable, Compact Rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('moto')
        }}
        className="flex border-2 active:border-black mb-2 rounded-2xl w-full items-center p-2 justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="text-lg font-medium">
            Uber Bike{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h4 className="text-base font-medium">2 mins away</h4>
          <p className="text-sm font-normal text-gray-600">
            Suitable, MotorCycle Rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('auto')
        }}
        className="flex border-2 active:border-black mb-2 rounded-2xl w-full items-center p-2 justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="text-lg font-medium">
            Uber Auto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h4 className="text-base font-medium">2 mins away</h4>
          <p className="text-sm font-normal text-gray-600">
            Afforadable, AutoRiska Rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

VehiclePanel.propTypes = {
    setVehiclePanel: PropTypes.func.isRequired,
    setConfirmRidePanel: PropTypes.func.isRequired,
    fare: PropTypes.shape({
        car: PropTypes.number,
        auto: PropTypes.number,
        moto: PropTypes.number
    }),
    selectVehicle: PropTypes.func.isRequired
};


export default VehiclePanel;
