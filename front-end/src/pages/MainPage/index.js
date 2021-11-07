import React, {useEffect} from "react";
import {Animate} from 'react-simple-animate';
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "../../components/header/index";
import Footer from "../../components/footer/index"
import Faq from 'react-faq-component';
import ReactTooltip from 'react-tooltip';

export default function MainPage() {

  const faqData = {
    rows: [
      {
        title: "When is the mint? What's the price?",
        content: "As mentioned above, the drop date is November 8th (follow our social media for exact time). Mint price is 1 SOL but we recommend having at least 1.02 SOL in your wallet because of comission fees."
      },
      {
        title: "How can I buy a SolanaWitch?",
        content: "The witches are to be purchased on the mint page, which will be acessible through the 'Mint' button on the main screen. You will need to connect your wallet (Phantom or Sollet), press the Mint button and wait for the SolanaWitch to arrive! In order to mint a SolanaWitch, you need to have at least 1.02 SOL in your wallet. "
      },
      {
        title: "Do you have a rarity chart?",
        content: "Yes, and you will be able to check the rarity of your SolanaWitch on this website after the mint."
      },
      {
        title: "Will there be a secondary market?",
        content: "Of course! We are currently negotiating with Solanart, DigitalEyes and MagicEden."
      },
      {
        title: "Can I mint on my phone?",
        content: "Yes, but only with the Sollet wallet. Phantom is only available on desktop."
      },
      {
        title: "Is there a limit of SolanaWitches per wallet?",
        content: "No, but you can only mint 1 SolanaWitch per transaction."
      },
      {
        title: "Do I own the SolanaWitch after minting?",
        content: "Absolutely! Full intellectual properties are given to the buyer."
      }]
  }

  const faqStyles = {
    bgColor: 'transparent',
    titleTextColor: 'white',
    titleTextSize: '62px',
    rowTitleColor: '#fff',
    rowContentColor: '#fff',
    rowTitleTextSize: '42px',
    rowContentTextSize: '32px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    arrowColor: "white",
    transitionDuration: ".5s",
  };

  useEffect(()=>{
    AOS.init({
      // duration : 5000
    });
  });


  return (
    <>
      <main className="fsc-container-wrapper" style={{backgroundImage:"url('/images/main-background.jpg')"}}>
        <div className="fsc-container">
          <Header/>
          <Animate
            play={true}
            delay={0.3}
            duration={.5}
            start={{ opacity: 0, filter: 'blur(10px)' }}
            end={{ opacity: 1, filter: 'blur(0)' }}
          >
            <main className="hero-content">
              <h1 className="hero-title">Welcome to SolanaWitches!</h1>
              <button data-for="hero-tooltip" data-tip="Will be available on November 8th!" className="hero-link">Mint a SolanaWitch</button>
            </main>
          </Animate>
          <ReactTooltip type="light" id="hero-tooltip"/>
          <div className="hero-footer">
            <img src="/images/icons/scroll.png" alt="scroll icon" className="hero-footer-scroll"/>
            <hr className="hero-footer-line"/>
          </div>
        </div>
      </main>
    <div className="bg-container" id="bg-container" style={{backgroundImage:"url('/images/website-background.png')"}}>
      <div className="max-width-container" id="main-page-wrapper">
          <section data-aos="fade-up-right" className="welcome-section">
            <div className="anchor-tag" id="about"></div>
            <div className="welcome" style={{backgroundImage:"url(/images/welcome-background.png)"}}>
              <div className="welcome-text-block">
                <h4 className="welcome-title">WELCOME!</h4>
                <p className="welcome-text">Our goal is quite simple - create a unique collection, never seen before on the Solana blockchain. 
                  <br/><br/>
                  Each SolanaWitch NFT is unique, with the collection consisting of 666 sorcresses with randomly generated features such as hats, outfits, accessories, chokers, wings and so on.
                  <br/>
                  Please enjoy your stay at the SolanaWitches website.
                </p>
              </div>
            </div>
          </section>
          <section data-aos="fade-up-left" className="showcase-section">
            <div className="anchor-tag" id="showcase"></div>
            <div className="showcase-text-wrapper">
              <p className="showcase-text">666 Unique Pre-Minted talanted witches</p>
              <p className="showcase-text"><br/>Mint Price: 1 Sol<br/><br/>Mint date: 8th of November</p>
            </div>
            <div className="showcase-image" style={{backgroundImage: "url('/images/showcase.gif')"}}></div>
          </section>
        <section data-aos="fade-up-right" className="roadmap-section" style={{backgroundImage: "url(/images/roadmap-background.png)"}}>
          <div className="anchor-tag" id="roadmap"></div>
          <img src="/images/witch-cauldron.gif" alt="witch gif" className="roadmap-witch-gif"/>
          <div className="roadmap-text-wrapper">
            <h1 className="roadmap-title">Roadmap</h1>
            <p className="roadmap-text">The SolanaWitches team is planning a heck of a lot for our community. That includes royalty sharing, unique NFT drops for holders and much much more. We want to emphasize that SolanaWitches is no ordinary collection that closes after the first drop. We have different targets, some of which you can see in our roadmap below.</p>
            <a href="https://trello.com/b/qMLTYUfb/roadmap" target="_blank" className="hero-link">Visit our roadmap</a>
          </div>
        </section>
        <section data-aos="fade-up-left" className="rarity-section">
          <div className="anchor-tag" id="rarity"></div>
          <img src="/images/nfts/666.png" alt="solwitch" className="rarity-nft"/>
          <div className="rarity-content-wrapper">
            <h4 className="rarity-title">rarity chart</h4>
            <ReactTooltip type="light" id="rarity-tooltip"/>
            <div data-for="rarity-tooltip" data-multiline="true" data-tip="Rarity will be available<br/>after mint!" className="rarity-input-wrapper">
              <input type="text" className="rarity-input" value="#666" disabled/>
            </div>
            <div className="rarity-text-wrapper">
              <p className="rarity-text">
                Background: web turquoise (4%)<br/>
                Wings: none (80%)<br/>
                Shirt: black and white, cat buttons (3%)<br/>
                Skin: pink (60%)<br/>
                Mouth: half smiley (50%)<br/>
                Nose: small (50%)<br/>
                Eyelid: yellow (10%)<br/>
              </p>
              <p className="rarity-text">
                Eyes: pink (12%)<br/>
                Choker: spikey purple (10%)<br/>
                Hair: bob blue (6%)<br/>
                Cheeks: 666 (20%)<br/>
                Hat: pink with skulls (10%)<br/>
                Tatoos: none (80%)<br/>
                Glasses: none (60%)<br/>
              </p>
            </div>  
          </div>
        </section>
        <section data-aos="fade-up-right" className="faq-section">
          <div className="anchor-tag" id="faq"></div>
          <h2 className="faq-title">faq's</h2>
          <Faq data={faqData} styles={faqStyles}/>
        </section>
        <section data-aos="fade-up-left" className="team-section">
          <h2 className="team-title">team</h2>
          <div className="team-block-wrapper">
            <div className="team-block">
              <img src="/images/nfts/alexundr.png" alt="solwitch" className="team-image" />
              <span className="team-name">@alexundr</span>
            </div>
            <div className="team-block">
              <img src="/images/nfts/DeriL.png" alt="solwitch" className="team-image" />
              <span className="team-name">@DeriL</span>
            </div>
            <div className="team-block">
              <img src="/images/nfts/cutg.png" alt="solwitch" className="team-image" />
              <span className="team-name">@cutg</span>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
    </>
    )
}
