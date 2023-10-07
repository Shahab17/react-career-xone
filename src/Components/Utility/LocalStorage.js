const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications')
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication)
    }
    return [];
}

const saveJobApplication = id => {
    const storedApplyJobs = getStoredJobApplication()
    const exists = storedApplyJobs.find(jobId => jobId === id)
    if (!exists) {
        storedApplyJobs.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedApplyJobs))
    }

}

export { getStoredJobApplication, saveJobApplication }