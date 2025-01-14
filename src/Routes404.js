import React from "react";
import { Route, Routes } from "react-router-dom";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import NotFound from "./NotFound";
import Homepage from "./Homepage";

function Routes404() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/companies' element={<CompanyList />} />
      <Route path='/jobs' element={<JobList />} />
      <Route path='/companies/:handle' element={<CompanyDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default Routes404;
