import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>Hi 👋 this is Semaps 🗺 a semantic approach to maps </h2>
        <p>
          This is a student project, done during the HWS18 at the University of
          Mannheim. Semaps fetches different datasets of the semantic web and
          looks for common places in cities. So you can find what is important
          for your next city trip! Of course, we're using the beautiful Mannheim
          as a starting point!
        </p>
        <h4>Datasets 📊</h4>
        We have used different datasets to get a better comparison. You can
        swtich between the <br />
        <a href="/linked-open-data">Linked Open Geodata Dataset</a>
        <br /> and the <br />
        <a href="/db-pedia">DP Pedia Dataset</a>. <br />
        Have fun exploring ✌️
      </div>
    );
  }
}
