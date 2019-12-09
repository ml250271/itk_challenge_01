import React, { Component } from "react";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import Avatar from "../shared/Avatar";

const TOKEN = process.env.REACT_APP_MAP_TOKEN;

const MapStyle = styled.div`
  padding: 2rem;
`;

const NavStyle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 1rem;
`;

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

  .office-letter {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 2.3rem;
    background-color: lightgray;
    font-weight: bold;
    border-radius: 100%;
    margin: auto;
  }
`;

const renderGrid = {
  wrapperClass: "card",
  imgClass: "card-img-top",
  bodyClass: "card-body",
  titleClass: "card-title"
};

const PinButton = styled.button`
  background: transparent;
  padding: 0;
  border: none;
`;

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none"
};

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
    const { name, longitude, latitude } = popupInfo || {};
    return (
      <MapStyle>
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
                longitude={longitude}
                latitude={latitude}
                onClose={() => this.setState({ popupInfo: null })}
              >
                <h6>{name}</h6>
                <div>
                  <Avatar office={popupInfo} renderStyle={renderGrid} />
                </div>
              </Popup>
            </PopupStyle>
          )}
          <NavStyle>
            <NavigationControl />
          </NavStyle>
          {offices.map(office => {
            const {
              id,
              name,
              longitude,
              latitude,
              photo,
              description
            } = office;
            return (
              <Marker key={id} latitude={latitude} longitude={longitude}>
                <PinButton onClick={() => this.handlePopup(office)}>
                  <svg
                    style={{
                      ...pinStyle,
                      transform: `translate(${-20 / 2}px,${-20}px)`
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
 C20.1,15.8,20.2,15.8,20.2,15.7z"
                    />
                  </svg>
                </PinButton>
              </Marker>
            );
          })}
        </MapGL>
      </MapStyle>
    );
  }
}

OfficesMap.propTypes = {
  offices: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.string,
      photo: PropTypes.string
    })
  ).isRequired
};

export default OfficesMap;
