import React from 'react';

const Count = () => {
  return (
    <section className="main-container ">
      <div className="flex justify-between  mx-20 ">
        <div className="md:ml-20 ">
          <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#7940dd] to-[#c33ba6] md:ml-10">
            100M
          </h1>
          <span className="text-base pt-3 text-white font-normal">Supply</span>
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#7940dd] to-[#c33ba6]">
            200+
          </h1>
          <span className="text-base pt-3  text-white fontnormalt">Data 2</span>
        </div>
        <div className="md:mr-20">
          <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#7940dd] to-[#c33ba6] md:mr-10">
            1200+
          </h1>
          <span className="text-base pt-3 text-white font-normal">Data 2</span>
        </div>
      </div>
    </section>
  );
};

export default Count;
