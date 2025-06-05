import { useReducer } from 'react'
import './App.css'
import NumButton from './numButton'
import OperandButton from './OperandButton'


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  ADD_OPERAND: 'add-operand',
  DELETE_DIGIT: 'delete-digit',
  CLEAR: 'clear',
  EQUAL: 'equal'
}

function reducer(state, {type, payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      } else if (state.currentOperand != null && payload.digit === '.' && state.currentOperand.includes('.') ) {
        return state;
      } else return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
    case ACTIONS.ADD_OPERAND:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state 
      } 
      else if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operand
        }
      }
      else if (state.previousOperand == null) {
        return { 
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operand,
          currentOperand: null 
        }
      } 
      else return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operand,
        currentOperand: null
      }
    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand == null) return state
      if (state.currentOperand === 1) {
        return { ...state, currentOperand: null}
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.EQUAL:
      if (state.currentOperand && state.previousOperand) {
        return {
          ...state,
          currentOperand: evaluate(state),
          previousOperand: null,
          operation: null
        }
      } else {
        return state
      }
    default:
      return 'Error'
  }
}

function evaluate({currentOperand, previousOperand, operation}) {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
    if (isNaN(previous) || isNaN(current)) return ''
    let total = ''
    switch(operation){
      case '+':
        total = previous + current
        break;
      case '-':
        total = previous - current
        break;
      case '*':
        total = previous * current
        break;
      case '÷':
        total = previous / current
        break;
      default:
        total = 'error'
    }
    return total.toString()
}

function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {});

  return (
    <>
      <div className='calculator'>
        <div className='output'>
          <div className='result'>{previousOperand} {operation}</div>
          <div className='operand'>{currentOperand}</div>
        </div>
        <button onClick={() => dispatch({type: ACTIONS.CLEAR})} className='span-two'>AC</button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
        <OperandButton operand='÷' dispatch={dispatch} />
        <NumButton digit='1' dispatch={dispatch} />
        <NumButton digit='2' dispatch={dispatch} />
        <NumButton digit='3' dispatch={dispatch} />
        <OperandButton operand='*' dispatch={dispatch} />
        <NumButton digit='4' dispatch={dispatch} />
        <NumButton digit='5' dispatch={dispatch} />
        <NumButton digit='6' dispatch={dispatch} />
        <OperandButton operand='+' dispatch={dispatch} />
        <NumButton digit='7' dispatch={dispatch} />
        <NumButton digit='8' dispatch={dispatch} />
        <NumButton digit='9' dispatch={dispatch} />
        <OperandButton operand='-' dispatch={dispatch} />
        <NumButton digit='.' dispatch={dispatch} />
        <NumButton digit='0' dispatch={dispatch} />
        <button className='span-two'onClick={() => dispatch({type: ACTIONS.EQUAL})}>=</button>
      </div>
    </>
  )
}

export default App
