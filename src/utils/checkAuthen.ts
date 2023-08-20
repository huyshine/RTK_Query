import { useNavigate } from "react-router-dom"

const checkAuthen = () => {
    const navigate = useNavigate()
    const user = localStorage.getItem("auth")
    if(!user){
        navigate("/")
    }
}
export default checkAuthen