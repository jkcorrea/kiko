import React, { FC } from 'react'
import { ApolloClient } from 'apollo-boost'
import Footer from 'components/Footer'
import Head from 'components/Head'
import Header from 'components/Header'
import Progress from 'components/navigation/Progress'
import withOpenDrawer from 'containers/withOpenDrawer'
import { motion } from 'framer-motion'
import { DrawerActionType } from 'lib/constants'
import withShopify from 'lib/shopify'
import { AppProps } from 'next/app'
import { withRouter } from 'next/router'
import { ApolloProvider } from 'react-apollo'
import { compose, withProps } from 'recompose'
import { wrapper } from 'store'
import styled, { ThemeProvider } from 'styled-components'
import type {} from 'styled-components/cssprop'
import theme from 'theme'

interface Props extends AppProps {
  apollo: ApolloClient<any>
}

const Main = styled(motion.main)`
  min-height: calc(100vh - 47px);
`

const App: FC<Props> = ({ Component, pageProps, apollo, router }) => (
  <>
    <Progress theme={theme} />

    <Head />
    {/* NOTE we don't want to use this as we can render *some* ui */}
    {/* <PersistGate persistor={store.__persistor} loading={null}></PersistGate> */}
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <Header />

        <Main
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
          {/* eslint-disable-next-line */}
          <Component {...pageProps} key={router.route} />
        </Main>

        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  </>
)

// App.getInitialProps = async ({ Component, ctx }: AppContext) => {
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {}

//   return { pageProps }
// }

export default compose(
  withShopify, // this is withApollo
  withRouter,
  wrapper.withRedux,
  withOpenDrawer,
  withProps(({ openDrawer }) => ({
    isCartOpen: openDrawer === DrawerActionType.CART,
    isMenuOpen: openDrawer === DrawerActionType.MENU,
  })),
)(App)
