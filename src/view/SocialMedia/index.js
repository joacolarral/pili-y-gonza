import React from 'react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Ribbon from '../../components/Ribbon';
import styles from './SocialMedia.module.scss';
import Instagram from '../../icons/instagram';
import DecorativeTop from '../../icons/decorativeTop';

export default function SocialMedia() {
  const goToInstagram = () =>
    window.open(
      'https://www.instagram.com/piliygonza?igshid=YzVkODRmOTdmMw%3D%3D&utm_source=qr',
      '_blank'
    );

  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div className={styles.header}>
          <DecorativeTop />
          <div>
            <h1>¡Vivamos juntos este día tan especial!</h1>
            <h2>
              Compartí tus fotos y vídeos de este día directamente en Instagram
              y no olvides etiquetarnos para celebrar juntos.
            </h2>
          </div>
        </div>
        <Instagram />
        <Ribbon>
          <a href="https://www.instagram.com/piliygonza?igshid=YzVkODRmOTdmMw%3D%3D&utm_source=qr">
            @piliygonza
          </a>
        </Ribbon>
        <Button onClick={goToInstagram}>Ver en Instagram</Button>
      </div>
    </Section>
  );
}
