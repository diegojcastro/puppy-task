import { React } from 'react'
import EventResult from './EventResult'

export default function EventResults(props) {

  const parsedResults = props.results.map( result => {
    return <EventResult
      dog={result.dog}
      org={result.org}
      program={result.program}
      level={result.level}
      qualified={result.qualified}

    />
  });

  return(
    <ul>
      {parsedResults.reverse()}
    </ul>
  )
};