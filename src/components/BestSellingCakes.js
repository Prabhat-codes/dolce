import React from 'react'
import CakeCard from './CakeCard'
const BestSellingCakes = () => {
    const cakes = [
        {
            name: "Strawberry Shortcake",
            image:
                "https://images.unsplash.com/photo-1624137308741-4d163744b62a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "A classic cake that's perfect for any occasion. Layers of light sponge cake and fresh strawberries are sandwiched together with whipped cream.",
            price: "$24.99",
        },
        {
            name: "Chocolate Cake",
            image:
                "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60  ",
            description:
                "A rich, decadent cake made with high-quality cocoa powder and topped with chocolate ganache.",
            price: "$29.99",
        },
        {
            name: "Lemon Meringue Cake",
            image:
                "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
                "A tangy, refreshing cake made with lemon zest and fresh lemon juice. The light and airy meringue frosting makes it a showstopper.",
            price: "$26.99",
        },
        {
            name: "Strawberry Shortcakes",
            image:
                "https://images.unsplash.com/photo-1602630209855-dceac223adfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "A classic cake that's perfect for any occasion. Layers of light sponge cake and fresh strawberries are sandwiched together with whipped cream.",
            price: "$24.99",
        },
        {
            name: "Chocolate Cakes",
            image:
                "https://media.istockphoto.com/id/1329936199/photo/image-of-sliced-chocolate-strawberry-tart-crispy-cocoa-pastry-crust-topped-with-whole-and.jpg?b=1&s=170667a&w=0&k=20&c=lmyxj2okHNrLlcHMO7TkkoCs4y023dymeGUN6zl3dYs=",
            description:
                "A rich, decadent cake made with high-quality cocoa powder and topped with chocolate ganache.",
            price: "$29.99",
        },
        {
            name: "Lemon Meringue Cakes",
            image:
                "https://images.unsplash.com/photo-1602663491496-73f07481dbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description:
                "A tangy, refreshing cake made with lemon zest and fresh lemon juice. The light and airy meringue frosting makes it a showstopper.",
            price: "$26.99",
        },

    ];
    return (
        <section className="gallery">
            <h2 className="gallery-title">Best Selling Cakes</h2>
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

export default BestSellingCakes