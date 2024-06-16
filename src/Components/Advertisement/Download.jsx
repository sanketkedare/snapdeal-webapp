import React from "react";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="flex gap-5 my-3 items-center">
      <Link to="https://apps.apple.com/in/app/snapdeal-online-shopping-app/id721124909?ls=1&utm_campaign=ios&utm_source=mobileAppLp"  target="_blank">
        <img
        alt="Download"
          className="lg:h-[50px] h-8"
          src="data:image/png;base64,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"
        />
      </Link>
      <Link to="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=mobileAppLp&utm_campaign=android"  target="_blank">
        <img
                alt="Download"

          className="lg:h-[70px] h-12"
          src="data:image/png;base64,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"
        />
      </Link>
    </div>
  );
};

export default Download;
