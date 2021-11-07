import "./index.css"
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { useState } from "react";

export default function Header () {
  const [burgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <header className="header">
      <a className="logo-wrapper" href="/">
        <img src="/images/logo.png" alt="logo" className="logo-img"/>
        <h4 className="logo-text">SolanaWitches</h4>
      </a>
      <div className="header-links">
        <NavHashLink to="/#about" className="header-link">About</NavHashLink>
        <NavHashLink to="/#showcase" className="header-link">Showcase</NavHashLink>
        <NavHashLink to="/#roadmap" className="header-link">Roadmap</NavHashLink>
        <NavHashLink to="/#rarity" className="header-link">Rarity</NavHashLink>
        <NavHashLink to="/#faq" className="header-link">FAQ</NavHashLink>
      </div>
      <div className="burger-wrapper">
        <div className="burger" onClick={()=>{burgerOpen ? setIsBurgerOpen(false) : setIsBurgerOpen(true)}}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div className={"header-links-adaptive " + (burgerOpen ? "header-links-active" : "")}>
          <NavHashLink to="/#about" className="header-link">About</NavHashLink>
          <NavHashLink to="/#showcase" className="header-link">Showcase</NavHashLink>
          <NavHashLink to="/#roadmap" className="header-link">Roadmap</NavHashLink>
          <NavHashLink to="/#rarity" className="header-link">Rarity</NavHashLink>
          <NavHashLink to="/#faq" className="header-link">FAQ</NavHashLink>
      </div>
      </div>
    </header>
  )
}
