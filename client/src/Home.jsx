import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className="bg-white p-3 rounded text-center">
        <h2>Welcome! You are Registered Succcessfully 🥳</h2>
        <Link to="/register" className='btn btn-primary w-50 rounded d-block mx-auto'>
          Back to Screen
        </Link>
      </div>
    </div>
  );
}

export default Home;
