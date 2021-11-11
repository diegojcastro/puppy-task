import { React, useState, useEffect } from 'react';

export default function Form(props) {
  const [formVals, setFormVals] = useState({});

  const dogs = props.dogList || ['Hershey']

  const changeDog = (e) => {
    const dog = e.target.value
    setFormVals({dog});
  }
  const changeOrg = (e) => {
    const org = e.target.value
    setFormVals({dog: formVals.dog, org});
  }




  return(
    <form className='dog-form'>
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


    </form>
  )
};