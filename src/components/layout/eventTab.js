"use client"
import { useState } from 'react';


const tabsData = [
    { 
        id: 'tab1', 
        label: 'Wedding Planning', 
        content: 'Our expert planners will ensure your special day is perfect in every way.',
        image: 'https://i.pinimg.com/564x/32/fb/e7/32fbe70a9b030a9cfd97eb0e38ecf155.jpg' 
    },
    { 
        id: 'tab2', 
        label: 'Corporate Events', 
        content: 'From conferences to product launches, we manage all your corporate event needs.',
        image: 'https://i.pinimg.com/564x/d6/0c/a5/d60ca53c053fa4de296776a224f98119.jpg' 
    },
    { 
        id: 'tab3', 
        label: 'Birthday Parties', 
        content: 'Make your birthday celebrations memorable with our creative and fun ideas.',
        image: 'https://i.pinimg.com/564x/f9/48/1e/f9481e53952208fb806873f74f1f4b13.jpg' 
    },
];

const EvetnsTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div>
            <div role="tablist" className="flex border-b justify-center">
                {tabsData.map((tab) => (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-controls={`${tab.id}-content`}
                        aria-selected={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 ${activeTab === tab.id ? 'bg-rose-500 text-white' : 'text-gray-700'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {tabsData.map((tab) => (
                    <div
                        key={`${tab.id}-content`}
                        role="tabpanel"
                        id={`${tab.id}-content`}
                        className={`p-4 ${activeTab === tab.id ? 'block' : 'hidden'}`}
                    >
                    <div className="flex justify-center mb-4">
                    <img 
                                src={tab.image} 
                                alt={tab.label} 
                                className="w-2/4 h-auto object-cover"
                            />
                    </div>
                        <p>{tab.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EvetnsTabs;

