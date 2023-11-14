import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";
import { IoLocation } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Helmet } from "react-helmet-async";


const AppliedJobs = () => {
    const applied = useLoaderData()

    const [applyingJobs, setApplyingJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])


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
            setDisplayJobs(jobApplied)
            // console.log( storedJobIds, applied,jobApplied)
        }
    }, [applied])


    const handleDisplayJobs = filter => {
        if (filter === 'all') {
            setDisplayJobs(applyingJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = applyingJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = applyingJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }


    return (
        <div>
            <Helmet>
                <title>CareerXone | Applied Jobs</title>
            </Helmet>

            <div className="text-end mt-12">
                <div className="dropdown px-5">
                    <label tabIndex={0} className="btn m-1 border-2  border-blue-400">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                        <li onClick={() => handleDisplayJobs('all')}><a>All</a></li>
                        <li onClick={() => handleDisplayJobs('remote')}><a>Remote</a></li>
                        <li onClick={() => handleDisplayJobs('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid gap-6 px-5 mt-6">
                {
                    displayJobs.map(jobs =>
                        <div key={jobs.id}>

                            <div className="grid items-center p-5 border rounded-md  ">
                                <div className="flex-row md:flex justify-between items-center  ">
                                    <div className="flex-row lg:flex items-center gap-8">
                                        <img src={jobs.logo} className="max-w-sm rounded-lg shadow-2xl" />

                                        <div className="mt-5 ">
                                            <div>
                                                <h1 className=" lg:text-2xl  mb-2 font-extrabold">{jobs.job_title} </h1>
                                                <p>{jobs.company_name} </p>
                                            </div>
                                            <div className='my-4'>
                                                <button className='py-2 px-4  border-2 rounded-md border-blue-300 mr-2 font-semibold '>{jobs.remote_or_onsite} </button>
                                                <button className='py-2 px-4  border-2 rounded-md border-blue-300 mr-2  font-semibold '>{jobs.job_type} </button>
                                            </div>
                                            <div className='flex items-center gap-6  '>
                                                <h3 className='flex   items-center text-base'> <IoLocation className='text-lg mr-1'></IoLocation>  {jobs.location} </h3>
                                                <h3 className='flex items-center text-base'><AiOutlineDollar className='text-lg mr-1'></AiOutlineDollar> {jobs.salary} </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <button className="btn bg-gradient-to-r from-cyan-100 to-blue-600  ">View Details</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;