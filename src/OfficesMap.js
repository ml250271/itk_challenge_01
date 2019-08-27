import React, { Component } from "react";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";

const TOKEN =
    "pk.eyJ1IjoibWwyNTAyNzEiLCJhIjoiY2p6c3g3OW5xMWdwNTNkbG02NW94cmV1NyJ9.jTx8XF8o85cazxpC5IKF4w";

const navStyle = {
    position: "absolute",
    top: 10,
    left: 10,
    padding: "10px"
};

class OfficesMap extends Component {
    state = {
        viewport: {
            width: "80%",
            height: 800,
            latitude: 48.8566,
            longitude: 2.3522,
            zoom: 4
        },
        popupInfo: null
    };

    handleViewportChange = viewport =>
        this.setState({ viewport: { ...viewport, transitionDuration: 500 } });

    handlePopup = popupInfo => {
        this.setState({ popupInfo });
    };

    render() {
        const { viewport } = this.state;
        const { offices } = this.props;
        return (
            <div style={{ margin: "0 auto" }}>
                <h1>Office Location</h1>
                <MapGL
                    {...viewport}
                    mapboxApiAccessToken={TOKEN}
                    mapStyle="mapbox://styles/mapbox/bright-v8"
                    onViewportChange={this.handleViewportChange}
                >
                    {this.state.popupInfo && (
                        <Popup
                            tipSize={5}
                            anchor="bottom-right"
                            longitude={this.state.popupInfo.longitude}
                            latitude={this.state.popupInfo.latitude}
                            description={this.state.popupInfo.description}
                            photo={this.state.popupInfo.photo}
                            onClose={() => this.setState({ popupInfo: null })}
                            closeOnClick={true}
                        >
                            <h5>YOUR POPUP INFO</h5>
                        </Popup>
                    )}
                    <div style={navStyle}>
                        <NavigationControl />
                    </div>
                    {offices.map(office => {
                        return (
                            <Marker
                                key={office.id}
                                latitude={Number(office.latitude)}
                                longitude={Number(office.longitude)}
                            >
                                <Pin
                                    handlePopup={() =>
                                        this.handlePopup({
                                            latitude: Number(office.latitude),
                                            longitude: Number(office.longitude),
                                            photo: office.photo,
                                            description: office.description
                                        })
                                    }
                                />
                            </Marker>
                        );
                    })}
                </MapGL>
            </div>
        );
    }
}

export default OfficesMap;
