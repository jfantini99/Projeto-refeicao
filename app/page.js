

import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '@/components/images/images-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Prove e compartilhe comida de todo o mundo..</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Junte-se à comunidade</Link>
            <Link href="/meals"> Explorar refeições</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Como funciona</h2>
          <p>
          NextLevel Food é uma plataforma para os gourmets compartilharem seus favoritos
            receitas com o mundo. É um lugar para descobrir novos pratos e
            conecte-se com outros amantes da comida.

          </p>
          <p>
          NextLevel Food é um lugar para descobrir novos pratos e se conectar
          com outros amantes da comida.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Por que NextLevel Food?</h2>
          <p>
          NextLevel Food é uma plataforma para os gourmets compartilharem seus favoritos
            receitas com o mundo. É um lugar para descobrir novos pratos e
            conecte-se com outros amantes da comida.
          </p>
          <p>
          NextLevel Food é um lugar para descobrir novos pratos e se conectar
          com outros amantes da comida.
          </p>
        </section>
      </main>
    </>
  );
}
