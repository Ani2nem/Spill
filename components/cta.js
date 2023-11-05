import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="spill-js flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
        <input
          type="text"
          placeholder="Your CSV file goes here"
          className="p-3 bg-white rounded-md w-full text-black"
          style={{ height: '67px', fontSize: '23px', fontWeight: '500'}}
        />
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
            style={{ fontSize: '23px', fontWeight: 'bold' }}>
            Submit
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;