import React, { useState } from "react";
import './SearchBar.css'

/** Form for searching companies and/or jobs
 *
 * Props:
 *  handleSearch, function to handle search term inputted in form
 * 
 * State: formData
 * - sends query to fn received from parent.
 *
 * {CompanyList, JobList} -> SearchBar
 */

function SearchBar({handleSearch}) {

  const [searchTerm, setSearchTerm] = useState('');

  /** Send {searchTerm: value} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(searchTerm || undefined);
  }

  /** Update local state w/curr state of input*/
  function handleChange(evt) {
    const searchTerm = evt.target.value;
    setSearchTerm(searchTerm);
  }

  /** render form */
  return (
    <form className='m-3' onSubmit={handleSubmit}>

      <div className="">
        <input
          className="input"
          placeholder="Enter Search Term..."
          id="searchTerm"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="searchBtn">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
