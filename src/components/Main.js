import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import BestSellingCakes from "./BestSellingCakes";
import Header from "./Header";
import ThemedCakes from "./ThemedCakes";
import TodaySpecial from "./TodaySpecial";
function HomePage() {

    return (
        <div>
            <Navbar />
            <Header />
            <BestSellingCakes />
            <TodaySpecial />
            <ThemedCakes   /> 
            <About />
            <Footer />

        </div>
    );
}

export default HomePage;
