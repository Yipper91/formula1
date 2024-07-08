import Ticker from './Ticker';

import f1Logo from './assets/img/icons/formula1-logo.png'; 
import fbIcon from './assets/img/icons/facebook-icon.png';
import igIcon from './assets/img/icons/instagram-icon.png';
import xIcon from './assets/img/icons/x-icon.png';


export default function Nav() {
    return (
        <nav>
            <Ticker/>
            <section className="nav-animation">
                <div className="stripe1"></div>
                <div className="stripe2"></div>
                <div className="stripe3"></div>
            </section>
            <section className="nav-wrap">
                <section className="left">
                    <a href="" className="logo-wrap">
                        <img src={f1Logo} alt="Formula 1 Logo" />
                    </a>
                </section>
                <section className="center">
                    <a href="" className="link-wrap">Latest</a>
                    <a href="" className="link-wrap">Schedule</a>
                    <a href="" className="link-wrap">Standings</a>
                    <a href="" className="link-wrap">Teams</a>
                </section>
                <section className="right">
                    <a href="" className="icon-wrap">
                        <img src={xIcon} alt="X icon" />
                    </a>
                    <a href="" className="icon-wrap">
                        <img src={igIcon} alt="Instagram icon" />
                    </a>
                    <a href="" className="icon-wrap">
                        <img src={fbIcon} alt="Facebook icon" />
                    </a>
                </section>
            </section>
        </nav>
    )
}