import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css"
import {Lusitana , BIZ_UDMincho} from "next/font/google";

const LusitanaFont = Lusitana({ weight: "400" , subsets: ['latin']});
const BIZ_UDMinchoFont =BIZ_UDMincho({ weight: "400" , subsets: ['latin']});

const Omote = () =>{
  return (
    <>
      <head>
        <title>Portfolio/Work-面の裏</title>
      </head>

    <body>
      <header className={`${styles.worksHeader} ${LusitanaFont.className}`}>
        <Link className={styles.headerLink} href="http://localhost:3000/">Top</Link>
      </header>
    <section className={styles.worksWrapper}>
        <h1 className={`${styles.workPageTitle} ${BIZ_UDMinchoFont.className}`}>面の裏</h1>
        <div className={styles.letters}>
          <p className={LusitanaFont.className}>March,2022</p>
          <p className={LusitanaFont.className}>Installation art</p>
        </div>
        <div className={styles.workPhoto}>
        <Image src="/images/omote3.jpg" width="750" height="450"/>
        <div>
        <Image src="/images/omote1.jpg" className={styles.workPhotoMin1} width="300" height="200"/>
        <Image src="/images/omote2.jpg" width="300" height="200"/>
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

export default Omote;