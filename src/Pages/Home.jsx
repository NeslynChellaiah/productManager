import Hero from "../components/Hero";
import Header from "../components/Header"
const Home = () => {
    return  <>
         <Header />
         <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-primary bg-gradient text-white py-5"><Hero /></div>
    </>
}

export default Home;