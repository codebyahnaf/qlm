import { useRef, useEffect } from "react";

export default function ContactForm(){

    const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(0, 0); // move caret to top
      textareaRef.current.focus();
    }
  }, []);
    return(
        <>
        <div className="contact-title">
            <h1>Feel free to email us</h1>
        </div>
            <section className="contact-form">
                <form>
                    <div className="input-box">
                        <input type="text" className="field" placeholder="Enter your name" required spellCheck="false" />
                    </div>
                    <br />
                    <div className="input-box">
                        <input type="text" className="field" placeholder="Enter your email" required spellCheck="false" />
                    </div>
                    <br />
                    <div className="input-box">
                        <textarea id="message" className="field" placeholder="Tell us your concerns" required spellCheck="true" />
                    </div>

                </form>
            </section>
        
        </>
    )
}