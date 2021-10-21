import React,{useState} from 'react'
import questionList from './Quiz'

function Report(props) {
    const [report,setReport] = useState(false)

    return (
        <div>
              <h3>Your Score:{props.score}/{"0"+questionList.length}</h3>
            {   
                questionList.map(item => 
                   <>
                 
                   <p>{item.question}</p>
                   {
                       item.answerList.map(it => 
                        <ul><button>{it.answer}</button><span>{it.isCorrect ? "  Correct":null}</span></ul>
                        )
                   }
                   </>
                    )
              
            }
        </div>
    )
}

export default Report
