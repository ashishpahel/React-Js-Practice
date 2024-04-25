## Notes : -

### useRef hook :
useRef is a React Hook that lets us reference a value that’s not needed for rendering.

 ### useCallback hook :
 The useCallback hook is a built-in hook in React that lets us memoize a callback function by preventing it from being recreated on every render. In simple terms, it means that the callback function is cached and does not get redefined on every render. This will optimize and improve the overall performance of your application.

### useEffect hook :
 It handles the effects of the dependency array. The useEffect Hook allows us to perform side effects on the components. fetching data, directly updating the DOM and timers are some side effects. It is called every time any state if the dependency array is modified or updated.