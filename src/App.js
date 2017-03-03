
import React from 'react'
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'

import {ConnectedCharacters} from './Characters.js'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:9000'
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: r => r.id
})

export const App = () => (
  <ApolloProvider client={client}>
    <ConnectedCharacters />
  </ApolloProvider>
)
