import React, { Component } from 'react'
import { Divider, Segment} from 'semantic-ui-react'
import Sidebar from './SideBar'
import logo from './supergirl.png'
import 'semantic-ui-css/semantic.min.css'
import Table from './Table.js'
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
        <Segment/> Merci d&apos;avoir fait confiance à la Jack.Corp pour cet achat. <br />
        Vous trouverez ci-dessous moults références <br />
        Le parti pris de la liste est celui de te faire découvrir l&apos;humour que j&apos;aime, à travers une foultitude de médias, ce qui va rendre ton expérience bien plus interactive <br />
        J&apos;espère que quelque fugace que sera cette lecture, elle prendra la couleur diaphane de la plus diaprée des chimères
        <Divider />
        <Table />
      </div>
    );
  }
}

export default App
