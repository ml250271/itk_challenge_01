import React, { Component } from "react";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import Pin from "../../Pin";

const TOKEN = process.env.REACT_APP_MAP_TOKEN;

const navStyle = {
  position: "absolute",
  top: 10,
  left: 10,
  padding: "1rem"
};

const PopupStyle = styled.div`
  position: relative;
  z-index: 1000;
  text-align: center;
  h6 {
    max-width: 6rem;
    margin: 0.8rem;
  }
  img {
    width: 8rem;
    height: 4rem;
  }
`;

class OfficesMap extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 800,
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 4
    },
    popupInfo: null
  };

  handleViewportChange = viewport => {
    this.setState({ viewport: { ...viewport, transitionDuration: 500 } });
  };

  handlePopup = popupInfo => {
    this.setState({ popupInfo });
  };

  render() {
    const { viewport, popupInfo } = this.state;
    const { offices } = this.props;
    // USe more desctructuring for example for popupInfo is repeated 7 times
    // No inline styles   <div style={{ margin: "0", padding: "2rem" }}>
    // latitude and longitude should be converted to number outside of render method (even more not two times in same render methid)
    return (
      <div style={{ margin: "0", padding: "2rem" }}>
        <h1>Office Location</h1>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/bright-v8"
          onViewportChange={this.handleViewportChange}
        >
          {popupInfo && (
            <PopupStyle>
              <Popup
                tipSize={5}
                anchor="bottom-right"
                longitude={popupInfo.longitude}
                latitude={popupInfo.latitude}
                onClose={() => this.setState({ popupInfo: null })}
              >
                <h6>{popupInfo.name}</h6>
                <div>
                  {popupInfo.photo && (
                    <img alt={popupInfo.name} src={popupInfo.photo} />
                  )}
                </div>
              </Popup>
            </PopupStyle>
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
                      description: office.description,
                      name: office.name
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

// missing PropTypes

export default OfficesMap;
