import ApolloClient, { InMemoryCache } from 'apollo-boost'
import withApollo from 'next-with-apollo'

export default withApollo(
  // eslint-disable-next-line
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_NAME}.myshopify.com/api/graphql`,
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        'X-Shopify-Storefront-Access-Token':
          process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN,
      },
    }),
)
