import './StartScreen.css'

const StartScreen = ({iniciar}) => {
  return (
    <div className="Start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para iniciar o jogo</p>
        <button onClick={iniciar}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen