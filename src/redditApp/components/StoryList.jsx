/**
 * @jsx React.DOM
 */

var React = require('react');

var StoryList = React.createClass({
  render: function () {
    var storyNodes = this.props.items.map(function (item) {
      return (
        <tr key={item.data.url}>
          <td>
            <p className="score">{item.data.score}</p>
          </td>
          <td>
            <p className="title">
              <a href={item.data.url}>
                {item.data.title}
              </a>
            </p>
            <p className="author">
              By <b>{item.data.author}</b>
            </p>
          </td>
        </tr>
      );
    });

    return (
      <table>
        <tbody>
          {storyNodes}
        </tbody>
      </table>
    );
  }
});

module.exports = StoryList;
