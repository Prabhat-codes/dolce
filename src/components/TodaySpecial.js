import React, { useState, useEffect } from "react";
import '../styles/TodaySpecial.css';
const TodaySpecial = () => {
    const [cakeData, setCakeData] = useState([]);
    const [currentCake, setCurrentCake] = useState({});

    const cakes = [
        {
            name: "Strawberry Shortcake",
            image:
                "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
                "A classic cake that's perfect for any occasion. Layers of light sponge cake and fresh strawberries are sandwiched together with whipped cream.",
            price: "$24.99",
        },
        {
            name: "Chocolate Fudge Cake",
            image:
                "https://images.unsplash.com/photo-1567331124883-c3fd142c01d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYWNvbG9neSUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
                "This rich chocolate cake is made with layers of moist chocolate cake and thick fudge frosting, and is perfect for chocolate lovers.",
            price: "$29.99",
        },
        {
            name: "Lemon Drizzle Cake",
            image:
                "https://images.unsplash.com/photo-1586962026569-59e9c56dce80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBkcml6emxlJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "This tangy and sweet cake is made with lemon zest and juice and is drizzled with a lemon sugar syrup to create a moist and delicious treat.",
            price: "$19.99",
        },
        {
            name: "Red Velvet Cake",
            image:
                "https://images.unsplash.com/photo-1562609436-dc2276c0d6f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "This rich and velvety cake is made with a blend of cocoa powder and red food coloring to create a beautiful red hue. It's then topped with cream cheese frosting for the perfect balance of sweetness and tanginess.",
            price: "$34.99",
        },
        {
            name: "Carrot Cake",
            image:
                "https://images.unsplash.com/photo-1586962026569-59e9c56dce80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBkcml6emxlJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "This tangy and sweet cake is made with lemon zest and juice and is drizzled with a lemon sugar syrup to create a moist and delicious treat.",
            price: "$19.99",
        },
        {
            name: "Chocolate Cake",
            image:
                "https://images.unsplash.com/photo-1567331124883-c3fd142c01d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYWNvbG9neSUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
                "This rich chocolate cake is made with layers of moist chocolate cake and thick fudge frosting, and is perfect for chocolate lovers.",
            price: "$29.99",
        },
        {
            name: "Vanilla Cake",
            image:
                "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
                "A classic cake that's perfect for any occasion. Layers of light sponge cake and fresh strawberries are sandwiched together with whipped cream.",
            price: "$24.99",
        },

        // Add more cakes here
    ];

    useEffect(() => {
        // Get current day of week (0-6)
        const dayOfWeek = new Date().getDay();

        // Rotate cakes based on current day of week
        const rotatedCakes = cakes.slice(dayOfWeek).concat(cakes.slice(0, dayOfWeek));

        setCakeData(rotatedCakes);
        setCurrentCake(rotatedCakes[0]);
    }, []);

    const handleCakeClick = (index) => {
        setCurrentCake(cakeData[index]);
    };

    return (
        <div className="today-special" id="special">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img
                        src={currentCake.image}
                        alt={currentCake.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="">Today's Special</h1>
                    <h2 className="">{currentCake.name}</h2>
                    <p className="">{currentCake.description}</p>
                    <p className="font-weight-bold mb-2">Price: {currentCake.price}</p>
                    <div className="row">
                        {cakeData.map((cake, index) => (
                            <div
                                className="col-4 mb-3"
                                key={index}
                                onClick={() => handleCakeClick(index)}
                            >

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaySpecial;
