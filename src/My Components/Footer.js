import React from 'react'
import '../cus.css'

export const Footer = () => {
  let footerStyle = {
    position: "relative",  
    width: "100%",
    padding: "0.3rem"   
  }

  const brandStyle = {
    color: "#1de456ff",
    fontWeight: "900",  // Increased from bold to 800
    textShadow: "0 0 10px rgba(255,169,77,0.5)",  // Increased shadow opacity
    letterSpacing: "0.5px"  // Added letter spacing for better readability
  }

  return (
    <div className="container">
      <p className="text-center mb-0 footer-text" 
         style={{ 
           fontSize: "1rem",  // Increased from 0.9rem
           fontWeight: "600",  // Made regular text semi-bold
           color: "#ffffff",   // Pure white color
           textShadow: "1px 1px 2px rgba(0,0,0,0.8)"  // Added text shadow for contrast
         }}>
        Copyright &copy; {new Date().getFullYear()} <span style={brandStyle}>MyTodoList.com</span>
      </p>
    </div>
  )
}