import React from 'react';
import "./footer.css"

const Footer = () => {
  
    return (
        <footer className="fooTer">
            <div className="social">
                <h1>You can find us at</h1>
                <ul>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>youtube</li>
                    <li>Gmail</li>
                </ul>
            </div>
            <hr style={{color:"white",width:"60%",marginLeft:'20%'}}/>
            <small style={{textAlign:"center",marginLeft:'43%'}}>&copy; Copyright {new Date().getFullYear()}, Example Corporation</small> 
        </footer>
    )
}

export default Footer
