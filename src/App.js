import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom"

// component imports
import Portfolio from './Portfolio'
import PortfolioList from './PortfolioList'

// material-ui imports
import theme from "./theme";
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class App extends Component {

    constructor(props) {
        super(props)
        this.initialState = {
            current_uid: null, // "6333607"
            view_id: undefined,
            users: [],
            location: {
                longitude: 0,
                latitude: 0,
                city: ''
            },
            data:{
                fetching: false,
                name: "",
                age: "",
                address: "",
                qual: "",
                bio: "",
                phone: "",
                mail:"",
                pLangs: ["JavaScript","Python", "C++"],
                langs:[]
            },
            vk: {
                name: '',
                photo: '',
                read: false,
                id: ''
            },
            github: {
                gitLogin: '',
                gitBio: '',
                read: false,
                gitRepos: []
            }
        }
        this.state = this.initialState

        this.getLocation = this.getLocation.bind(this)
        this.viewPortfolio = this.viewPortfolio.bind(this)
        this.deleteRepo = this.deleteRepo.bind(this)
    }
    componentDidMount(){
        // fetch into localstorage
        fetch('https://my-json-server.typicode.com/darinapairel97/darinapairel97.github.io/users')
        .then(res=>res.json())
        .then(users => {
            console.log('users', users)
            this.setState({...this.state, users})
            users.map(user=> localStorage[`user_${user.vk.id}`] = JSON.stringify(user))
        })

    }

    getLocation(userData, localKey){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(

                // Функция обратного вызова при успешном извлечении локации
                function(position) {

                    /*
                    В объекте position изложена подробная информация
                    о позиции устройства:

                    position = {
                        coords: {
                            latitude - Широта.
                            longitude - Долгота.
                            altitude - Высота в метрах над уровнем моря.
                            accuracy - Погрешность в метрах.
                            altitudeAccuracy - Погрешность высоты над уровнем моря в метрах.
                            heading - Направление устройства по отношению к северу.
                            speed - Скорость в метрах в секунду.
                        }
                        timestamp - Время извлечения информации.
                    }
                    */
                    let prevState = {...this.state};

                    prevState.location.latitude = position.coords.latitude;
                    prevState.location.longitude = position.coords.longitude;
                    userData.location = prevState.location;

                    localStorage[localKey] = JSON.stringify(userData)
                    this.setState(prevState)

                }.bind(this),

                // Функция обратного вызова при неуспешном извлечении локации
                function(error){

                    /*
                    При неудаче, будет доступен объект error:

                    error = {
                        code - Тип ошибки
                                1 - PERMISSION_DENIED
                                2 - POSITION_UNAVAILABLE
                                3 - TIMEOUT

                        message - Детальная информация.
                    }
                    */

                }
            );
        }
        else {
            // Геолокация не доступна
        }
    }

    VKOnAuth = (data) => {
        let newVk = {...this.state.vk}
        let userData = this.state

        newVk.name =`${data['first_name']} ${data['last_name']}`
        newVk.photo = data['photo'].replace(/amp;/g,'')
        newVk.read = true
        newVk.id = data.uid

        if (localStorage[`user_${newVk.id}`] === undefined){
            localStorage[`user_${newVk.id}`] = JSON.stringify({...this.state, vk: newVk})
            userData.vk = newVk
        } else {

            try{
                userData = JSON.parse(localStorage[`user_${newVk.id}`])
                if (![null, undefined, ''].includes(userData.vk.name)){
                    newVk.name = userData.vk.name
                }
            }
            catch (e) {
                userData = this.state
            }

            userData.vk = newVk // Для перезаписи актуальных данных после авторизации

            localStorage[`user_${newVk.id}`] = JSON.stringify(userData)
            this.getLocation(userData, `user_${newVk.id}`)
        }

        this.setState({...userData, current_uid: newVk.id, view_id: newVk.id})
    }

    onSubmitUser = ({VKname, photo, gitLogin, age, address, qual, phone, mail, langs}) => {

        this.setState((state)=> {

            let newState = {...state}
            let userData

            newState.vk.photo = photo
            newState.vk.name = VKname
            newState.data.age = age
            newState.data.address = address
            newState.data.qual= qual
            newState.data.phone = phone
            newState.data.mail = mail
            newState.data.langs = langs
            
            try{
                userData = JSON.parse(localStorage[`user_${this.state.current_uid}`])
            }
            catch (e) { userData = this.state; console.log('HARD ERROR', e) }

            userData.data = newState.data;
            userData.vk= newState.vk;


            if (state.github.gitLogin !== gitLogin) {
                newState.github.gitLogin = gitLogin
                userData.github.gitLogin = gitLogin

                this.gitFetchUser(gitLogin)
            }

            localStorage[`user_${this.state.current_uid}`] = JSON.stringify(userData);

            return newState
        })
    }

    gitFetchUser = (login) => {
        
        const gitInpVal = login || this.gitLogin|| this.state.github.gitLogin

        ![undefined, ''].includes(gitInpVal) ?
            //проверка на то, существует ли пользователь
            fetch(`https://api.github.com/users/${gitInpVal}`)
                .then(res=>res.json())
                .then(json => {
                    this.setState((state) => {

                            let newGithub = {}

                            newGithub.gitLogin = json.login
                            newGithub.gitBio = json.bio
                            newGithub.read = true

                            return {...state, github: newGithub}
                    })
                    let userData = {}
                    try{
                        userData = JSON.parse(localStorage[`user_${this.state.current_uid}`])
                    }
                    catch (e) { userData = this.state; console.log('HARD ERROR', e) }

                    userData.github.gitLogin = this.state.github.gitLogin
                    userData.github.gitBio = this.state.github.gitBio

                    localStorage[`user_${this.state.current_uid}`] = JSON.stringify(userData);

                }):
            console.log('no user with this login')

        // загрузка репозиториев
        fetch(`https://api.github.com/users/${gitInpVal}/repos`)
            .then(res => res.json())
            .then((json) => {

                this.setState((state) => {
                    let newGithub = state.github
                    newGithub.gitRepos = json
                    return {...state, github: newGithub}
                })
                let userData = {}
                try{
                    userData = JSON.parse(localStorage[`user_${this.state.current_uid}`])
                }
                catch (e) { userData = this.state; console.log('HARD ERROR', e) }

                userData.github.gitRepos = this.state.github.gitRepos

                localStorage[`user_${this.state.current_uid}`] = JSON.stringify(userData);

            })
    }

    deleteRepo(repos, repo){
        repos[repos.indexOf(repo)] = null
        repos = repos.filter(((e)=>e!=null))
         this.setState((state)=>{
             let userInfo = {...state};
             userInfo.github.gitRepos = repos
             return {userInfo}
         })
        localStorage[`user_${this.state.current_uid}`] = JSON.stringify(this.state)
    }

    viewPortfolio(id){
        if (this.state.current_uid === null && id === null){
            this.setState(this.initialState)
        } else {
            let newState = {...this.state};
            ['data', 'location', 'vk', 'github'].forEach((itm) => {newState[itm] = JSON.parse(localStorage[`user_${id}`])[itm]})
            newState.view_id = id
            this.setState(newState)
        }
    }
    openMenu(){
        let menu = document.getElementsByClassName("menu")[0]

        menu.style.display !== "none"?
            menu.style.display = "none"
            :
            menu.setAttribute("style",  "display:flex; width:100%; justify-content:space-around;")

        
    }

    render() {
        const portfolio = () => <Portfolio deleteRepo={this.deleteRepo}
                                        onSubmitUser={this.onSubmitUser}
                                        VKOnAuth={this.VKOnAuth}
                                        current_uid={this.state.current_uid}
                                        view_id={this.state.view_id}
                                        vk={this.state.vk}
                                        github={this.state.github}
                                        data={this.state.data}
                                />

        const  portfolioList = () => <PortfolioList viewPortfolio={this.viewPortfolio} current_uid={this.state.current_uid}/>
        return (

                <Router>
                    <MuiThemeProvider theme={theme}  >
                        <CssBaseline />
                    <div >
                        <AppBar position={"static"}>
                            <Toolbar className={`${this.props.classes.flex} ${this.props.classes.flexSpaceBetween}`}>
                                <IconButton className="open-menu-button" onClick={this.openMenu} color="inherit" aria-label="Menu">
                                    <MenuIcon/>
                                </IconButton>
                                <div className={`menu`} style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
                                    <Typography className={this.props.classes.text} variant="subtitle1">Генератор портфолио</Typography>
                                    <Link className={`${this.props.classes.text} ${this.props.classes.link}`} to="/list"><Typography variant="subtitle1" color="inherit" >Список портфолио</Typography></Link>
                                    <Link onClick={() => {this.viewPortfolio(this.state.current_uid)}} className={`${this.props.classes.text} ${this.props.classes.link}` } to="/"><Typography variant="subtitle1" color="inherit" >Мое портфолио</Typography></Link>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <div className={this.props.classes.body}>

                            <Route path="/" exact render={portfolio}/>
                            <Switch>
                            <Route path="/list" exact render={portfolioList}/>
                            <Route path="/:id" exact render={portfolio}/>
                            </Switch>
                        </div>
                    </div>
                    </MuiThemeProvider>
                </Router>

    );
  }
}

export default withStyles(theme)(App);
