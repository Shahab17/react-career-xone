import PropTypes from 'prop-types'

import { IoLocation  } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Jobs = ({ jobsData }) => {
    // console.log(jobsData)
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jobsData
    return (
        <div className="card card-compact bg-cyan-50 shadow-lg mt-10">
            <figure><img className='pt-4 ' src={logo}  /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title} </h2>
                <p>{company_name} </p>
                <div className='my-4'>
                    <button className='py-2 px-4  border-2 rounded-md border-blue-300 mr-2 font-semibold '>{remote_or_onsite} </button>
                    <button className='py-2 px-4  border-2 rounded-md border-blue-300 mr-2  font-semibold '>{job_type} </button>
                </div>
                <div className='flex items-center gap-6  '>
                    <h3 className='flex   items-center text-base'> <IoLocation className='text-lg mr-1'></IoLocation>  {location} </h3>
                    <h3 className='flex items-center text-base'><AiOutlineDollar className='text-lg mr-1'></AiOutlineDollar> {salary} </h3>
                </div>
                <div className="card-actions  mt-6">
                    <button className="btn bg-gradient-to-r from-cyan-100 to-blue-600">View Details</button>
                </div>
            </div>
        </div>
    );
};

Jobs.propTypes = {
    jobsData: PropTypes.object,
}

export default Jobs;