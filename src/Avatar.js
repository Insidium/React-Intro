import React, { Fragment } from "react";

//Functional Component
function Avatar(props) {
  const { name, job, github, showGithub } = props; // same as: const name = props.name; repeated for other parameters passed
  return (
    <Fragment>
      <h1>{name}</h1>
      <h2>{job}</h2>
      {/* if showGithub === true show p element */}
      {showGithub && <p>{github}</p>}
    </Fragment>
  );
}

export default Avatar;
