//CSS
import './App.css';

//Os hooks (React)
import {useCallBack, useEffect, useState} from 'react';

//data
import { WordsList } from './data/Words';

//Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//array de objetos dos estagios do jogo.
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]


function App() {

  const[gameStage, setGameStage] = useState(stages[0].name) 
  const[Words] = useState(WordsList)

  
  const[palavrasWord, setPalavrasWord] = useState("")
  const[categoriaWord, setCategoriaWord] = useState("")
  const[letraWord, setLetraWord] = useState([])

  //Função para pegar uma categoria aleatória
  const categoria = () => {
    const categorie = Object.keys(Words)
    const category = categorie[Math.floor(Math.random() * Object.keys(categorie).length)]

    console.log(category)
    
    const palavras = Words[category][Math.floor(Math.random() * Words[category].length)]

    console.log(palavras)

    return { palavras, category }
  }

 //Funcao de start game
 const iniciar = () => {
  const {palavras, category} = categoria()

  //Pegando as letras dos array de palavras.
  let letras = palavras.split("")

  //para retornar a primeira letra em minuscula
  letras = letras.map((l) => l.toLowerCase())

  console.log(palavras, category)
  console.log(letras)

  //setando(alterando) os estados.
  setCategoriaWord(category)
  setPalavrasWord(palavras)
  setLetraWord(letras)

  setGameStage(stages[1].name)
 }

 //Função para verificar lestras
 const verificarCartas = () => {
  setGameStage(stages[2].name)
 }

 const resetarJogo = () => {
  setGameStage(stages[0].name)
 }

  return (
    <div className="App">
    {gameStage === 'start' && <StartScreen iniciar={iniciar}/>}
    {gameStage === "game" && <Game verificarCartas={verificarCartas}/>}
    {gameStage === "end" && <GameOver resetarJogo={resetarJogo}/>}
    </div>
  );
}

export default App;
