import App from '../App';

export const AddCvButton = ({ updateCvStatus }) => {
  const handleAddClicks = (e) => {
    e.preventDefault();
  };
  return (
    <form
      action="#"
      className="add-window-container"
      onSubmit={handleAddClicks}
    >
      <span className="call-for-action">Click the + to get started</span>
      <button type="submit" onClick={updateCvStatus}>
        +
      </button>
    </form>
  );
};
