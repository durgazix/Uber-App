import {useContext} from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext)

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://th.bing.com/th/id/OIP.0DtgmJGBHAqrqMlcJIuhHgHaE8?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">{captain.fullname.firstname+" "+captain.fullname.lastname}</h4>
        </div>
        <div>
          <h4 className="text-xl font-medium">₹186.56</h4>
          <p className="text-sm text-gray-600">Earned Today</p>
        </div>
      </div>
      <div>
      <div>
      <h4 className="flex justify-start mt-5 p-3 text-2xl font-mono">Hello Everyone, This is my profile view</h4>
      </div>
      <div className="flex p-3 mt-3 bg-orange-500 rounded-xl justify-between gap-5 items-start">
        <div className="text-center">
          <i className="text-2xl font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.4</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">40Km/hrs</h5>
          <p className="text-sm text-gray-600">Speed</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.4</h5>
          <p className="text-sm text-gray-600">Driver Details</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CaptainDetails;
