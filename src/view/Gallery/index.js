import React from "react";
import Section from "../../components/Section";
import styles from "./Gallery.module.scss";
import CardImage from "../../components/CardImage";
import photo1 from "../../images/carousel/1.jpeg";
import photo2 from "../../images/carousel/2.jpeg";
import photo3 from "../../images/carousel/3.jpeg";
import photo4 from "../../images/carousel/4.jpeg";
import photo5 from "../../images/carousel/5.jpeg";
import photo7 from "../../images/carousel/7.jpeg";
import photo8 from "../../images/carousel/8.jpeg";
import Camera from "../../icons/camera";
import Carousel from "../../components/Carousel";

const photos = [photo1, photo2, photo3, photo4, photo5, photo7, photo8];

export default function Gallery() {
  const swipeables = photos.map((photo, i) => (
    <CardImage key={i} imageUrl={photo} />
  ));
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Camera />
          <h1>Nosotros</h1>
          <h2>Un minuto, un segundo, un instante que queda en la eternidad</h2>
        </div>
        {/* <div className={styles.singlePhoto}>
          <CardImage imageUrl={photo2} />
        </div> */}
        <div className={styles.carousel}>
          <Carousel swipeables={swipeables} />
        </div>
      </div>
    </Section>
  );
}
