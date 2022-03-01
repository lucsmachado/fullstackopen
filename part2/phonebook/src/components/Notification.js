import { getSuggestedQuery } from "@testing-library/react";

const Notification = ({ message, success }) => {
  if (message === null) {
    return null;
  }

  const successStyle = {
    color: 'green',
    backgroundColor: 'lightgrey',
    textSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10
  };

  const errorStyle = { ...successStyle, color: 'red' };

  return (
    <div style={success ? successStyle : errorStyle}>{message}</div>
  );
};

export default Notification;