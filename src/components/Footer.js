import React from "react";
import "../styles/Footer.css";
import axios from "axios";

function Footer() {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("email", email);
    //     const data = {
    //         Email: email
    //     }
    //     axios.post('https://sheet.best/api/sheets/9918b12b-a6ab-4c1a-a1c0-ed47b3061a56', data).then((response) => {
    //         console.log(response);
    //         setEmail('');
    //     })

    // }
    // axios.post('https://cors-anywhere.herokuapp.com/script.google.com/macros/s/AKfycbx0QNptOjwr-SMAY8iAeuTLkEjmlu3KxRwY8jCC5wyvlcEBrLE4br6lXKJxtZLSSGKrGg/exec', data).then((response) => {
    //     console.log(response);
    //     setEmail('');
    // })
    const [email, setEmail] = React.useState("");
    return (
        <footer className="footer" id="contact">
            <div className="container" style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                <div className="row">
                    <div className="col-sm-4" style={{ textAlign: "left" }}>
                        <h4>Our Location</h4>
                        <p>1234 Main Street, Suite 101</p>
                        <p>City, State ZIP</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                    <div className="col-sm-4">
                        <h4>Connect With Us</h4>
                        <p>Follow us on social media:</p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/dolcemanipal/"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/dessertsbydolce/?hl=en"><i className="fab fa-twitter"></i></a>
                            <a href="https://wa.me/9449563877"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <h4>Blog</h4>
                        <p>Check out our Blog!</p>
                        {/* <form autoComplete="off" className='form-group' onSubmit={handleSubmit}>
                            <input type="email" placeholder="Email address" required className='form-control' onChange={(e) => setEmail(e.target.value)} value={email || ''} />
                            <button type="submit" >Sign Up</button>
                        </form> */}
                        <p><a href="https://www.youtube.com/watch?v=WA4g5SENoyE" className="blog-link">Dolce and its journey!</a></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <hr></hr>
                    <p>&copy; 2023 Dolce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
