import {useState} from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  return <>
    <h4>You clicked {count} times.</h4>
    <button className='btn' onClick={() => setCount(count + 1)}>Click</button>
  </>
};

export default UseStateBasics;
