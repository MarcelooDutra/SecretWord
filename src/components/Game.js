import { useRef, useState } from 'react'
import './Game.css'

const Game = ({verificarLetras, palavrasWord, categoriaWord, letraWord, letrasAdvinhadas, letrasErradas, tentativas, pontos}) => {

    //cria-se um state para atrelar a letra no input.
    const [letra, setLetra] = useState("")

    //cria-se uma função para que utilizemos o state no form.
    const handleSubmit = (e) => {
        e.preventDefault()

        verificarLetras(letra)

        //para apagar a letra
        setLetra("")

        //para focar no input
        letraInputRef.current.focus()
    }

    //hoks de referencia para o input
    const letraInputRef = useRef(null)

  return (
    <div className='game'>
       <p className='pontos'>
            <span>Pontuação: {pontos}</span>
       </p>
       <h1>Advinhe a palavra:</h1>
        <h3 className='dica'>
            Dica sobre a palavra: <span>{categoriaWord}</span>
        </h3>
        <p>Você ainda tem {tentativas} tentativa(s).</p>
        <div className='container'>
           {letraWord.map((letra, i) => (
            letrasAdvinhadas.includes(letra) ? (
                <span key={i} className='letra'>{letra}</span>
            ) : (
                <span key={i} className="quadroBranco"></span>
            )
           ))}
        </div>
        <div className='letrasContainer'>
            <p>Tente advinhar uma letra da palavra</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='letras' maxLength="1" required onChange={(e) => setLetra(e.target.value)} value={letra} ref={letraInputRef}/>
                <button>Jogar!</button>
            </form>
        </div>
        <div className='letrasJaUtilizadas'>
            <p>Letras já utilizadas</p>
            {letrasErradas.map((letra, i) => (
                <span key={i}>{letra}, </span>
            ))}
        </div>
    </div>
  )
}

export default Game