import React from "react";
import "tw-elements";

import SliderPresta from "@components/SliderPresta";
import Background from "@assets/bg_feu.jpeg";
import Zone from "@assets/zone.jpg";
import Cheminee from "@assets/cheminee.jpg";
import Conduit from "@assets/conduit.jpg";
import Debistrage from "@assets/debistrage.jpeg";
import Fumigene from "@assets/fumigene.jpg";
import Poele from "@assets/poele.jpg";
import Videoscopie from "@assets/videoscopie.jpg";
import Vmc from "@assets/vmc.jpg";
import Chaudiere from "@assets/chaudiere.jpg";

export default function Home() {
  return (
    <div className="home">
      <img src={Background} alt="feu de cheminée" className="w-full h-96" />
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
      <div className="prestations w-full">
        <h1 className="text-center">NOS PRESTATIONS</h1>
        <div className="hidden lg:inline-block w-full h-full">
          <div className="flex mt-5 mb-10 h-full">
            <div className="w-4/12 h-full">
              <div className="conduits w-full">
                <p className="text-center">Conduits de fumées</p>
                <img src={Conduit} alt="" className="w-full" />
              </div>
              <div className="chaudiere w-full h-full">
                <p className="text-center">Chaudières</p>
                <img src={Chaudiere} alt="" className="h-full" />
              </div>
            </div>
            <div className="cheminee w-4/6">
              <p className="text-center">Cheminées à foyer</p>
              <img src={Cheminee} alt="" className="h-full" />
            </div>
          </div>
          <div className="flex">
            <div className="poele w-6/12">
              <p className="text-center">Poêle en faience</p>
              <img src={Poele} alt="" />
            </div>
            <div className="fumigene w-6/12">
              <p className="text-center">Contrôle d'étanchéité</p>
              <img src={Fumigene} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="vmc w-4/6">
              <p className="text-center">
                Ventilation mécanique contrôlée (VMC)
              </p>
              <img src={Vmc} alt="" />
            </div>
            <div>
              <div className="videoscopie">
                <p className="text-center">Vidéoscopie des conduits</p>
                <img src={Videoscopie} alt="" className="w-full" />
              </div>
              <div className="debistrage">
                <p className="text-center">Débistrage des conduits de fumée</p>
                <img src={Debistrage} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <SliderPresta />
        </div>
      </div>
      <div className="zone">
        <h1 className="text-center">NOTRE ZONE D'INTERVENTION</h1>
        <img
          src={Zone}
          alt="carte zone intervention"
          className="w-full h-screen"
        />
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
