import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Nav from './Nav'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <Nav />
      </SectionContainer>
      <main>{children}</main>
      <SectionContainer>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
