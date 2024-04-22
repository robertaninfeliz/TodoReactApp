
function FilterDropdown ({ handleFilterChange }) {
    const handleChange = (event) => {
      handleFilterChange(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="filter">Filter:</label>
        <select id="filter" onChange={handleChange}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    );
  };
  
  export default FilterDropdown;