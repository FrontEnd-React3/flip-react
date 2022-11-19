import './App.css';
import { useState, useEffect } from "react";
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import Cardscomponent from './cardscomponent';

gsap.registerPlugin(Flip);


function App() {
  const linkstest = document.querySelectorAll(".nav-item");
  const links = document.querySelectorAll(".nav-item a");
  const activeNav = document.querySelector(".active-nav");
  console.log("l" + links.length);
  console.log("lt" + linkstest.length);

  useEffect(() => {
    links.forEach(link => {
      link.addEventListener("click", () => {
        gsap.to(links, { color: "#252525" })
        if (document.activeElement === link) {
          gsap.to(link, { color: "#385ae0" });
        }
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
          duration: 0.5,
          absolute: true,
          ease: "elastic.out(1,0.5)",
        })
      });
    });

  }, []); // <- add empty brackets here

  return (
    <div className="App">
      <div className="body">
        <nav>
          <ul className="nav-links">
            <div className="nav-item">
              <li><a href="#">Our Story</a></li>
              <div className="active-nav"></div>
            </div>

            <div className="nav-item">
              <li><a href="#">Projects</a></li>
            </div>

            <div className="nav-item">
              <li><a href="#">Contact</a></li>
            </div>
          </ul>
        </nav>
        <Cardscomponent />


      </div>

    </div>
  );
}

export default App;
