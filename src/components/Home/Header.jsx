import './assets/header.css'
import MenuIcon from './assets/images/menu-bar.webp'
import { useState } from 'react';

function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return (
        <>
        <header className='display-header'>
        <a href='/'><FontAwesomeIcon icon="fa-regular fa-house" /></a>
            <nav>
                <button className='menu-icon-button'>
                    <img src={MenuIcon} alt="" className='menu-icon' onClick={() => { setIsNavExpanded(!isNavExpanded)}}/>
                </button>
                <div className={isNavExpanded ? "box-nav.expanded" : "box-nav-hidden" }>
                <ul className={"display-nav"}>
                    <li><a href='#summary'>Ma présentation</a></li>
                    <li><a href='#projects'>Mes projets réalisés</a></li>
                    <li><a href='#contact'>Me contacter</a></li>
                    {/* <button id='button-switch-language'>Switch to EN / FR</button> */}
                </ul>
                </div>
               
            </nav>
        </header>
        </>
    );
  }
  
  export default Header;