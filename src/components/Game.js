import './Game.css'

const Game = ({verificarCartas}) => {
  return (
    <div className='game'>
       <p className='pontos'>
            <span>Pontuação: 000</span>
       </p>
       <h1>Advinhe a palavra:</h1>
        <h3 className='dica'>
            Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <div className='container'>
            <span className='letra'>A</span>
            <span className='quadroBranco'></span>
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
            <span>a, </span>
            <span>b, </span>
        </div>
    </div>
  )
}

export default Game