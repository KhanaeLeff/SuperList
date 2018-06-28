import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalBasicExample = () => (
  <Modal trigger={<Button>Bouton pas très caché</Button>} basic size='small'>
    <Header icon='smile' content='An Important Message to Lou' />
    <Modal.Content>
      <p>
        `Bon, c'est pas tout, mais j'ai décidé de faire une petite soirée d'anniv, sans prétention, avec quelques potes.
        Je souhaite t'inviter, cela me ferait très plaisir.
        Don't be scared !
        Rien d'obligatoire, ne t'en fais pas, ce n'est qu'un soirée !`
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='trash' /> Non !
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Oui !
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalBasicExample
