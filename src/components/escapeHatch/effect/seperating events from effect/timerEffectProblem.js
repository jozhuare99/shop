import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);



//   the count recreate itself from scratch
  useEffect(() => {
    console.log('✅ Creating an interval');
    const id = setInterval(() => {
      console.log('⏰ Interval tick');
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log('❌ Clearing an interval');
      clearInterval(id);
    };
  }, [count]);

//solution is to create a function inside of effect

// useEffect(() => {
//     console.log('✅ Creating an interval');
//      function Tick(){
//     setCount(count + 1);
//      }
//     const id = setInterval(() => {
//       console.log('⏰ Interval tick');
//       Tick()
//     }, 1000);
//     return () => {
//       console.log('❌ Clearing an interval');
//       clearInterval(id);
//     };
//   }, []);


//another solution is passed a updater function 'count=> count + 1'

// useEffect(() => {
//     console.log('✅ Creating an interval');
//      function Tick(){
//     setCount(count=> count + 1);
//      }
//     const id = setInterval(() => {
//       console.log('⏰ Interval tick');
//       Tick()
//     }, 1000);
//     return () => {
//       console.log('❌ Clearing an interval');
//       clearInterval(id);
//     };
//   }, []);






  return <h1>Counter: {count}</h1>
}
