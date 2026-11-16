import {useState, MouseEvent, JSX} from 'react'
import './index.css'

const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0)

  const onIncrement = (event: MouseEvent<HTMLButtonElement>): void => {
    setCount(prev => prev + 1)
  }

  const onDecrement = (event: MouseEvent<HTMLButtonElement>): void => {
    setCount(prev => prev - 1)
  }

  return (
    <div className="container">
      <h1 className="heading">Counter</h1>
      <p className="count">{count}</p>
      <div>
        <button className="button" onClick={onIncrement}>
          Increase
        </button>
        <button className="button" onClick={onDecrement}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
