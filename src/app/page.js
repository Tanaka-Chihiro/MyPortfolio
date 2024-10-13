"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/styles.module.css"
import "./globals.css"
import React from "react";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Link as Scroll } from 'react-scroll';
import {Lusitana , BIZ_UDMincho} from "next/font/google";

const LusitanaFont = Lusitana({ weight: "400" , subsets: ['latin']});
const BIZ_UDMinchoFont =BIZ_UDMincho({ weight: "400" , subsets: ['latin']});

const schema  = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup
    .string()
    .required('必須項目です')
    .email('正しいメールアドレスを入力してください'),
    message: yup.string().required('必須項目です'),
})

const Top = () =>{

  const router = useRouter();
  const { register, handleSubmit, formState: {errors}, } = useForm ({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const respons = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if(respons.status === 200) {
      router.push("/thanks");
    } else {
      alert("正常に送信できませんでした");
    };
  }

  return (

    <>
      <head>
        <title>Portfolio/Top</title>
      </head>

    <body id="Top" className={styles.body}>
      <div className={styles.topImage}>
      <header className={LusitanaFont.className}>
        <nav>
        <ul className={styles.header}>
        <div className={styles.fixed}>
          <li className={styles.headerLink}>
          <Scroll to="Top" smooth className={LusitanaFont.className}>Top</Scroll>
          </li>
          <li className={styles.headerLink}>
            <Scroll to="Works" smooth>Works</Scroll>
          </li>
          <li className={styles.headerLink}>
            <Scroll to="Profile" smooth>Profile</Scroll>
          </li>
          <li>
            <Scroll to="LastContents" smooth>Contact</Scroll>
          </li>
          </div>
        </ul>
        </nav>
      </header>
      <section  className={`${styles.titles} ${LusitanaFont.className}`}>
          <h1 className={styles.mainTitle}>Chihiro Tanaka</h1>
          <h2 className={styles.subTitle}>Portfolio</h2>
        </section>
      </div>

      <div className={styles.wrapper}>
      <main>
        <section id="Works" className={styles.section}>
          <h3 className={`${styles.sectionTitle} ${LusitanaFont.className}`}>Works</h3>
          <div className={styles.works}>
            <Link href="/Work1">
              <p className={`${styles.worksTitle} ${BIZ_UDMinchoFont.className}`}>面の裏</p>
            </Link>
            <Link href="/Work1">
              <Image src="/images/work1.jpg" width="1100" height="330" className={styles.Image}/>
            </Link>
          </div>
          <div className={styles.works}>
            <Link href="/Work2">
              <p className={`${styles.worksTitle} ${BIZ_UDMinchoFont.className}`}>そして彼女は青に散る</p>
            </Link>
            <Link href="/Work2">
              <Image src="/images/work2.jpg" width="1100" height="330" className={styles.Image}/>
            </Link>
          </div>
          <div className={styles.works}>
            <Link href="/Work3">
              <p className={`${styles.worksTitle} ${LusitanaFont.className}`}>Cherry-blossom 2024</p>
            </Link>
            <Link href="/Work3">
              <Image src="/images/work3.jpg" width="1100" height="330" className={styles.Image}/>
            </Link>
          </div>
        </section>

        <section id="Profile" className={styles.section}>
          <h3 className={`${styles.sectionTitle} ${LusitanaFont.className}`}>Profile</h3>
          <div className={styles.plofile}>
            <Image  src="/images/profile.jpg" width={144} height={144} className={styles.borderCircle} />
            <div>
              <p className={`${styles.name} ${BIZ_UDMinchoFont.className}`}>田中　千尋</p>
              <p className={`${styles.name2} ${LusitanaFont.className}`}>Chihiro Tanaka</p>
              <p className={BIZ_UDMinchoFont.className}>鳥取県出身。
                <br />
              好きなものはコーヒー牛乳と読書。趣味は散歩と本屋巡り。</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={`${styles.sectionTitle} ${LusitanaFont.className}`}>Contact</h3>
          <form className={styles.contactForm}>
          <div>
              <label htmlFor="name" className={`${BIZ_UDMinchoFont.className}`}>お名前</label>
              <br />
              <input id="name" name="name" type="name" {...register('name')} error={'name' in errors}  helperText={errors.name?.message} className={styles.formName} />
            </div>
            <div>
              <label htmlFor="email" className={`${BIZ_UDMinchoFont.className}`}>メールアドレス</label>
              <br />
              <input id="email" name="email" type="email" {...register('email')} error={'email' in errors}  helperText={errors.email?.message} className={styles.formEmail} placeholder="@sendgrid/mail" />
            </div>
            <div>
              <label htmlFor="message" className={`${BIZ_UDMinchoFont.className}`}>問い合わせ内容</label>
              <br />
              <textarea id="message" name="message" {...register('message')} error={'message' in errors}  helperText={errors.message?.message} className={styles.formInput} rows="3"></textarea>
            </div>
            <div className={styles.button}>
              <button type="submit" onClick={handleSubmit(onSubmit)} className={`${styles.submitBTN} ${BIZ_UDMinchoFont.className}`}>送信</button>
            </div>
          </form>
        </section>
      </main>
    </div>
    <footer id="LastContents" className={`${styles.footer} ${LusitanaFont.className}`}>
        <p>Copyright 2024　Chihiro.T</p>
      </footer>
    </body>
    </>
  );
}

export default Top;