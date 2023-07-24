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
                <p>J'ai été introduit très jeune au monde de l'informatique à travers les jeux vidéos, puis à travers d'un livre sur la programmation en C. J'ai ensuite passé la majeure partie de mon enfance à alterner entre ma passion pour les jeux-vidéos & ma passion pour apprendre à mieux comprendre le monde autour de moi, et plus particulièrement tout ce qui concerne la programmation. Aujourd'hui, cette passion devient une réalité.</p> 
                <div>
                    <h3>Outils que j'ai déjà manipulé:</h3>
                    <Table/>
                    <a href='https://miro.com/app/board/uXjVM_6w1tY=/?share_link_id=916324835277'><h3 id='competence-link'>Mes compétences</h3></a>
                </div> 
            </div>
        </section>
        <section className='summary-project' id='projects'>
            <h2>Mes projets</h2>
            <Project/>
        </section>
        </main>
        </>
    );
  }
  
  export default Mainpage;