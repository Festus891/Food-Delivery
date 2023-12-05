import React from "react";
import delivery from "../img/delivery.png";

function MainContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap2">
      <div className=" py-2 flex-1 flex flex-col items-start md:items-center justify-center">
        <div className="flex items-center gap-2 justify-center bg-orange-800">
          <p>Bike delivery</p>
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
            <img
              src={delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="py-2 bg-blue-400 flex-1"></div>
    </div>
  );
}

export default MainContainer;
