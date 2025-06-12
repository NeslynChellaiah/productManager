import Hero from "../components/Hero";

const Home = () => {
    return  <>
         <Header></Header>
         <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-primary bg-gradient text-white py-5"><Hero /></div>
    </>
}

export default Home;