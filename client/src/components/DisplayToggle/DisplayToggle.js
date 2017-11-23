import React from "react";

const DisplayToggle = props =>
    <div className = "text-center togglebuttons">
      {!props.showText ? (
        <button type = "button" className = "btn btn-primary" onClick={props.toggleDisplay} disabled = {props.disabled}>
          {props.displayQuestion}
        </button>
      ) : (
        <p>
          {props.displayAnswer}
        </p>
      )}
    </div>;

export default DisplayToggle;
