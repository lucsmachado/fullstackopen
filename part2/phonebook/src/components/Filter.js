const Filter = ({ value, onChange }) => {
  return (
    <div>
      filter by name:
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;