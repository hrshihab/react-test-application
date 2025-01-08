import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="text-center mt-12 shadow-xl border-2 border-gray-300 rounded-xl w-1/2 mx-auto h-1/2 p-10 ">
            <h1>Welcome to Our Application</h1>
            <div className="my-5">
                <Link to="/custom-table">
                    <button className="w-1/2 px-5 py-2 text-lg cursor-pointer rounded border-none bg-blue-500 text-white transition duration-300 hover:bg-blue-600">
                        Go to Custom Table
                    </button>
                </Link>
            </div>
            <div className="my-5">
                <Link to="/tshirt-designer">
                    <button className="w-1/2 px-5 py-2 text-lg cursor-pointer rounded border-none bg-blue-500 text-white transition duration-300 hover:bg-blue-600">
                        Go to T-Shirt Designer
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home; 