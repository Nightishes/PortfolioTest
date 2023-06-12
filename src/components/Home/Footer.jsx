import Github from './assets/images/cat-github.webp'
import Linkedin from './assets/images/linkedin.webp'
import Email from './assets/images/email.webp' 
import './assets/footer.css'

function Footer() {
    return (
        <>
        <footer>
        <section className='footer-display' id='contact'>
            <h2>Me contacter :</h2>
            <a href='mailto:q.bathany@gmail.com'><img id='email-icon' alt='My email' src={Email}></img></a>
            <a href='https://github.com/Nightishes' target='_blank' rel="noreferrer noopener"><img id='github-icon' alt='My Github' src={Github}></img></a>
            <img id='linkedin-icon' alt='My Linkedin' src={Linkedin}></img>
        </section>
        </footer>
        </>
    );
  }
  
//   Vercel?
  export default Footer;