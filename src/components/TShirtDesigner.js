import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDropzone } from "react-dropzone";
import html2canvas from "html2canvas";
import blackTShirt from "../assets/black.png";
import blueTShirt from "../assets/blue.avif";
import whiteTShirt from "../assets/white.png";

const ItemTypes = {
  LOGO: "logo",
};

const DraggableLogo = ({ logo, logoSize, position, setPosition }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.LOGO,
    item: { type: ItemTypes.LOGO },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      if (offset) {
        setPosition((prevPosition) => ({
          x: prevPosition.x + offset.x,
          y: prevPosition.y + offset.y,
        }));
      }
    },
  }));

  return (
    <img
      ref={drag}
      src={logo}
      alt="Logo"
      style={{
        width: `${logoSize}px`,
        height: "auto",
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        transition: isDragging ? "none" : "left 0.2s ease, top 0.2s ease",
      }}
    />
  );
};

const TShirtDesigner = () => {
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState(100);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tShirtImage, setTShirtImage] = useState(whiteTShirt);
  const tShirtRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result);
        setPosition({ x: 0, y: 0 }); // Reset position when a new logo is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    noClick: true,
  });

  const handleResize = (e) => {
    const newSize = Math.max(50, Math.min(300, e.target.value));
    setLogoSize(newSize);
  };

  const handleDownload = async () => {
    if (tShirtRef.current) {
      const canvas = await html2canvas(tShirtRef.current);
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "tshirt-design.png";
      link.click();
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
  };

  const handleTShirtChange = (image) => {
    setTShirtImage(image);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        {...getRootProps()}
        className="flex flex-col items-center p-5 min-h-screen"
        style={{
          backgroundImage: "url('https://www.freepik.com/free-photos-vectors/background-t-shirt')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ><h1 className="text-2xl font-bold mb-5 text-center">T-Shirt Designer</h1>
      <div className="flex justify-center gap-5">
        <a href="/">
          <button className="px-4 py-2 bg-gray-600 text-white rounded shadow mb-5">
             Home
          </button>
            </a>
            <a href="/custom-table">
                <button className="px-4 py-2 bg-gray-600 text-white rounded shadow mb-5">
                    Custom Table
                </button>
            </a>
        </div>

        <div className="flex gap-10 items-start bg-white bg-opacity-80 p-5 rounded-md">
          <div
            ref={tShirtRef}
            className="relative w-80 h-80 bg-amber-400  rounded-md shadow-xl"
            style={{
              backgroundImage: `url(${tShirtImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {logo && (
              <DraggableLogo
                logo={logo}
                logoSize={logoSize}
                position={position}
                setPosition={setPosition}
              />
            )}
          </div>

          <div className="flex flex-col gap-5">
            <div
              className="border-double border-2 border-gray-300 p-5 shadow-xl rounded-xl  cursor-pointer flex flex-col items-center justify-center"
              onClick={() => document.getElementById('fileInput').click()}
            >
              <input
                {...getInputProps()}
                id="fileInput"
                style={{ display: 'none' }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10l5 5m0 0l5-5m-5 5V3"
                />
              </svg>
              <p className="text-center font-semibold">Drag & drop a logo here, or click to select a file</p>
            </div>

            {logo && (
              <>
                <div>
                  <h2 className="font-semibold mb-2">Resize Logo</h2>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    value={logoSize}
                    onChange={handleResize}
                    className="w-full"
                  />
                </div>

                <button
                  onClick={handleRemoveLogo}
                  className="px-4 py-2 bg-red-600 text-white rounded shadow"
                >
                  Remove Logo
                </button>
              </>
            )}

            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-600 text-white rounded shadow"
            >
              Download
            </button>
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <img
            src={blackTShirt}
            alt="Black T-Shirt"
            className="w-16 h-16 cursor-pointer border border-gray-300"
            onClick={() => handleTShirtChange(blackTShirt)}
          />
          <img
            src={blueTShirt}
            alt="Blue T-Shirt"
           className="w-16 h-16 cursor-pointer border border-gray-300"
            onClick={() => handleTShirtChange(blueTShirt)}
          />
          <img
            src={whiteTShirt}
            alt="White T-Shirt"
            className="w-16 h-16 cursor-pointer border border-gray-300"
            onClick={() => handleTShirtChange(whiteTShirt)}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default TShirtDesigner;
