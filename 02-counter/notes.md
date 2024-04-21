## Counter

```jsx
  const addValue = () => {
    if (count <= 20) {
      setCount(count + 1);

      /*
      agr me eise bhi kru gya tab bhi increment 1 ho gya because react einko batches me send krte h and ya same kame hore h 
      */

      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);

      /*
      but agr muje 1 increment hi krna h to setCount ek callback deta h jiske ander muje previous state milti h eiska use kr k me kr skta hu 
      */
      // setCount((preCount) => preCount + 1 );
      // setCount((preCount) => preCount + 1 );
      // setCount((preCount) => preCount + 1 );
    }
  };

```
