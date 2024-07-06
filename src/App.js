// src/App.js
import React, { useState } from 'react';
import Popup from './components/Popup';
import './App.css'; // Ensure Tailwind CSS is imported
import Footer from './components/Footer';
import ReferralTable from './components/ReferralTable';

const App = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handlePopupOpen = () => {
        setPopupVisible(true);
    };

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" alt="Logo" className="h-8" />
                    </div>
                    <nav>
                        <a href="#" className="text-gray-800 hover:text-blue-500 mx-2">Refer & Earn</a>
                        <a href="#" className="text-gray-800 hover:text-blue-500 mx-2">Resources</a>
                        <a href="#" className="text-gray-800 hover:text-blue-500 mx-2">About Us</a>
                        <a href="#" className="text-gray-800 hover:text-blue-500 mx-2">Login</a>
                    </nav>
                    <button onClick={handlePopupOpen} className="bg-blue-500 text-white px-4 py-2 rounded">
                      
                      Try for free</button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Main Content here */}
                <section className="bg-white p-8 rounded shadow">
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Let's Learn & Earn</h1>
                            <p className="text-xl text-gray-600 mb-4">Get a chance to win up-to Rs. 15,000</p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handlePopupOpen}
                            >
                                Refer Now
                            </button>
                        </div>
                        <div className="w-1/2">
                            <img src="https://static-perf1.zupee.com/blog-images/uploads/2023/05/refer-and-earn-apps-in-india.webp" alt="Hero Image" className="w-full h-auto" />
                        </div>
                    </div>
                </section>
                <ReferralTable />
                <Footer />
            </main>

            <Popup isVisible={isPopupVisible} onClose={handlePopupClose} />
        </div>
    );
};

export default App;
