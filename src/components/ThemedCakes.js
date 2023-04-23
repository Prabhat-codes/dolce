import React from 'react'
import CakeCard from './CakeCard';
import '../styles/ThemedCakes.css';
const ThemedCakes = () => {
    const cakes = [

        {
            name: "Strawberry Shortcakes",
            image:
                "https://images.unsplash.com/photo-1557979619-445218f326b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "A classic cake that's perfect for any occasion. Layers of light sponge cake and fresh strawberries are sandwiched together with whipped cream.",
            price: "$24.99",
        },
        {
            name: "Chocolate Cakes",
            image:
                "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60  ",
            description:
                "A rich, decadent cake made with high-quality cocoa powder and topped with chocolate ganache.",
            price: "$29.99",
        },
        {
            name: "Lemon Meringue Cakes",
            image:
                "https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "A tangy, refreshing cake made with lemon zest and fresh lemon juice. The light and airy meringue frosting makes it a showstopper.",
            price: "$26.99",
        },
        {
            name: "Black Forest Cake",
            image: "https://images.unsplash.com/photo-1579306194873-1be32997525a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "A rich and decadent chocolate cake with layers of cherries and whipped cream. Perfect for chocolate lovers!",
            price: "$29.99"
        },
    ];
    return (
        <section className="gallery">
            <h2 className="gallery-title">Themed Cakes</h2>
            <div className="gallery-cards">
                {cakes.map((cake, index) => (
                    <CakeCard
                        key={cake.name}
                        image={cake.image}
                        name={cake.name}
                        description={cake.description.slice(0, 60)}
                        price={cake.price}
                    />
                ))}
            </div>
        </section>
    )
}

export default ThemedCakes