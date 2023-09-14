import React from 'react';

const BeerCard = ({ beerData }) => {
    console.log(beerData)
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={beerData.image_url} alt={beerData.name} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">{beerData.name}</h2>
                <p className="text-gray-600 text-sm">{beerData.description}</p>
                <div className="mt-4">
                    <p className="text-gray-700">
                        ABV: {beerData.abv}% | IBU: {beerData.ibu}
                    </p>
                    <p className="text-gray-700">First Brewed: {beerData.first_brewed}</p>
                    <p className="text-gray-700">Tagline: {beerData.tagline}</p>
                </div>
            </div>
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">Food Pairing</h3>
                <ul className="mt-2">
                    {beerData.food_pairing && beerData.food_pairing.map((pairing, index) => (
                        <li key={index} className="text-gray-600">
                            {pairing}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BeerCard;
