import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Gaille.png'
          alt='An image showing Gaille'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Gaille</h1>
      <p>
        I blog about software engineering in general - especially with full-stack development
        and AI.
      </p>
    </section>
  );
}

export default Hero;