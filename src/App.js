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

const qtdTentativas = 3

function App() {

  const[gameStage, setGameStage] = useState(stages[0].name) 
  const[Words] = useState(WordsList)

  //states para, palavra aleatoria, categoria e letra.
  const[palavrasWord, setPalavrasWord] = useState("")
  const[categoriaWord, setCategoriaWord] = useState("")
  const[letraWord, setLetraWord] = useState([])

  //states para, letras advinhadas, letras erradas, tentativas e pontuação.
  const[letrasAdvinhadas, setLetrasAdvinhadas] = useState([])
  const[letrasErradas, setLetrasErradas] = useState([])
  const[tentativas, setTentativas] = useState(qtdTentativas)
  const[pontos, setPontos] = useState(0)

  //Função para pegar uma categoria aleatória
  const categoria = () => {
    const categorie = Object.keys(Words)
    const category = categorie[Math.floor(Math.random() * Object.keys(categorie).length)]

    
    const palavras = Words[category][Math.floor(Math.random() * Words[category].length)]


    return { palavras, category }
  }

 //Funcao de start game
 const iniciar = () => {

   //resetar todas as letras
   clearLetterStates()

  const {palavras, category} = categoria()

  //Pegando as letras dos array de palavras.
  let letras = palavras.split("")

  //para retornar a primeira letra em minuscula
  letras = letras.map((l) => l.toLowerCase())

  //setando(alterando) os estados.
  setCategoriaWord(category)
  setPalavrasWord(palavras)
  setLetraWord(letras)

  setGameStage(stages[1].name)
 }

 //Função para verificar lestras
 const verificarLetras = (letra) => {

  //padronizando as letras para minusculas.
 const normalizaLetras = letra.toLowerCase()

 //condição para retornar letras advinhadas ou erradas.
 if(letrasAdvinhadas.includes(normalizaLetras) || letrasErradas.includes(normalizaLetras)){
  return;
 }
 // setGameStage(stages[2].name)

 //copiando letras ja utilizadas(erradas ou certas).
 if(letraWord.includes(normalizaLetras)){
  setLetrasAdvinhadas((actualLetrasAdvinhadas) =>[
    ...actualLetrasAdvinhadas,
    normalizaLetras,
  ])
 }else{
  setLetrasErradas((actualLetrasErradas) =>[
    ...actualLetrasErradas,
    normalizaLetras,
  ])

  //para contar as tentativas.
 setTentativas((actualTentativas) => actualTentativas -1)
 }

 }

 //cria-se uma função para zerar o jogo quando reiniciar.
 const clearLetterStates = () =>{
  setLetrasAdvinhadas([])
  setLetrasErradas([])
 }

 //monitorar as tentativas sempre que forem alteradas.
  useEffect(() => {
  if(tentativas <= 0){

    clearLetterStates()

    setGameStage(stages[2].name)
  }
 },[tentativas])

 //monitorando condição de vitoria.
 useEffect(() => {
  const unificLetras = [...new Set(letraWord)]

  //condição de vitoria
  if(letrasAdvinhadas.length === unificLetras.length){
    //add pontuação
    setPontos((actualPontos) => actualPontos += 100)

    //restart do jogo
    iniciar()
  }

 }, [letrasAdvinhadas, letraWord, iniciar])

 const resetarJogo = () => {

  setPontos(0)
  setTentativas(qtdTentativas)

  setGameStage(stages[0].name)
 }

  return (
    <div className="App">
    {gameStage === 'start' && <StartScreen iniciar={iniciar}/>}
    {gameStage === "game" && (
    <Game 
    verificarLetras={verificarLetras}
    palavrasWord={palavrasWord} 
    categoriaWord={categoriaWord} 
    letraWord={letraWord} 
    letrasAdvinhadas={letrasAdvinhadas}
    letrasErradas={letrasErradas}
    tentativas={tentativas}
    pontos={pontos}/>
    )}
    {gameStage === "end" && <GameOver resetarJogo={resetarJogo} pontos={pontos}/>}
    </div>
  );
}

export default App;
