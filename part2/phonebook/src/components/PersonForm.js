const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name:
        <input required
          type="text" 
          value={props.nameValue}
          onChange={props.onNameChange}
        />
      </div>
      <div>
        number:
        <input required
          type="tel"
          value={props.telValue}
          onChange={props.onTelChange}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;