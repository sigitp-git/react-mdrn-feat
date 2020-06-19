import { useState, useEffect } from 'react'
// custom hooks is nothing more than RFC you define, using React built-in hooks
// this RFC can be called from any other RFC to be reused

// create custom react hooks for tracking mouse position. useXXX is naming convention for custom hooks
// decouple this from the component itself to be reusable from multiple components
const usePosition = () => {
    // initial state is object because both x and y change at the same time, tightly coupled
    const [position, setPosition] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
      // this code crash the browser, single small movement will register as new state (x y changed)
      // new state = re-render
      // so useEffect will help, move this inside useEffect (f,[])
      // this way the eventlistener add to the DOM happens only once
      // but return position happens everytime x y change, which is what we want
      console.log('mouse move event')
  
      const handleMove = (e) => {
        setPosition({
          x: e.pageX,
          y: e.pageY,
        })
      }
  
      document.addEventListener('mousemove', handleMove)
  
      // clean up the effect when note component deleted (ComponentDidUnMount)
      return () => {
        document.removeEventListener('mousemove', handleMove)
      }
    }, [])
  
    return position
  }

export default usePosition