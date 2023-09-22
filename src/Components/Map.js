import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '1200px',
    height: '600px'
};


function Map({ bloodData, organData }) {
    const [currentLocation, setCurrentLocation] = useState({
        lat: 0,
        lng: 0
    })
    const markers = [
        { lat: 18.5204, lng: 73.8567 },
        { lat: 18.5314, lng: 73.8446 },
        { lat: 18.5642, lng: 73.7769 },
    ];
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA7H5azuV0vC1wezySE77Z4OmwEHiayhMQ"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        navigator?.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat, longitude: lng } }) => {
                const pos = { lat, lng };
                setCurrentLocation(pos);
            }
        );

        const bounds = new window.google.maps.LatLngBounds();
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    const iconBase =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png";


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            center={currentLocation}
            icon={iconBase}
        >
            {markers.map(({ lat, lng }) => (
                <Marker position={{ lat, lng }} />
            ))}
            <></>
        </GoogleMap >
    ) : <></>
}

export default Map;