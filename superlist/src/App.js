import React, { Component } from 'react'
import { Divider, Grid, Segment} from 'semantic-ui-react'
import Sidebar from './SideBar'
import logo from './supergirl.png'
import 'semantic-ui-css/semantic.min.css'
import Table from './Table'
import Profil from './Profil'
import Message from './Message'
import Coeurs from './Coeurs'
import Question from './Question'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">`C'est la liste, de votre vie !`</h1>
        </header>
        <Grid columns = 'equal'>
          <Grid.Column width={13}>
            <Segment>
              Merci d&apos;avoir fait confiance à la Jack.Corp pour cet achat. <br />
              Vous trouverez ci-dessous moults références, toujours dans l&apos;humour et la joie <br />
              J&apos;espère que quelque fugace que sera cette lecture, elle prendra la couleur diaphane de la plus diaprée des chimères
            </Segment>
            <Divider />
            <Message />
            <h3>Passe ta souris sur les coeurs de gauche à droite</h3>
            <Coeurs />
          </Grid.Column>
          <Grid.Column width={3}>
            <Profil />
          </Grid.Column>
          <Grid.Column width={16}>
            <Table />
          </Grid.Column>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br />
        <br /><br />
        <br />
        <Question />
      </div>
    )
  }
}

export default App
