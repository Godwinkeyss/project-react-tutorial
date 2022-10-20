import React, { useState } from 'react';
import './birthday.css';
import List from './List';
import data from './data';

const Birthday = () => {
    const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default Birthday;
