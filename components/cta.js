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

        <label htmlFor="file-upload" className="flex-grow text-center lg:text-left p-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md"  style={{
            cursor: 'pointer',}}>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="file-input"
            style={{ display: 'none' }}
          />
          <span style={{ height: '40px', fontWeight: 'bold', display: 'block', textAlign: "center", fontSize: "25px", transition: 'opacity 0.1s ease-in-out'}}
          onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >Upload File </span>
        </label>
      </div>
    </Container>
  );
};

export default Cta;
