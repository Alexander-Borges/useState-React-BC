// React hook = Special function that allows functional components
//              to sue React features without writing class components(React v16.8)
//              (useState, useEffect, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM
//              [name, setName]

import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App() {
  
  return(
    <>
      <MyComponent></MyComponent>)
      <Counter></Counter>
    </>
  )
}
export default App
