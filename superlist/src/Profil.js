import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Nico from './nico-cheval.jpg'

const CardExampleCard = () => (
  <Card>
    <img className="nicoCheval" src={Nico} alt="Un beau gosse random"/>
    <Card.Content>
      <Card.Header>Jack the Butcher</Card.Header>
      <Card.Meta>
        <span className='date'>Pur produit de 1988</span>
      </Card.Meta>
      <Card.Description>Nicolas est doux, Nicolas aime les enfants, Nicolas est un psychopathe notoire</Card.Description>
    </Card.Content>
    <Card.Content extra href="https://www.thisiswhyimbroke.com/">
      <a>
        <Icon name='arrow circle right' />
          Ceci est une flèche
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard
