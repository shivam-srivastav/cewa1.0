import React from "react";
import "../Programs/Program.scss";
class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="programs">
        <div className="heading">
          <h1> Programs </h1>
        </div>
        <div className="section">
          <h2> #1 Learning kit Distribution </h2>
          <p>
            Ever since we’ ve known the world and could understand things, we
            were privileged with the ocean of knowledge and enshrined to
            education.However, not everyone stands in the luckiest of positions,
            especially in a galloping country like India, thereby it becomes our
            responsibility to huddle together against all the odds.Our CEWA
            members endowed their poise towards the Right to Education, and
            distributed illustrious learning kits to the impoverished.The
            illiteracy and poverty holds back these impecunious kids, so let’ s
            ease it for them, and provide them the weapon of knowledge.
          </p>
        </div>
      </div>
    );
  }
}

export default Program;
