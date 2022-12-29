import './GameOver.css'

const GameOver = ({resetarJogo, pontos}) => {
  return (
    <div>
        <h1>Fim de jogo!</h1>
        <h2>A sua pontuação foi: <span>{pontos}</span></h2>
        <button onClick={resetarJogo}>Recomeçar</button>
    </div>
  )
}

export default GameOver