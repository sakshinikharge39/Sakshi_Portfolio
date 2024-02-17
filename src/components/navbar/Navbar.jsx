import './navbar.scss'

const Navbar = () => {
  return (
    <div className = "navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Sakshi Nikharge</span>
            <div className="social">
                <a href="#">
                    <img src="/facebook.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <img src="/youtube.png" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar

