import React from 'react'
import Question from "./Question";
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';
import Pass from './Pass';
import Fail from './Fail';

function QuizArea(props) {
    if(props.isFinished && props.correct >= 2){
        return(
            <div>
                <UserGreeting/>
                <Pass/>
            </div>
        )
    }
    else if(props.isFinished && props.incorrect >= 2){
        return(
            <div>
                <UserGreeting/>
                <Fail/>
            </div>
        )
    }
    
    return (
        <div>
            <Question dataSet = {props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet = {props.dataSet}/>
        </div>
    )
}

export default QuizArea;
