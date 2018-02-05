//this is the route for the main dashboard.
//TODO: Add dropdown bar on the nav bar
//TODO: markers on the map api

import React,{Component}  from 'react';
import {
    Card,
    Icon,
    } from 'semantic-ui-react';
//library for map api
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
//library for react chart
import ChartJS from 'react-chartjs-wrapper';
import './dashboard.scss'


//import the google map api from the library react-google-maps
const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div  style={{height: `100%`, width: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 41.881832, lng: -87.623177 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 41.881832, lng: -87.623177 }} />}
    </GoogleMap>
)



//home bar
class Home extends Component {
    constructor(props) {
        super(props);
        //hardcoded data
        let data1 = {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
            }],
            labels: ['Red', 'Yellow', 'Blue']
        };

        let data2 =  {
            labels: ["20 Min Ago", "15 Min Ago", "10 Min Ago", "5 Min Ago", "0 Min Ago"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86]
                }
            ]
        };
        this.state = {
            data1: data1,
            type1: 'pie',
            data2: data2,
            type2: 'line',
            IsLoggedIn: false

        };
        this.renderMap = this.renderMap.bind(this);

    }

    //before rendering the page, check authentication
    componentWillMount() {
        this.checkAuth();
    }

    //check authentication, if not redirect to '/'
    checkAuth() {
        console.log(this.props.location);
        if(this.props.location.state){
            if(this.props.location.state.IsLoggedIn !== undefined) {
               this.state.IsLoggedIn= this.props.location.state.IsLoggedIn;
                console.log('now is ',this.state.IsLoggedIn,this.props.location.state.IsLoggedIn);
            }
        }
        if ( ! this.state.IsLoggedIn) {
            this.props.history.push('/');
        }
        console.log(this.state.IsLoggedIn);

    }
    renderMap() {
        return(
            <div className="mappos">
                <MyMapComponent
                    isMarkerShown
                    pos={"222 W Merchandise Mart Plaza Chicago"}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `300px` }} />}
                    mapElement={<div style={{ height: `40%` ,width:`40%`}} />}
                />
            </div>
        )
    }

    render(){
        return(
            <div>
                {/*to be changed using pure css*/}
                <Topbar />
                {/*trying to change it using css */}
                <Sidebar />
                <Chart data1 = {this.state.data1}
                        type1 = {this.state.type1}
                       data2 = {this.state.data2}
                       type2 = {this.state.type2}/>

            </div>
        )
    }
}
//navigation bar
class Topbar extends Component {
    render(){
        return(
            <div className = "Navbar-container">
                <nav className = 'nav-bar'>
                    <img src = {require('../asset/logo.png')}/>

                </nav>
            </div>
        )
    }
}

class Sidebar extends Component{
    render(){
        return(
                <div className = 'sidebar'>
                    {/*This is the sidebar making use of the material css*/}
                    <div className='drawer'>
                        <div className = "text">
                            <ul>
                                <li><a href="#"><Icon name='home' size='large'/><p>Home</p></a></li>
                                <li><a href="#"><Icon name='call' size='large'/><p>News</p></a></li>
                                <li><a href="#"><Icon name='marker' size='large'/><p>Contact</p></a></li>
                                <li><a href="#"><Icon name='add user' size='large'/><p>About</p></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}


class Chart extends Component{
    render(){
        return(
            <div className = "chart">
                <div>
                    <div className="left-align">
                        <Card >
                            <ChartJS height={90} type={this.props.type1} data={this.props.data1} />
                            <Card.Content header='Configuration' />

                            <Card.Content extra>
                                <ChartJS height={250} type={this.props.type2} data={this.props.data2} />
                            </Card.Content>
                        </Card>
                    </div>

                    <div className="left-align">
                        <Card>
                            <ChartJS height={90} type={this.props.type1} data={this.props.data1} />
                            <Card.Content header='Configuration' />
                            <Card.Content extra>
                                <ChartJS height={250} type={this.props.type2} data={this.props.data2} />
                            </Card.Content>
                        </Card>
                    </div>

                    <div className="left-align">
                        <Card>
                            <ChartJS height={90} type={this.props.type1} data={this.props.data1} />
                            <Card.Content header='Configuration' />
                            <Card.Content extra>
                                <ChartJS height={250} type={this.props.type2} data={this.props.data2} />
                            </Card.Content>
                        </Card>
                    </div>
                </div>
                        {/*Map Component*/}
                        <div className = "Map">
                            <MyMapComponent isMarkerShown />
                        </div>

            </div>
        )
    }

}



export default Home