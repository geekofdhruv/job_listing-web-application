"use client"; 
import Image from "next/image";
import Search from "./components/search";
import JobTitle from "./components/jobTitle";
import { useEffect, useState } from "react";
import axios from 'axios';



export default function Home() {
  const [jobs,setJobs] = useState([]);
const [loading, setLoading] = useState(true);
const [error,setError] = useState(null);

useEffect(()=>{
  const fetchJobs = async()=>{
    try {
      const response  = await axios.get("http://localhost:3000/jobs")
      setJobs(response.data)
    } catch (err) {
      setError(err.message)
      
    }finally{
      setLoading(false);
    }
  }
  fetchJobs();

},[])

  return (
    <div>
   <div>
    <Search/>
   </div>
   <div >
      {jobs.map((job) => (
        <JobTitle 
          role={job.job_title} // Pass job title to JobCard
          company={job.company_name} // Pass company name to JobCard
          location={job.location} // Pass location to JobCard
          type={job.duration_of_work} // Pass duration of work to JobCard
        />
      ))}
    </div>
   </div>
  );
}
