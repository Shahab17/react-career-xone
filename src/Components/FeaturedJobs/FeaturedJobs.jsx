import { useEffect, useState } from "react";
import Jobs from "./Jobs/Jobs";



const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [showData, setShowData] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-10">
                <h3 className="text-xl lg:text-4xl font-bold mb-4">Featured Jobs </h3>
                <p> Explore thousands of job opportunities with all the information you need. Its your future </p>
            </div>

            <div className="grid px-5 md:grid-cols-2 gap-10">
                {
                    jobs.slice(0, showData).map((jobsInfo, idx) => <Jobs key={idx} jobsData={jobsInfo}></Jobs>)
                }
            </div>
            <div className={`text-center mt-5 ${showData === jobs.length && 'hidden'} `}>
                <button onClick={() => setShowData(jobs.length)} className="btn bg-gradient-to-r from-cyan-100 to-blue-600">Show All </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;