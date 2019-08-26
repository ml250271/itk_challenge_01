import React from "react";

class HandleDescLength extends React.Component {
    state = {
        showLess: true
    };

    handleShowLess = () => {
        this.setState({ showLess: !this.state.showLess });
    };

    render() {
        const { desc, desiredLength } = this.props;
        const { showLess } = this.state;
        const newDesc = showLess ? desc.slice(0, desiredLength) : desc;

        if (desc.length < desiredLength) {
            return <p className="card-text">{desc}</p>;
        }
        return (
            <>
                <p className="card-text">
                    {newDesc}
                    {showLess && "..."}
                </p>
                <button onClick={this.handleShowLess}>
                    {showLess ? "Show More" : "Show Less"}
                </button>
            </>
        );
    }
}

export default HandleDescLength;