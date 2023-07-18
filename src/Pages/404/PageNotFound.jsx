import Footer from "../../Components/footer/Footer"
import Header from "../../Components/header/Header"
import "./style.scss"

export default function PageNotFound() {
  return (
    <div> 
    <Header/>
    <div>
    <div style={{color:"white", marginTop:"200px"}} >
    404 Page Not found
    </div>
    </div>
    <Footer/>
    </div>
  )
}
