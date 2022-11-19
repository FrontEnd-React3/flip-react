import React from 'react'
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const cards = document.querySelectorAll(".card");

function Cardscomponent(props) {

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const state = Flip.getState(cards);
      const isCardActive = card.classList.contains("active");
      cards.forEach((otherCard, otherIdx) => {
        otherCard.classList.remove("active");
        otherCard.classList.remove("is-inactive");
        if (!isCardActive && index !== otherIdx) {
          otherCard.classList.add("is-inactive")
        }
      })
      if (!isCardActive) card.classList.add("active");
      Flip.from(state, {
        duration: 4,
        absolute: true,
        ease: "elastic.out(1,0.5)"
      });
    });
  });
  return (
    <section>
      <div className="card">
        <h1>awesome Meal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consectetur dolores voluptate aliquid
          exercitationem nostrum iusto at sit architecto modi ipsum animi perspiciatis minima reiciendis omnis eaque rem
          aspernatur error?
        </p>
      </div>
      <div className="card">
        <h1>awesome Sauce</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consectetur dolores voluptate aliquid
          exercitationem nostrum iusto at sit architecto modi ipsum animi perspiciatis minima reiciendis omnis eaque rem
          aspernatur error?
        </p>
      </div>
      <div className="card">
        <h1>awesome Sausage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consectetur dolores voluptate aliquid
          exercitationem nostrum iusto at sit architecto modi ipsum animi perspiciatis minima reiciendis omnis eaque rem
          aspernatur error?
        </p>
      </div>
      <div className="card">
        <h1>awesome tree</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consectetur dolores voluptate aliquid
          exercitationem nostrum iusto at sit architecto modi ipsum animi perspiciatis minima reiciendis omnis eaque rem
          aspernatur error?
        </p>
      </div>
    </section>

  )
}
export default Cardscomponent