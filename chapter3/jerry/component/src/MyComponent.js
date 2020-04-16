import React from "react";

const MyComponent = props => {
  return (
    <div>
      나의 새롭고 멋진 컴포넌트 {props.name}
      <br />
      children 값은 {props.children}
      <br />
      제가 좋아하는 숫자는 {props.favoriteNumber}
    </div>
  );
};
MyComponent.defaultProps = {
  name: "Jerry",
  favoriteNumber: 1
};
export default MyComponent;
