import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css"
import {Lusitana , BIZ_UDMincho} from "next/font/google";

const LusitanaFont = Lusitana({ weight: "400" , subsets: ['latin']});
const BIZ_UDMinchoFont =BIZ_UDMincho({ weight: "400" , subsets: ['latin']});

const movie = () =>{
  return (
    <>
      <head>
        <title>Portfolio/Work-そして彼女は青に散る</title>
      </head>

    <body>
      <header className={`${styles.worksHeader} ${LusitanaFont.className}`}>
        <Link className={styles.headerLink} href="http://localhost:3000/">Top</Link>
      </header>
    <section className={styles.worksWrapper}>
        <h1 className={`${styles.workPageTitle} ${BIZ_UDMinchoFont.className}`}>そして彼女は青に散る</h1>
        <div className={styles.letters}>
          <p className={LusitanaFont.className}>March,2023</p>
          <p className={LusitanaFont.className}>Movie</p>
        </div>
        <div className={styles.workPhoto}>
        <Image src="/images/ao1.jpg" width="750" height="450"/>
        <div>
        <Image src="/images/ao2.jpg" className={styles.workPhotoMin1} width="300" height="200"/>
        <Image src="/images/ao3.jpg" width="300" height="200"/>
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

export default movie;