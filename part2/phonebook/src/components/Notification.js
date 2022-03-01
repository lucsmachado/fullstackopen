import { getSuggestedQuery } from "@testing-library/react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const notificationStyle = {
    color: 'green',
    backgroundColor: 'lightgrey',
    textSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10
  };

  return (
    <div style={notificationStyle}>{message}</div>
  );
};

export default Notification;