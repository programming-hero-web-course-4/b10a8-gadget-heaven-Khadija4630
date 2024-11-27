import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets,setGadgets]= useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Gadgets');

    useEffect(() => {
        fetch('./gadgets.json')
        .then (response => response.json())
        .then (data => { 
            setGadgets(data);
            setFilteredGadgets(data);
        });
},[])
    

const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filtered = category === 'All Gadgets' ? gadgets : gadgets.filter(gadget => gadget.category === category);
    setFilteredGadgets(filtered);
};


    return (
        <div className=" bg-[#09080F0d] pt-28 md:pt-96">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-black mb-8 md:p-2">Explore Cutting-Edge Gadgets</h1>
                <div className="md:flex gap-6 w-full md:w-10/12 mx-auto mb-2">
                <div className="md:w-[240px] w-[80%] ml-4 h-[500px] gap-6 rounded-3xl p-6 mt-2 mb-2 bg-white">
                    {['All Gadgets', 'Laptops', 'Phones', 'Smart Watches', 'Chargers', 'Power Banks'].map(category => (
                        <button
                            key={category}
                            className={`w-[192px] h-[52px] rounded-3xl text-lg font-medium text-left mb-6 ${selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-[#09080F0d] hover:bg-[#9538E2] hover:text-white'}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
            </div>
            <div className="md:w-[1016px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {filteredGadgets.map(gadget =>(
                <Gadget gadget={gadget} key={gadget.product_id}></Gadget> ))
}
            </div>
            </div>
        
        </div>
    );
};

export default Gadgets;