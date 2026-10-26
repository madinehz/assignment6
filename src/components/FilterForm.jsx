function FilterForm({ value, onChange }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event) {
    onChange(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="filter">Filter by title: </label>
      <input
        id="filter"
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Type to filter..."
      />
    </form>
  );
}

export default FilterForm;