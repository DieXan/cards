import React from 'react';
import { useState } from "react";

import './styles.css';

function App() {
  let heheQuestData = [
    "Экономика - это?",
    "Что говорит корова?",
    "БАНКРОТСТВО - это?",
    "БИРЖА - это?",
    "ГОЛУБЫЕ ФИШКИ - это?",
    "ДЕФЛЯЦИЯ - это?"
  ]

  let heheAnswerData = [
    "Экономика - это хозяйственная деятельность людей",
    "Муууууу",
    "БАНКРОТСТВО - неспособность должника платить по своим обязательствам",
    "БИРЖА - регулярно функционирующий, организационно определенный оптовый рынок однородных товаров",
    "ГОЛУБЫЕ ФИШКИ ‑ наиболее известные и престижные акции",
    "ДЕФЛЯЦИЯ - снижение среднего уровня цен в экономике вследствие уменьшения совокупного спроса"
  ]

  const [hebadQuests, sethebadQuests] = useState([]);
  const [hebadAnswer, sethebadAnswer] = useState([]);
  const [hegoodQuests, sethegoodQuests] = useState([]);
  const [hegoodAnswer, sethegoodAnswer] = useState([]);
  const [heheQuest, setheheQuest] = useState(heheQuestData);
  const [heheAnswer, setheheAnswer] = useState(heheAnswerData);
  const [idMoment, setidMoment] = useState(0);
  const [quest, setQuest] = useState(heheQuest[idMoment]);
  const [answer, setAnswer] = useState(heheAnswer[idMoment]);
  const [viewCard, setviewCard] = useState(true);
  const [badAnswer, setbadAnswer] = useState(0);
  const [goodAnswer, setgoodAnswer] = useState(0);
  const [allCountQuests, setallCountQuests] = useState(Object.keys(heheQuest).length);

  console.log('--------------')
  console.log(hebadAnswer)
  console.log(heheQuest)
  console.log(idMoment)
  console.log('--------------')

  let content = ""

  if(viewCard){
    content = quest
  }else{
    content = answer
  }

  function updateDisplay(){
    if(idMoment + 1 >= allCountQuests){
      setidMoment(0)
      setQuest(heheQuest[0])
      setAnswer(heheAnswer[0])
    }else{
  
      setidMoment(idMoment + 1)
      setQuest(heheQuest[idMoment + 1])
      setAnswer(heheAnswer[idMoment + 1])

    }
  }

  function updateBadAnswer(){
    if(idMoment + 1 >= allCountQuests){

    }else{

      let tmpbadQuests = []
      let tmphebadAnswer = []
      let tmpheheQuest = []
      let tmpheheAnswer = []

      setallCountQuests(allCountQuests - 1)
      setbadAnswer(badAnswer + 1)

      tmpbadQuests = hebadQuests
      tmpbadQuests.push(heheQuest[idMoment])
      sethebadQuests(tmpbadQuests)

      tmphebadAnswer = hebadAnswer
      tmphebadAnswer.push(heheAnswer[idMoment])
      sethebadAnswer(tmphebadAnswer)

      tmpheheQuest = heheQuest
      tmpheheQuest.splice(idMoment, 1)
      setheheQuest(tmpheheQuest)

      tmpheheAnswer = heheAnswer
      tmpheheAnswer.splice(idMoment, 1)
      setheheAnswer(tmpheheAnswer)

      setQuest(heheQuest[idMoment])
      setAnswer(heheAnswer[idMoment])

    }
  }

  function updateGoodAnswer(){
    if(idMoment + 1 >= allCountQuests){

    }else{
      let tmphegoodQuests = []
      let tmphegoodAnswer = []
      let tmpheheQuest = []
      let tmpheheAnswer = []

      setallCountQuests(allCountQuests - 1)
      setgoodAnswer(goodAnswer + 1)

      tmphegoodQuests = hegoodQuests
      tmphegoodQuests.push(hegoodQuests[idMoment])
      sethegoodQuests(tmphegoodQuests)

      tmphegoodAnswer = hegoodAnswer
      tmphegoodAnswer.push(hegoodAnswer[idMoment])
      sethegoodAnswer(tmphegoodAnswer)

      tmpheheQuest = heheQuest
      tmpheheQuest.splice(idMoment, 1)
      setheheQuest(tmpheheQuest)

      tmpheheAnswer = heheAnswer
      tmpheheAnswer.splice(idMoment, 1)
      setheheAnswer(tmpheheAnswer)

      setQuest(heheQuest[idMoment])
      setAnswer(heheAnswer[idMoment])

    }
  }

  return (
    <div className="App">
      <div onClick={() => setviewCard(!(viewCard))} className='mainCard'>
        <div className='stats'>
          <h3 id='badAnswer'>{badAnswer}</h3>
          <h3 id='countAnswer'>{idMoment + 1}/{allCountQuests}</h3>
          <h3 id='goodAnswer'>{goodAnswer}</h3>
        </div>
        <h1>{content}</h1>
      </div>
      <div className='Knopki'>
        <button onClick={() => updateBadAnswer()} id='but-red'>Неправильно</button>
        <button onClick={() => updateDisplay()} id='but-blue'>Отложить</button>
        <button onClick={() => updateGoodAnswer()} id='but-green'>Правильно</button>
      </div>
    </div>
  );
}

export default App;