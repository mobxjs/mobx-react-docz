import React from 'react'
import { observer, useAsObservableSource, useLocalStore } from 'mobx-react-lite'

interface Props {
  initialCount: number
  multiplier: number
}

export const Counter = observer<Props>(props => {
  const observableProps = useAsObservableSource(props)
  const store = useLocalStore(() => ({
    count: props.initialCount,
    get multiplied() {
      return observableProps.multiplier * store.count
    },
    inc() {
      store.count += 1
    },
  }))

  return (
    <div>
      <span>{store.count}</span> * <span>{props.multiplier}</span> ={' '}
      <span>{store.multiplied}</span>{' '}
      <button id="inc" onClick={store.inc}>
        Increment
      </button>
    </div>
  )
})
