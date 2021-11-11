import { React } from 'react'
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
    <ul>
      {parsedResults.reverse()}
    </ul>
  )
};