import { React } from 'react';

export default function EventResult(props) {

  return (
    <div className='event-result'>
      <div>
        {props.dog}
      </div>
      <span>
        {props.org} | 
      </span>
      <span>
        {props.program}
      </span>
      <span>
        {props.level}
      </span>
      <br />
      <div>
        {props.qualified && <span>[Ribbon with Q here]</span>}
      </div>
    </div>
  )
};