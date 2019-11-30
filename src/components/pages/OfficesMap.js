import React, { Component } from "react";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import Pin from "../../Pin";
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
                <Pin
                  handlePopup={() =>
                    this.handlePopup({
                      latitude: latitude,
                      longitude: longitude,
                      photo: photo,
                      description: description,
                      name: name
                    })
                  }
                />
              </Marker>
            );
          })}
        </MapGL>
      </MapStyle>
    );
  }
}

OfficesMap.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object).isRequired
};

OfficesMap.defaultProps = {
  offices: []
};

export default OfficesMap;
