import React from 'react';
import { useEffect } from 'react';

const Statistics = () => {

    useEffect(() => {
        document.title = "Statistics | GadgetHeaven ";
      }, []);
    return (
        <div>
            
            <div className="bg-[#9538E2] text-white py-5 text-center rounded-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">Statistics</h2>
            <p className="mb-6 mt-4 font-medium"> Statistics is what makes us manage the finance well.</p>
        </div>
        <h2>Chart</h2>
        </div>
    );
};

export default Statistics;