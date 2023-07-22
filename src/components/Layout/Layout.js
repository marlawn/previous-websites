import Navbar from '../Navbar/Navbar.js'
import Header from '../Header/Header.js'
import Aboutme from '../Aboutme/Aboutme.js'
import Footer from '../Footer/Footer.js'

const Layout = () => {
    return (
        <div className='container'>
            <Navbar />
            <Header />
            <div className='body'>
                <Aboutme />
            </div>
            <Footer className='footer'></Footer>
        </div>
    )
}
export default Layout