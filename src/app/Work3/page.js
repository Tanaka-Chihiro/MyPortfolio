import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css"
import {Lusitana , BIZ_UDMincho} from "next/font/google";

const LusitanaFont = Lusitana({ weight: "400" , subsets: ['latin']});
const BIZ_UDMinchoFont =BIZ_UDMincho({ weight: "400" , subsets: ['latin']});

const Sakura = () =>{
  return (
    <>
      <head>
        <title>Portfolio/Work-Cherry-blossom 2024</title>
      </head>

    <body>
      <header className={`${styles.worksHeader} ${LusitanaFont.className}`}>
        <Link className={styles.headerLink} href="http://localhost:3000/">Top</Link>
      </header>
    <section className={styles.worksWrapper}>
        <h1 className={`${styles.workPageTitle} ${LusitanaFont.className}`}>Cherry-blossom 2024</h1>
        <div className={styles.letters}>
          <p className={LusitanaFont.className}>April,2024</p>
          <p className={LusitanaFont.className}>Photograph</p>
        </div>
        <div className={styles.workPhoto}>
        <Image src="/images/sakura9.jpg" width="750" height="450"/>
        <div>
        <Image src="/images/sakura5.jpg" className={styles.workPhotoMin1} width="300" height="200"/>
        <Image src="/images/sakura7.jpg" width="300" height="200"/>
        </div>
        </div>
    </section>
    <footer className={`${styles.footer} ${LusitanaFont.className}`}>
        <p>Copyright 2024 Chihiro.T</p>
      </footer>
    </body>
    </>
  );
}

export default Sakura;