import React from "react";

const Location = () => {
  return (
    <div id="kontakt" style={{ backgroundPosition: window.innerWidth < 1024 && '50% 50%' }} className="py-12 px-6 lg:px-36 bg-[url(/./assets/images/bg-mirror2.png)] bg-no-repeat bg-left bg-cover">
      <div className="rounded-2xl">
        <iframe
          width="100%"
          className="h-[300px] xl:h-[600px] rounded-2xl -translate-y-0 xl:-translate-y-10"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5888.813538624163!2d20.473466668841695!3d44.75677776370621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71043e935857%3A0xcf2f6c0eeaff0ca3!2sShopping%20Mall%20Banjica!5e0!3m2!1sen!2srs!4v1719229050073!5m2!1sen!2srs"
        ></iframe>
      </div>

    </div>
  );
};

export default Location;
