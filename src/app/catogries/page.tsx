import React from "react";
import Image from "next/image";

const Catogries = () => {

const catogriesData = [
    { id: 1, name: 'Luxury Dinner Sets', price: 20000, description: 'Elegant and durable dinner sets for every occasion.', image: '/LuxuryDinnerSet.jpg'},
    { id: 2, name: 'Tea & Coffee Sets', price: 8000, description: 'Charming tea and coffee sets to enhance your gatherings.', image: '/Tea&CoffeeSets.jpg'},
    { id: 3, name: 'Serving Platters', price: 7000, description: 'Beautiful serving platters to impress your guests.', image: '/ServingPlatters.jpg'},
    { id: 4, name: 'Bowls & Glassware', price: 5000, description: 'Stylish bowls and glassware for an exquisite table setting.', image: '/orange.jpg' },
    { id: 5, name: 'Customizable Crockery', price: 15000, description: 'Tailor-made crockery to suit your personal style.', image: '/CustomizableCrockery.jpg' },
    { id: 6, name: 'Vintage Plates', price: 10000, description: 'Classic vintage plates with intricate patterns.', image: '/VintagePlates.jpg' },
    ]


    return(
        <div>
            <div className="collection">
                {catogriesData.map((catogries)=> (
                    <div key={catogries.id} className="catogries-card">
                        <Image src={catogries.image} alt={catogries.name} />
                        <h3>{catogries.name}</h3>
                        <p>{catogries.description}</p>
                        <div className="price">${catogries.price}</div>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catogries