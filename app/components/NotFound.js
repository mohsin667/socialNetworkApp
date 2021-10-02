import React from 'react'
import { Link } from 'react-router-dom'
import Page from './Page'


function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center"><h2>Whoopss... We can not find that page.</h2>
      <p className="lead text-muted">You can always visit the <Link to="/">Homepage</Link> to get fresh start</p>
      </div>
    </Page>
  )
}

export default NotFound
