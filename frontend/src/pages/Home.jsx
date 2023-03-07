import React from "react";
import "tw-elements";

import SliderPresta from "@components/SliderPresta"
import Background from "@assets/bg_feu.jpeg";
import Zone from "@assets/zone.jpg";

export default function Home() {
  return (
    <div className="home">
      <img src={Background} alt="feu de cheminée" className="w-full" />
      <div className="presentation">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
          quidem ducimus? Numquam, ipsum. Debitis temporibus ipsam natus
          excepturi facere delectus alias, totam ducimus modi, aperiam quis quod
          recusandae perferendis veniam! Aliquid excepturi, quaerat error
          cupiditate accusamus obcaecati delectus rerum earum sunt odio beatae.
          Delectus deleniti sunt voluptatem laborum, vitae voluptatibus!
        </p>
      </div>
      <div className="prestations">
        <h1 className="text-center">NOS PRESTATIONS</h1>
        <p>Conduits de fumées</p>
        <p>Chaudières</p>
        <p>Cheminées à foyer</p>
        <p>Poêle en faience</p>
        <p>Contrôle d'étanchéité</p>
        <p>Vidéoscopie des conduits</p>
        <p>Ventilation mécanique contrôlée (VMC)</p>
        <p>Débistrage des conduits de fumée</p>
      </div>
      <div>
        <SliderPresta />
      </div>
      <div className="zone">
        <h1 className="text-center">NOTRE ZONE D'INTERVENTION</h1>
        <img src={Zone} alt="carte zone intervention" className="w-full" />
      </div>
      <div className="references">
        <h1 className="text-center">NOS REFERENCES</h1>
      </div>
      <div className="certifications">
        <h1 className="text-center">NOS CERTICATIONS</h1>
      </div>
    </div>
  );
}
