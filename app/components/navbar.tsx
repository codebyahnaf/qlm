export default function Navbar(){
    return(
        <>
        <div className="navbar-bg">
            <div className="company-logo">Q:.M <span className="company-name">| Quality Local Marketing</span> </div>
        <div className="navbar">
                <a href="/">
                    <button>Home</button>
                </a>
                <a href="services">
                <button>Services</button>
                </a>
                <a href="contact">
                <button>Contact</button>
                </a>
            </div>

        </div>
        </>
    )
}