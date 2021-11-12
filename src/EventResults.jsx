import { React } from 'react'
import { Link } from 'react-router-dom';
import EventResult from './EventResult'

export default function EventResults(props) {

  const parsedResults = props.results.map( (result, index) => {
    return <EventResult
      key={index}
      dog={result.dog}
      org={result.org}
      program={result.program}
      level={result.level}
      qualified={result.qualified}
      ribbon={result.ribbon}

    />
  });

  return(
    <div>
      <ul>
        {parsedResults.reverse()}
      </ul>
      <Link to={"/events/new"}>Add Event</Link>
    </div>
  )
};