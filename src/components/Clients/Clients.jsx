import React from 'react';

const Clients = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="slider h-100 mx-auto overflow-hidden relative w-auto">
        <div className="slide-track">
          <div className="slide h-100 w-250">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide h-100 w-250">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div> <div className="slide h-100 w-250">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div> <div className="slide h-100 w-250">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div> <div className="slide h-100 w-250">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide h-100 w-250">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          {/* Add the rest of the slide items */}
        </div>
      </div>
    </div>
  );
};

export default Clients;
