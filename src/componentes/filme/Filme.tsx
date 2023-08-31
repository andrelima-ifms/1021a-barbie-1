//Como importar uma imagem em REACT
import Imagem from "./../../assets/barbie.png"
import './Filme.css'
function Filme(){
    return(
        <div className="filme-content">
            {/* O comentário dentro do JSX é desse formato */}
            {/* Dentro das chaves você pode utilizar java script */}
            {/* Por isso podemos importar o "Imagem" dentro do componente IMG */}
            {/* Não vou competir com vocês conversando! */}
            {/* Se não apareceu a imagem é provavel que você não tenha a imagem na pasta assets */}
            {/* Pode ser no componente, mas o caminho deve estar correto. */}
            {/* Imagem está no meu git (Não) */}
            <img className="img-filme" src={Imagem} alt="" />
            <div className="text-barbie">
                <h1>Barbie</h1>
                <p className="sinopse">Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.</p>
            </div>
        </div>
    )
}
export default Filme