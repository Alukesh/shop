import About from "./About/About";
import Magic from "./Magic/Magic";

const Brands = () => {
    return (
        <div>
            <About  title={"about.title"} link1={"about.link1"} link2={"about.link2"}/>
            <Magic/>
        </div>
    );
};

export default Brands;