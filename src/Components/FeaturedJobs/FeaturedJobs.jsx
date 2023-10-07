import { useEffect, useState } from "react";
import Jobs from "./Jobs/Jobs";



const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h3 className="text-4xl">Featured Jobs: {jobs.length}</h3>
                <p> Explore thousands of job opportunities with all the information you need. Its your future </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    jobs.map((jobsInfo, idx) => <Jobs key={idx} jobsData={jobsInfo}></Jobs>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;