import { React } from 'react';

export default function EventResult(props) {

  return (
    <div className='event-result'>
      <div>
        {props.dog}
      </div>
      <span>
        {props.org} | {props.program} {props.level}
      </span>
      <br />
      <div>
        {props.qualified && <span>[Ribbon with Q here]</span>}
        {props.ribbon && <span>[Ribbon with CW-SP here]</span>}
      </div>
    </div>
  )
};