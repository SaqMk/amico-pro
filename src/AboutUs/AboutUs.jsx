import React from "react";
import styles from "../AboutUs/aboutUs.module.scss";
import Carousel from "../Carousel/Carousel";
export default function AboutUs({aboutus}) {
  return (
    <>
      <div className={styles.container} id={aboutus}>
        <p>Մեր մասին</p>
        <div className={styles.wrapper}>
          <p className={styles.content}>
            Նոր զգացողություննե՞ր ես փնտրում Amico-ն հենց այն է, ինչ քեզ
            հարկավոր է 🤗 Համեցե՛ք Սևանի ամենագեղեցիկ Amico ժամանցային գոտի
            անցկացնելու ամառվա գեղեցիկ օրերը ☀️🌿Լավ երաժշտություն🎙, համեղ
            ճաշացանկ🍽,ջերմ մթնոլորտ և ուրախ տրամադրություն☺️💚Մեզ մոտ առկա են
            բոլոր պայմանները ընտանիքով կամ ընկերներով հիանալի ժամանակ
            անցկացնելու համար 🥰 Սիրով սպասում ենք բոլորին 😊
          </p>
          <Carousel />
        </div>
      </div>
    </>
  );
}
