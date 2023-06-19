import './assets/mainpage.css'
import Placeholder from  './assets/images/placeholder_picture.jpg'
import Project from './Project';
import Table from './Table';



function Mainpage() {
    return (
        <>
        <main>
        <section className='first-look'>
            <h1>Bonjour, je suis Quentin, <br /> je suis développeur Web</h1>
            <div className='buttons-first-look'>
                <a href='#summary'>
                    <button>
                        Présentation
                    </button>
                </a>
                <a href='#projects'>
                    <button>
                        Derniers projects
                    </button>
                </a>
            </div>
        </section>
        <section className='summary-myself' id='summary'>
            <div className='summary-picture'>
                <img alt='Placeholder' src={Placeholder}></img>
                {/* <h3><a href='#'>Mon CV</a></h3> */}
            </div>
            <div className='summary-text'>
                <h2>A propos de moi</h2>
                <p>Féru de nouvelles technologies, je cherche toujours à mieux comprendre le monde qui nous entoure. Je passe mon temps à lire ou écouter ce qui m'entoure ainsi que de tester des nouvelles recettes.</p> 
                <div>
                    <p>Outils utilisés:</p>
                    <Table/>
                    <a href='https://miro.com/app/board/uXjVM_6w1tY=/'><p>Mes compétences</p></a>
                </div> 
            </div>
        </section>
        <section className='summary-project' id='projects'>
            <h2>Mes projets</h2>
            <Project/>
        </section>
        {/* aws, hostinger, ovh layout-react, nom de domaine/hebergement  */}
        </main>
        </>
    );
  }
  
  export default Mainpage;