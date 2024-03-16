import FooterSection from 'components/pages/footer'
import Navbar from 'components/pages/navbar_section'
import React, { Fragment } from 'react'

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <Fragment>
        <Navbar/>
        {children}
        <FooterSection />
    </Fragment>
  )
}

export default Layout