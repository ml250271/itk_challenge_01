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
    const newDesc = showLess ? desc.slice(0, desiredLength) : desc;

    if (desc.length < desiredLength) {
      return <p className="card-text">{desc}</p>;
    }
    return (
      <>
        <p className="card-text">
          {newDesc}
          {showLess && "... "}
          <button
            className="btn btn-outline-info btn-sm"
            onClick={this.handleShowLess}
          >
            {showLess ? "Show More" : "Show Less"}
          </button>
        </p>
      </>
    );
  }
}

export default HandleDescLength;
