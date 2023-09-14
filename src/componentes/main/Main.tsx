import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Barbie',
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            id:2,
            titulo:'Filme Barbie',
            sinopse:'Depois de ser expulsa da Barbieland por ser.',
            imagem:'/KEN.png'
        },
        {
            id:3,
            titulo:'Filme a muié do chucky',
            sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie se torna uma boneca anã e matadora de KENS, e se casa com Chucky',
            imagem:'/terror.jpg'
        },

        {
            id:4,
            titulo:'Rubber o pineu assassino',
            sinopse:'Um pineu do carro da Barbie se revolta e busca vingança',
            imagem:'/pineu.jpg'
        }
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um filme</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                {
                    <main className="content-main">
 
 
  {filmes.map((filme) => (
    <div className="filme" key={filme.id}>
                <img src={filme.imagem} alt={filme.titulo} />
                <h2>{filme.titulo}</h2>
                <p>{filme.sinopse}</p>
</div>
))}
</main>

                }


                
                {/* <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser.'
                    imagem='/KEN.png'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                /> */}

            </main>
        </>
    )
}