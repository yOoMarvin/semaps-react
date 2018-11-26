import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>So many colors 😱 Don't worry, we got you! 👨‍🎨</h2>
        <table>
          <tbody>
            <tr>
              <th>Color</th>
              <th>Attribute</th>
            </tr>
            <tr>
              <td style={{ backgroundColor: "dodgerblue" }} />
              <td>University</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "deepskyblue" }} />
              <td>School</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "green" }} />
              <td>Nature and Leisure</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "yellow" }} />
              <td>Sports</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "red" }} />
              <td>Hospital</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "orange" }} />
              <td>Shop</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "purple" }} />
              <td>Tourist and Historic</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "lightgrey" }} />
              <td>Railway & General Buildings</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
