import React,{Component}  from 'react';
import {Navbar,
        Nav,
        NavItem,
        FormGroup,
        FormControl,
        Form,
        Button,
        Glyphicon} from 'react-bootstrap';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {MuiThemeProvider} from 'material-ui/styles';
import {getMuiTheme} from 'material-ui/styles';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { Grid, Image, Divider, Card } from 'semantic-ui-react'


import styles from './Home.scss'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickChange = this.handleClickChange.bind(this);
    }
    handleToggle(){this.setState({open: !this.state.open});}
    handleClose(){this.setState({open: false})};
    handleClickChange(open){
        this.setState({open});
    }

    render(){
       return(
            <div>
                <Topbar handleToggle = {this.handleToggle}
                        handleClose = {this.handleClose}
                        handleClickChange = {this.handleClickChange}
                        open = {this.state.open}/>
                {/*<Sidebar handleToggle = {this.handleToggle}*/}
                        {/*open = {this.state.open}/>*/}
                <Chart />
                <MainChart />
                <Map />
            </div>
       )
   }
}

class Topbar extends Component {
    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div className = "Nav-bar">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Xaptum</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem>
                                {/*when clicking the user icon, the side bar appears*/}
                                <div>
                                    <Glyphicon bsSize="large"
                                               className = "icon"
                                               glyph="user"
                                               onClick={this.props.handleToggle}
                                    />

                                    {/*<RaisedButton*/}
                                        {/*label="Toggle Drawer"*/}
                                        {/*onClick={this.props.handleToggle}*/}
                                    {/*/>*/}
                                    <Drawer
                                            docked={false}
                                            width={200}
                                            open={this.props.open}
                                            onRequestChange={(open) => this.props.handleClickChange(open)}
                                    >
                                        <img className = "img" src = "https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/square-image.png"/>
                                        <div className = "text">
                                            <MenuItem onClick={this.props.handleClose}>Username</MenuItem>
                                            <MenuItem onClick={this.props.handleClose}>domain</MenuItem>
                                        </div>
                                    </Drawer>
                                </div>
                            </NavItem>
                        </Nav>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                            {/*<Navbar.Icon class = "user" pullRight />*/}


                        </Navbar.Form>

                    </Navbar.Collapse>

                </Navbar>
            </div>
            </MuiThemeProvider>

        )
    }
}
//This is just a a side bar experiment.
// class Sidebar extends Component {
//
//     render() {
//         return (
//             <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
//             <div>
//                 <RaisedButton
//                     label="Toggle Drawer"
//                     onClick={this.props.handleToggle}
//                 />
//                 <Drawer open={this.props.open}>
//                     <MenuItem>Menu Item</MenuItem>
//                     <MenuItem>Menu Item 2</MenuItem>
//                 </Drawer>
//             </div>
//             </MuiThemeProvider>
//         );
//     }
// }

class Chart extends Component{
    render(){
        return(
            <div className = "upper-chart">
                <Grid columns={3} divided>
                    {/*<Grid.Row columns={2}>*/}
                        {/*<Grid.Column>*/}
                            {/*<Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />*/}
                        {/*</Grid.Column>*/}
                        {/*<Grid.Column>*/}
                            {/*<Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />*/}
                        {/*</Grid.Column>*/}
                    {/*</Grid.Row>*/}

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <span>Domains</span>
                            <Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <span>Usage</span>
                            <Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <span>Configuration</span>
                            <Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider horizontal/>
                    <Divider horizontal/>
                    <Divider horizontal/>
                </Grid>
            </div>
        )
    }
}

class MainChart extends Component{
    render(){
        return(
         <div className = "container">
            <div className = "MainChart" id = "main-chart">
                <div className = "subchart">

                    <Grid.Column >
                        <span>Chart 1</span>
                        <Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />
                    </Grid.Column>

                    <Divider horizontal/>
                    <Grid.Column>
                        <span>Chart 2</span>
                        <Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Divider horizontal/>
                    <Grid.Column>
                        <span>Chart 3</span>
                        <Image src='https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/paragraph.png' />
                    </Grid.Column>
                </div>

                <div className = "Map">
                    <img  src = "https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/wireframe/square-image.png"/>
                </div>
            </div>
         </div>
        )
    }
}

class Map extends Component{
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default Home