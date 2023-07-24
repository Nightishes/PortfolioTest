import "./Assets/error.css"

export default function Error(){
    return(
        <main>
            <div className="div-error">
                <h1>Cette page n'existe pas</h1>
                <a href="/">Retour vers la page principale</a>
            </div>  
        </main>
    )
}