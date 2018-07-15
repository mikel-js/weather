import React, { Component } from 'react'

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            // so 1st arguement e kung sn nya ieembed yung map
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref='map' />
        // this.refs.map
    }
}

export default GoogleMap

// sa taas kasi we are used to rendering and make individual components.
// but 3rd party library have no idea to integrate in react type app