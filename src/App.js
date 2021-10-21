import React,{useState,useEffect} from 'react'
import questionList from './components/Quiz'
import {Route,Link,useHistory} from 'react-router-dom';
import Report from './components/Report';

function App() {
  const [currentQuestion,setCurrent] = useState(0)
  const [score,setScore] = useState(0)
  const [flag,setFlag] = useState(false)
    const history = useHistory();
  function Increase(){
    setCurrent(currentQuestion < questionList.length ? currentQuestion+1 : currentQuestion)
  }
  function Decrease(){
    setCurrent(currentQuestion > 0 ? currentQuestion-1 : currentQuestion)
  }
  function handleSubmit(){
      history.push('/Report');
      setFlag(true)
  }
  

  return (
    <>
    
    {
       flag ?
       <Route path = "/Report">
       <Report score = {score}/>
       </Route>
       :(<div>
        <div>Question {currentQuestion + 1}/{"0"+ questionList.length}</div>
        <div>
          {questionList[currentQuestion].question}
        </div>
        <div>
         {
          questionList[currentQuestion].answerList.map((ans) => {
            return <ul><button type = "radio" onClick = {() => ans.isCorrect ? setScore(score+1):score}>{ans.answer}</button></ul>
           })
         }
        </div>
        <div>
          <button onClick = {Decrease}>Prev</button>
          
          {currentQuestion == questionList.length-1 ? <button onClick = {handleSubmit}>Submit</button>:<button onClick = {Increase}>Next</button>}
        </div>
       
       
   
       </div>)
     }
    </>
  )
}

export default App;
