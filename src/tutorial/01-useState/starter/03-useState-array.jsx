import {useState} from 'react';
import {data} from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newArray = people.filter((p) => p.id !== id );
    setPeople(newArray);
  }

  return <div>
    <ul>
    {people.map((person) => (
        <Person key={person.id} {...person} removePerson={removeItem} />
      ))}
    </ul>

    <button style={{marginTop: '20px'}} className='btn' onClick={() => setPeople([])}>Clear Items</button>
  </div>;
};

const Person = ({id, name, removePerson}) => {
  return <div>
    <h2>{name}</h2>
    <button onClick={() => removePerson(id)}>remove</button>
  </div>;
}

export default UseStateArray;
