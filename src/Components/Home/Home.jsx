import Banner from "../Banner/Banner";
// import CategoryList from "../CategoryList/CategoryList";
import { Helmet } from "react-helmet-async";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

 

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CareerXone | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* <CategoryList></CategoryList> */}
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;