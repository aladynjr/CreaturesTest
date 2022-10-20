import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import clsx from 'clsx';
import Pika from './assets/img/pika.png'
function App() {
  const [creatures, setCreatures] = useState([
    { name: 'Creature 1', selected: false, transformed: false },
    { name: 'Creature 2', selected: false, transformed: false },
    { name: 'Creature 3', selected: false, transformed: false },
    { name: 'Creature 4', selected: false, transformed: false },
    { name: 'Creature 5', selected: false, transformed: false },
    { name: 'Creature 6', selected: false, transformed: false },

  ]);

  function SelectCreature(creature) {
    if (!creature.selected) {
      creature.selected = true;
      setCreatures([...creatures]);
    } else {
      creature.selected = false;
      setCreatures([...creatures]);
    }
  }

  function TransformCreatures() {
    creatures.forEach(creature => {
      if (creature.selected) {
        creature.transformed = true;
      }
    });
    setCreatures([...creatures]);

  }
  function Reset() {
    creatures.forEach((creature) => {
      creature.selected = false;
      creature.transformed = false;
    })
    setCreatures([...creatures]);
  }

  const [NumberOfAvailableCreatures, setNumberOfAvailableCreatures] = useState(0);
  useEffect(() => {
    const numberOfAvailableCreatures = creatures.filter(creature => !creature.transformed).length;
    setNumberOfAvailableCreatures(numberOfAvailableCreatures);

  }, [creatures])
  return (
    <div className="App">

      <h2 style={{fontWeight:'400'}} >SELECT CREATURE</h2>
      <p style={{marginTop:'-12px'}} >Select creature(s) to transform, don't worry you'll still have the original</p>

      <p style={{fontSize:'13px', opacity:'0.7'}} >You have {NumberOfAvailableCreatures} {NumberOfAvailableCreatures == 1 ? 'creature' : 'creatures'}</p>

      <div className='Creatures' >
        {creatures.map((creature, index) => {
          return (
            <div key={index}
              className={clsx(creature.selected && 'SelectedCreature')}
              onClick={() => { SelectCreature(creature) }} >

              <div className={clsx('Creature', (creature.selected && !creature.transformed) && 'SelectedSign')} >

               

                <img src={Pika} alt="pika" className={clsx('Pika', creature.transformed && 'TransformedCreature')} />
                {creature.transformed && <div className='UnavailableSign' >
                  <p style={{fontWeight:'200', fontSize:'20px'}} >UNAVAILABLE</p>
                  <p style={{fontSize:' 10px', fontWeight: '200', marginTop: '-10px'}} >ALREADY TRANSFORMED</p>
                </div>}
                <p style={{ marginBottom: '0' }} >{creature.name}</p>
                
                {/* {(creature.selected && !creature.transformed) && <b style={{ color: 'red', fontSize: '10px' }} >SELECTED</b>} */}
                {/* {creature.transformed && <b style={{ color: 'blue', fontSize: '10px' }} >TRANSFORMED</b>} */}

              </div>
            </div>
          )
        })}
      </div>


      <button onClick={() => { TransformCreatures() }}
        className='ProceedButton'
      >
       <div className='ProceedText' > PROCEED</div>
      </button>


      {/* <button onClick={() => { Reset() }}
        style={{ color: '#ff0000', backgroundColor: '#b3fe00' }}
      >Reset</button> */}
    </div>
  );

}

export default App;
