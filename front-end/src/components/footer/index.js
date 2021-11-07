import "./index.css"

export default function Footer () {
    return(
        <footer className="footer">
            <img src="/images/logo.png" alt="logo" className="footer-logo"/>
            <span className="footer-text">With love, from SolanaWitches<br/>All Rights Reserved 2021</span>
            <div className="footer-social-wrapper">
                <a href="https://discord.gg/zN5D8q5QuG" target="_blank" className="footer-social-link">
                    <img src="/images/discord-logo.png" alt="discord logo" className="footer-social-img"/>
                </a>
                <a href="https://twitter.com/SolanaWitches" target="_blank" className="footer-social-link">
                    <img src="/images/twitter-logo.png" alt="twitter logo" className="footer-social-img"/>
                </a>
            </div>
        </footer>
    )
}