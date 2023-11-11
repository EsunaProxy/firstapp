import { Link, Routes, Route } from "react-router-dom";
import Contact from './Contact';
import Intro1 from './Intro1';
import Promo from "./Promo";
import Calculator from "./Calculator";
function Nav() {
    return (
        <div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/promo">Promo</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/calculator">Calculator</Link>
            </nav>
            
        <Routes>
            <Route path="/" element={<Intro1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/promo" element={<Promo/>} />
            <Route path="/calculator" element={<Calculator/>} />
        </Routes>
        </div>
    );
};

export default Nav;