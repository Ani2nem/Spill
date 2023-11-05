import React from "react";
import Container from "./container";

const Cta = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Use the file as needed, e.g., upload to server or process locally.
  };

  return (
    <Container>
      <div className="spill-js flex items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 rounded-xl">
        <input
          type="text"
          placeholder="Your CSV file goes here"
          className="flex-grow p-3 bg-white rounded-md text-black"
          style={{ height: '67px', fontSize: '23px', fontWeight: '500' }}
        />

        <a
          href="https://github.com/web3templates"
          target="_blank"
          rel="noopener"
          className="flex-shrink-0 p-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md"
          style={{ height: '67px', fontSize: '23px', fontWeight: 'bold', width: '25%' }}
        >
          Submit
        </a>

        <label htmlFor="file-upload" className="flex-grow text-center lg:text-left p-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="file-input"
            style={{ display: 'none' }}
          />
          <span style={{ height: '40px', fontWeight: 'bold', display: 'block' }}>Choose File</span>
        </label>
      </div>
    </Container>
  );
};

export default Cta;
