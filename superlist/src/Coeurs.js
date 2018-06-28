import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

const PopupExampleSize = () => (
  <div>
    <Popup
      trigger={<Icon circular name='heart' />}
      content="J'ai un truc à te demander"
      size='mini'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content="Vais-je oser ?"
      size='tiny'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content="J'espère que tu ne vas pas prendre peur, car notre relation n'est pas sérieuse ..."
      size='small'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content="Et justement ..."
      size='large'
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content="Tu pourrais aller me chercher une bière, s'il-te-plaît ?"
      size='huge'
    />
  </div>
)

export default PopupExampleSize
