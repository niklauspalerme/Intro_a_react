import React, { useState } from 'react'
import Display from './components/Display';
import Button from './components/Button';


const App = () => {

  //Hooks
  //Estado de la app
  const [ counter, setCounter ] = useState(0)

  //Funciones controladoras de Eventos y Estadp
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text='zero' />     
      <Button handleClick={decreaseByOne} text='minus' />           
    </>
  )
}

export default App;
