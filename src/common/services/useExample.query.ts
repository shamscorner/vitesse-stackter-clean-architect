import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

export interface UseExampleQueryType {
  company: {
    ceo: string
  }
  roadster: {
    apoapsis_au: number
  }
}

export function useExampleQuery() {
  const { result, loading, error } = useQuery<UseExampleQueryType>(gql`
   query ExampleQuery {
     company {
       ceo
     }
     roadster {
       apoapsis_au
     }
   }
 `)

  return { result, loading, error }
}
