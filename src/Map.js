import React from 'react'

// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import theme from './theme.js'

class Map extends React.Component{

    constructor(props){
        super(props)

        let data = [];

        for(const key in localStorage){
            if (key.includes('user_')){
                try {
                    data.push(JSON.parse(localStorage[key]))
                } catch (e) {}
            }
        }

        this.state = {
            markers: [],
            map: null,
        }

        this.buildMarkers = this.buildMarkers.bind(this)
    }

    buildMarkers(m){

        let map = this.state.map || m;
        if (map == null) return;

        const google = window.google;
        let markers = [];
        let bounds = new google.maps.LatLngBounds();

        this.state.markers.forEach((m) => {m.setMap(null)})
        this.props.data.forEach((item) => {
            if (item.location !== undefined){
                let latitude = parseFloat(item.location.latitude)
                let longitude = parseFloat(item.location.longitude)

                if (longitude !== 0 && latitude !== 0){

                    let marker = new google.maps.Marker({
                        position: {lat: latitude, lng: longitude},
                        map: map
                    })

                    marker['infowindow'] = new google.maps.InfoWindow({
                        content: `
                            <div class="info-map-wrap" style="height: 240px;
                                                            display: flex;
                                                            flex-direction: column;
                                                            align-items: center;
                                                            justify-content: space-around;
                            ">
                                <img src="${item.vk.photo}" style="object-fit:cover; 
                                                                    width:200px; 
                                                                    height:200px; 
                                                                    display:flex; 
                                                                    flex-direction:column;
                                ">
                                
                                <span style="padding-top:10px">${item.vk.name}</span>
                                <span style="font-size:12px; font-weight:bold;">${item.data.qual}</span>
                                
                            </div>
                        `
                    })

                    google.maps.event.addListener(marker, 'click', function () {
                        this['infowindow'].open(map, this)
                    })

                    bounds.extend({lat: latitude, lng: longitude})
                }
            }
        })

        map.fitBounds(bounds);
    }

    componentDidUpdate(prevProps){

         this.buildMarkers()
        // if (prevProps.data !== this.props.data){
        //     this.buildMarkers()
        // }
    }

    componentDidMount(){
        console.log("ITEMS", this.props.data, "")
        var map;
        const google = window.google;
        if (google !== undefined){
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });

            setTimeout(() => {
                this.setState({...this.state, map: map})
                this.buildMarkers(map)
            }, 1200)
        }
    }

    render(){

        return(
            <div id={'map'} style={{width: '70%', height: 'auto'}} />
        )
    }
}
export default withStyles(theme)(Map)