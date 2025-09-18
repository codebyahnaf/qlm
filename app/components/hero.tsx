import { useEffect, useState } from "react"

export default function hero (){

    const phrases = ["Monthly SEO", "Local SEO", "PPC Management",
         "Reputation Management", "Social Media Marketing",
          "Online Marketing", "Web Design & Development"];
      const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
    return(
        <>
            <div className="hero-bg">
                <div className="hero-image">
                </div>
                <div className="hero-text">
                    <h1>Full service marketing solutions for local businesses</h1>
                    <h4>
                        {phrases[currentWordIndex]}
                    </h4>   
                </div>
                
            </div>   
        </>
    )
}