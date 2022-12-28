import './GameOver.css'

const GameOver = ({resetarJogo}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={resetarJogo}>Recomeçar</button>
    </div>
  )
}

export default GameOver