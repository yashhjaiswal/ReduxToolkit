import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, multiplyByAmount } from "./CounterSlice"

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  let counting = 0;
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ marginRight: "10px" }}
        >
          Increment
        </button>
        <span>{count}</span>
        <span>====</span>
        <span>{counting}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Add Amount
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(multiplyByAmount(2))}
        >
          Multiply Amount
        </button>
      </div>
      <div>
        <button onClick={() => counting++ && console.log(counting)}>
          new add
        </button>
      </div>
    </div>
  )
}

export default Counter
