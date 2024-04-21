## Notes : -

 In React , when we pass a function to an onClick event :

 - if we want to pass an argument to the function then it should be wrapped in an arrow function or a callback function to avoid it being executed immediately during render .

```jsx
// So, instead of 
onClick={handleChange('red')}, 

// we should use 
onClick={() => handleChange('red')} 

//to ensure handleChange is called only when the button is clicked.

```
-  if we want to call the function then pass only refernce of function like 
 ``` jsx 
 // So, instead of 
  onClick={handleChange()} 

 // we should use 
 onClick={handleChange} 

 ```