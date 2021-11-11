import { React, useState, useEffect } from 'react';

export default function Form(props) {
  const [formVals, setFormVals] = useState({});
  const results = props.results;
  const setResults = props.setResults;
  const dogs = props.dogList || ['Hershey']

  const changeDog = (e) => {
    const dog = e.target.value
    setFormVals({dog});
  }
  
  const changeOrg = (e) => {
    const org = e.target.value
    setFormVals({dog: formVals.dog, org});
  }

  const changeProgram = (e) => {
    const program = e.target.value
    setFormVals({dog: formVals.dog, org: formVals.org, program});
  }
  
  const changeLevel = (e) => {
    const level = e.target.value
    setFormVals((prev) => ({...prev, level}));
  }


  // I can probably DRY these up further
  const changeJudge = (e) => {
    const judge = e.target.value;
    setFormVals((prev) => ({...prev, judge}));
  }
  const changeDate = (e) => {
    const date = e.target.value;
    setFormVals((prev) => ({...prev, date}));
  }
  const changeTime = (e) => {
    const time = e.target.value;
    setFormVals((prev) => ({...prev, time}));
  }
  const changeScents = (e) => {
    const scents = e.target.value;
    setFormVals((prev) => ({...prev, scents}));
  }
  const changeDidWell = (e) => {
    const didWell = e.target.value;
    setFormVals((prev) => ({...prev, didWell}));
  }
  const changeImprove = (e) => {
    const improve = e.target.value;
    setFormVals((prev) => ({...prev, improve}));
  }
  const changeQualified = (e) => {
    const qualified = e.target.checked;
    console.log(`Qualified is now: ${qualified}`)
    setFormVals((prev) => ({...prev, qualified}));
  }

  const handleSubmit = () => {
    console.log("Appending result:");
    console.log(formVals);
    setResults(prev => ([...prev, formVals]))
  }


  return(
    <form className='dog-form' onSubmit={e => e.preventDefault()}>
      <label>
        Dog:
        <select name='Dog' value={formVals.dog} onChange={changeDog}>
          <option selected disabled value>Dog</option>
          <option value='Hershey'>Hershey</option>
        </select>
      </label>

      {formVals.dog && <label>
          Organization:
          <select name='Organization' value={formVals.org} onChange={changeOrg}>
            <option selected disabled value>Organization</option>
            <option value='CWAGS'>CWAGS</option>
          </select>
      </label>}
      
      {formVals.org && <label>
          Program:
          <select name='Program' value={formVals.program} onChange={changeProgram}>
            <option selected disabled value>Program</option>
            <option value='Scent'>Scent</option>
          </select>
      </label>}
      
      {formVals.program && <label>
          Level:
          <select name='Level' value={formVals.level} onChange={changeLevel}>
            <option selected disabled value>Level</option>
            <option value='Level 1'>Level 1</option>
          </select>
      </label>}

      {formVals.level && 
      <div className='dog-form'>
        <label>
          Judge:
          <input type='text' placeholder='Judge' value={formVals.judge} onChange={changeJudge} />
        </label>
        <label>
          Date:
          <input type='date' placeholder='Date' value={formVals.date} onChange={changeDate} />
        </label>
        <label>
          Time:
          <input type='number' placeholder='Time' value={formVals.time} onChange={changeTime} />
        </label>
        <label>
          Scents:
          <input type='text' placeholder='Scents' value={formVals.scents} onChange={changeScents} />
        </label>
        <label>
          <textarea placeholder='What did you do well?' value={formVals.didWell} rows='5' cols='50' onChange={changeDidWell} />
        </label>
        <label>
          <textarea placeholder='What do you want to improve on?' value={formVals.improve} rows='5' cols='50' onChange={changeImprove} />
        </label>
        <label>
          Qualified:
          <input type='checkbox' value={formVals.qualified} onChange={changeQualified} />
        </label>

        <br />
        <input type='submit' value='Submit' onClick={handleSubmit}/>

      </div>
      }


    </form>
  )
};