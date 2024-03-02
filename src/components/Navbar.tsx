import React from 'react'
type NavParams = {
    total:number,
    score:number
}
const Navbar = ({total, score}:NavParams) => {
    
  return (
    <nav className='nav'>
        <div className="container">
            <div className="navbar__title">React Quiz</div>
            <p className="navbar__score">Score: {score}</p>
            <p className="navbar__total">Total: {total}</p>
        </div>
    </nav>
  )
}

export default Navbar