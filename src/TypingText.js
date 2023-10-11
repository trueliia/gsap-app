import { gsap } from 'gsap';
import './App.css';
import { useLayoutEffect, useRef } from "react";


function TypingText({text}) {
 const textRef = useRef(null);
 useLayoutEffect(() => {
  const text = textRef.current;
  const letters = text.textContent.split('');
  text.textContent ='';
  letters.forEach((letter, index) =>{
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.opacity = '0';
    text.appendChild(span);

    gsap.to(span, {
      opacity: 1,
      duration: 1,
      delay: index * 0.05,
    });
  });
 }, [text]);
 return(
  <div>
    <p ref={textRef}>{text}</p>
  </div>
 )
}


export default TypingText;
