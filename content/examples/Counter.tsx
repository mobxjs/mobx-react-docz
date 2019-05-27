import React from 'react'
import { observer, useLocalStore } from 'mobx-react-lite'

interface Props {
  initialCount?: number
  multiplier?: number
}

export const Counter = observer<Props>(
  ({ multiplier = 1, initialCount = 0 }) => {
    const store = useLocalStore(
      source => ({
        count: initialCount,
        get multiplied() {
          return source.multiplier * store.count
        },
        inc() {
          store.count += 1
        },
      }),
      { multiplier },
    )

    return (
      <>
        {' * '}
        <button id="inc" onClick={store.inc}>
          {`Count: ${store.count}`}
        </button>
        {' = '}
        <span>{store.multiplied}</span>
      </>
    )
  },
)

export const MultiplierInput = ({ children }) => {
  const [value, setValue] = React.useState(1)
  return (
    <div>
      <span>multiplier </span>
      <input
        value={value}
        size={1}
        style={{ textAlign: 'center' }}
        onChange={ev => setValue(parseInt(ev.target.value))}
      />
      {children(value)}
    </div>
  )
}
