import { useEffect, useState } from 'react';import {data} from '../../../data'

const UseStateObject = () => {
  const [people, setPeople] = useState([]);
  const HOBBIES = ['Gardening', 'Coding', 'Reading', 'Writing', 'Hiking', 'Biking', 'Swimming', 'Skiing', 'Sailing', 'Climbing', 'Fishing', 'Hunting', 'Cooking', 'Dancing', 'Singing', 'Acting', 'Playing', 'Watching', 'Listening', 'Eating', 'Sleeping', 'Shopping', 'Traveling', 'Working', 'Studying', 'Teaching', 'Learning'];
  const [pIndex, setPIndex] = useState(0);

  useEffect(() => {
    setPeople(data.map((person) => {
      const newAttributes =  {age: parseInt(Math.random() * 99), hobby: HOBBIES[parseInt(Math.random() * HOBBIES.length)]};
      return {...person, ...newAttributes}
    }));

  }, []);

  const handleSwitchPerson = () => {
    const i = (pIndex + 1) % people.length;
    setPIndex(i)
  }


  return <>
  <h2>
    <p>{pIndex}</p>
    {people.length > 0 && (
      <div key={people[pIndex].id}>
        <h3>{people[pIndex].name}</h3>
        <p>{people[pIndex].age}</p>
        <p>{people[pIndex].hobby}</p>
      </div>
      )}
  </h2>
  <button onClick={handleSwitchPerson}>Show Next Person</button>
  </>
};

export default UseStateObject;
