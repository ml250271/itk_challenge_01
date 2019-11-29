import React from "react";

class HandleDescLength extends React.Component {
  state = {
    showLess: true
  };

  handleShowLess = () => {
    this.setState({ showLess: !this.state.showLess });
  };

  render() {
    const { desc, desiredLength = 60 } = this.props;
    const { showLess } = this.state;
    // Instead of truncating text you can use css elipsis
    const newDesc = showLess ? desc.slice(0, desiredLength) : desc;

    if (desc.length < desiredLength) {
      return <p className="card-text">{desc}</p>;
    }

    // No need for extra?  <> dom element
    // Replace P with DIV. Button should not be child of P
    return (
      <div className="card-text">
        {newDesc}
        {showLess && "... "}
        <button
          className="btn btn-outline-info btn-sm"
          onClick={this.handleShowLess}
        >
          {showLess ? "Show More" : "Show Less"}
        </button>
      </div>
    );
  }
}

export default HandleDescLength;
