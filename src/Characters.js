
import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
{
  allPeople {
    people {
      id
      name
      homeworld {
        id
        name
      }
    }
  }
}
`

const Characters = ({ data: { loading, allPeople } }) => {
  const characters = (!loading && allPeople.people) ? allPeople.people.map(person => <li key={person.id}>{person.name} from {person.homeworld.name}</li>) : []
  return (
    <div className='app'>
      <h2>Star Wars Characters & Their Homeworlds</h2>
      <ul>
        {!loading && characters}
      </ul>
    </div>
  )
}

export const ConnectedCharacters = graphql(query)(Characters)
