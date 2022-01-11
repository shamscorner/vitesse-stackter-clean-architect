import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

export function useExampleQuery() {
  const { result, loading, error } = useQuery(gql`
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
