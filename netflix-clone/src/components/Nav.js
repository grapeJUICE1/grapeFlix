import React, { useState, useEffect } from "react";
import "../css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix logo"
        className="nav__logo"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAVFBMVEUAoYz///8AnIUAnoml08pLsJ/i8e77/v0AmYH3/PsyqJSZzsTe8O1ht6hnuqzt9vWDxLjH5N/W6+eQyr+839g+rpxWtaQho450vq96wrWy2tPA3dYUaAtmAAACv0lEQVRoge2b2aKrIAxFIXHEebae///Pq622CtSr4tHzkPUcswWDwkYY565lsyuxLc454w6DS2VZr+dw5jK8WJb1ii6zrm7tAFjs2mc7cY8qQRAEQRCEBsQN079NQTsAFHVci/UJL6Ko4qhqTpsnIgYhHwiDlfZAlD2DklKcowyRzyf8+ktOZPk7iAfeGbIpn/PQCqPw50GZeYuh5UtibVcny6DSWFhIGXnSaG6ulIJ4a1jYYMkZuWZhYytBoemAkpvL+/XjhpvjkZEw1q6aUlnbgKMGBUZPGOWqGlAqq1E7hWdGYwkfGl2lZpaD6EV+vq7SXqXmzdsbaXRrWVf3fE2X81vq2etUXbN6Zt6W8Yv1hpvbiVIzvlCDIJN1U9MXpfRZ6D8Mmg5E+e4y8++/9DLS1wss3y+55h2+Xzj95HS/9R9Ws5ouz7HEQHQvZbf7PpVAKMbSD+MzPvtPPIjSIo1wNSF41aMoWuGdObdD3DJX3BREEARBEARBEARB/HkQDJZ3xy+F1oqP+iMo2qN+Pwb96r04djHEPvcPeljwtA0OCUM8XJocMxxgzcFZv3I0nw72VTeZUTv7azL5jnqj3rhtkOyqEIRxSyc87Ou83cliu0njTVa5iQPtFWOS0N6WBZrJquyMXKxhPIx5xP8TAQsmb+/g+PukqqYNON+qVnsbPTFZdjyJjDeuEN/GqJ9F7NubE8Du3h55Kc6wz6D+eJ6OZTcgaSMAs4vwHZO0J23FIhQzfznJglo02Kv1IDbCTrOZGetaJ/6gCI213MBK8qz86clyeUeyOs2NfSmzQLNLJGNtKPrdyl6rbCMsyB7e7/yL2T/StNTsUfX4ZQGnGs+KNIqizJyZ9e/kP0V1hfHcazdCVFHbtlEl+tKWB9Yvy5O7ThAEQRDE3+au8zh3nT+667zVXefLhlXNDefp/gFTnhYh35EZ3AAAAABJRU5ErkJggg=="
        alt="Netflix logo"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
