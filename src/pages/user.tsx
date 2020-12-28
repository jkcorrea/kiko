import React from 'react'
import { compose } from 'recompose'

import PaddedView from '../components/PaddedView'
import withAuth from '../containers/withAuth'
import withAuthenticatedCustomer from '../containers/withAuthenticatedCustomer'
import withCustomer from '../containers/withCustomer'

const UserPage = () => (
  <PaddedView>
    <h1>Welcome</h1>

    <p>You&apos;re viewing an authenticated user info page.</p>
  </PaddedView>
)

export default compose(
  withCustomer,
  withAuthenticatedCustomer,
  withAuth,
)(UserPage)
