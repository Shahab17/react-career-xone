import { useLoaderData, useParams } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { AiOutlineDollar, AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, job_title, salary } = job
    // console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have Applied Successfully')
    }

    return (
        <div>
            <h1 className="text-4xl text-center mt-10 font-bold">Job Details</h1>
            <div className="grid gap-5 md:grid-cols-4   my-32 px-5">
                <div className="  md:col-span-3 space-y-6 ">
                    <h3 className="text-[#757575]" ><span className="font-bold text-black">Job Description:</span> {job_description} </h3 >
                    <h3 className="text-[#757575]"  ><span className="font-bold text-black">Job Responsibility:</span> {job_responsibility} </h3 >
                    <h3 className="text-[#757575]"  ><p className="font-bold text-black mb-4">Educational Requirements: </p>  {educational_requirements}</h3 >
                    <h3 className="text-[#757575]"  ><p className="font-bold text-black mb-4">Experiences</p>  {experiences} </h3>

                </div>
                <div>
                    <div className=" p-7 bg-cyan-50 rounded-lg text-[#757575]">
                        <h1 className=" text-black text-base font-bold border-b pb-6">Job Details</h1>

                        <h3 className="pt-6 mb-4 flex items-center "> <BiBriefcase className=" text-xl mr-2 text-blue-600"></BiBriefcase> <span className="font-bold mr-1">Job Title:</span> {job_title} </h3>
                        <h3 className="flex items-center"> <AiOutlineDollar className="text-xl mr-2 text-blue-600"></AiOutlineDollar> <span className="font-bold mr-1">Salary:</span> {salary} </h3>

                        <h1 className="font-bold text-black pt-8 border-b pb-6">Contact Information</h1>

                        <h3 className="my-4 flex items-center"><AiTwotonePhone className="mr-2 text-blue-600 text-xl"></AiTwotonePhone> <span className="font-bold mr-1  ">Phone:</span> {contact_information.phone} </h3>
                        <h3 className="my-4 flex"> <AiOutlineMail className="text-blue-600 text-xl mr-2"></AiOutlineMail> <span className="font-bold mr-1">Email: </span> {contact_information.email} </h3>
                        <h3 className="flex"> <IoLocation className="mr-2 text-xl text-blue-600"></IoLocation>  <span className="font-bold mr-1">Address: </span> {contact_information.address} </h3>

                    </div>
                    <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-cyan-100 to-blue-600 mt-6 w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default JobDetails;