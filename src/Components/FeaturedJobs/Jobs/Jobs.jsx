import PropTypes from 'prop-types'

const Jobs = ({ jobsData }) => {
    // console.log(jobsData)
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jobsData
    return (
        <div className="card card-compact bg-base-300 shadow-lg">
            <figure><img className='pt-4' src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title} </h2>
                <p>{company_name} </p>
                <div className="card-actions  ">
                    <button className="btn bg-gradient-to-r from-cyan-100 to-blue-600">View Details</button>
                </div>
            </div>
        </div>
    );
};

Jobs.propTypes = {
    jobsData: PropTypes.array,
}

export default Jobs;