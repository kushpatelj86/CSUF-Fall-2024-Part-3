import { memo } from "react";
import PropTypes from "prop-types";

function Child({ Learning, multiply }) {
  console.log("Child Component Rendered");

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Child Component</h2>
      <p>Multiply Value: {multiply}</p>
      <button onClick={Learning}>Invoke Learning</button>
    </div>
  );
}

Child.propTypes = {
  Learning: PropTypes.func.isRequired,
  multiply: PropTypes.number.isRequired,
};

export default memo(Child);
