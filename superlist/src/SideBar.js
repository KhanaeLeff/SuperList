import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarTopOverlay extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
            <Menu.Item name='home' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Icon name='home' />
              Ce bouton ne sert à rien
            </Menu.Item>
            <Menu.Item name='gamepad' href="https://www.youtube.com/watch?v=XCPj4JPbKtA">
              <Icon name='gamepad'/>
              Celui-là par contre, il sert !
            </Menu.Item>
            <Menu.Item name='camera' href="https://www.google.com/search?client=ubuntu&hs=Dzs&channel=fs&biw=935&bih=928&tbm=isch&sa=1&ei=ivIvW5HFO4GsU8nKnLgC&q=Pourquoi+Louise+Barraud+%3F&oq=Pourquoi+Louise+Barraud+%3F&gs_l=img.3...2955.8862.0.9078.41.27.0.5.5.0.151.2113.20j6.26.0....0...1c.1.64.img..15.17.1131.0..0j35i39k1j0i30k1j0i67k1j0i24k1.0.EOy1HaXvSxA">
              <Icon name='camera'/>
              Promis, c&apos;est pas un troll, là !
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h6'>Et pourquoi ça marche pas ?</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarTopOverlay
