import React, { useContext } from 'react'
import { Context } from './context/Context'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Loader from './components/Loader'

const App = () => {
  const {TOTAL_QUESTION,score,loading,finish,data,num} = useContext(Context)
  console.log(loading);
  
  return (
    <div>
      <Navbar total={TOTAL_QUESTION} score={score}/>
      {loading  && (
        <Cart 
        queryNum={num + 1}
        question={data[num].question}
        answers={data[num].answers}
        
        />
      )}
      {!loading && (
        <Loader/>
      )}
    </div>
  )
}

export default App