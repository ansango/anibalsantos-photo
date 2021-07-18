import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Nav from './Nav'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <SectionContainer>
          <Nav />
        </SectionContainer>
        <main className="flex-1">{children}</main>
        <SectionContainer>
          <Footer />
        </SectionContainer>
      </div>
    </>
  )
}

export default LayoutWrapper
