import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";



const AppliedJobs = () => {
    const applied = useLoaderData()
    const [applyingJobs, setApplyingJobs] = useState([])

    useEffect(() => {

        const storedJobIds = getStoredJobApplication();
        if (applied.length > 0) {
            // const jobApplied = applied.filter( job => storedJobIds.includes( job.id )) // option 1

            const jobApplied = [];      // option 2
            for (const id of storedJobIds) {
                const job = applied.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setApplyingJobs(jobApplied)
            console.log(jobApplied)
        }
    }, [])

    return (
        <div>
            <h3>Jobs i applied {applyingJobs.length} </h3>
        </div>
    );
};

export default AppliedJobs;