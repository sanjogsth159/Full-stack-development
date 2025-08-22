import AuthHomePage from "../components/HomePage/AuthHomePage";
//import UnAuthHomePage from "../components/HomePage/UnAuthHomePage";

function HomePage() {
    //const { isAuth, role } = useContext(AuthContext); 
    //return<div>{
        //isAuth ? <AuthHomePage /> : <UnAuthHomePage />    }</div>
    return (
    <div>
        <AuthHomePage />
    </div>
)}

export default HomePage;