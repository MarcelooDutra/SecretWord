import './Game.css'

const Game = ({verificarCartas, palavrasWord, categoriaWord, letraWord, letrasAdvinhadas, letrasErradas, tentativas, pontos}) => {
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
            <form>
                <input type="text" name='letras' maxLength="1" required />
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