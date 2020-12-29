import React, { FC } from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { compose } from 'recompose'
import styled from 'styled-components'

import PaddedView from '../components/PaddedView'
import ProductList from '../components/store/ProductList'
import withCollectionByHandle from '../containers/withCollectionByHandle'

const Section = styled.section``

interface Props {
  collection: any
  isCollectionLoading: boolean
}

const Store: FC<Props> = ({ collection, isCollectionLoading = false }) => (
  <PaddedView>
    <Section>
      <Head>
        <title>{collection?.title || 'Store'}</title>
      </Head>

      <h1>{collection?.title}</h1>

      <h2>{collection && collection.descriptionHtml}</h2>

      <br />

      <ProductList
        products={collection?.products}
        loading={isCollectionLoading}
      />
    </Section>
  </PaddedView>
)

// Store.getInitialProps = async ({ req }) => {
//   const api = await getPrismic(req)
//   const { results } = await api.query(
//     Predicates.at('document.type', 'blog_post'),
//     {
//       pageSize: 30,
//       orderings: '[my.blog_post.post_date desc]',
//     },
//   )
//   return { highlight: results[0] }
// }

export default compose(
  withRouter,
  withCollectionByHandle(({ router }) => router?.query?.handle || 'frontpage', {
    filterUnavailable: false,
  }),
)(Store)
