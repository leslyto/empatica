import React from 'react'
import Header from './Header'
import Footer from './Footer'
import embraceLogo from './images/embrace_logo.svg'
import embraceLogoMobile from './images/embrace_logo-sm.svg'
import embraceLogoWatch from './images/embrace_front-xhdpi.jpg'

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const isMobile = vw < 768

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
        <div className='content'>
          <div className='left-content'>
            {isMobile ? 
              <img src={embraceLogoMobile} alt='embrace-logo-mobile' width={400} height={148}/>
              :<img src={embraceLogo} alt='embrace-logo' width={500} height={185}/>
            }
            <h1>Your companion for epilepsy <br /> management</h1>

            <p>The embrace watch uses advanced learning algorithms to identify tonic-clonic 
              seizures and send alerts to caregivers. It also provides sleep, rest, and physical activity analysis.</p>
          </div>
          <div className='right-content'>
            <img src={embraceLogoWatch} className='watch' alt='embrace-logo-watch'/>
          </div>
            <button>Discover Embrace Features</button>
        </div>
      <Footer/>
    </React.Fragment>
  )
}

export default Home;
