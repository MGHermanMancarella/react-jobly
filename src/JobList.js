import React, { useState, useEffect, useContext } from "react";
import JoblyAPI from "./joblyApi";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import "./JobList.css";
import userContext from './userContext'
import {Navigate} from 'react-router-dom'

/**JobList component:
 *
 * Props:
 * - none
 *
 * State:
 * - jobList array: list of props to pass into JobCard to create components
 *
 * Jobly -> JobList -> JobCard
 */


function JobList() {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(userContext);

  
  useEffect(() => {
    async function getJobs() {
      const response = await JoblyAPI.getJobs();
      setJobList(response);
      setIsLoading(false);
    }
    getJobs();
  }, []);

  async function handleSearch(results) {
    const response = await JoblyAPI.getJobs(results);
    setJobList(response);
  }
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  
  if (!currentUser) {
    return <Navigate to="/" />; }
  
  return (
    <div className='jobContainer'>
      
      <SearchBar handleSearch={handleSearch} />
      {jobList.map((j) => {
        return <JobCard job={j} key={j.id} />;
      })}
    </div>
  );
}

export default JobList;
