import React from 'react'
import { Button, Header, Table, Rating } from 'semantic-ui-react'

const TableExamplePadded = () => (
  <Table celled padded>
    <Table.Header className="tableHeader">
      <Table.Row>
        <Table.HeaderCell singleLine>Titre</Table.HeaderCell>
        <Table.HeaderCell>Support</Table.HeaderCell>
        <Table.HeaderCell>Efficacité / 10 </Table.HeaderCell>
        <Table.HeaderCell>Commentaires</Table.HeaderCell>
        <Table.HeaderCell>A retenir</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body className="tableBody">
      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            Le Coeur A Ses Raisons
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Série <br />
        <Button primary href="https://www.youtube.com/watch?v=LBepL9JBqzY">
          Lien Youtube
        </Button>

        </Table.Cell>
        <Table.Cell>
          <Header as ='h3'>
          9
          </Header>
        </Table.Cell>
        <Table.Cell>
          Une parodie de soap par nos cousins québécois. Un must-see !
        </Table.Cell>
        <Table.Cell className="tableCell">
        <p> Le WQT est un animal aquatique nocturne </p>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            Le Donjon de Naheulbeuk
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Serie Audio <br /> Chansons <br />
          <Button primary href ="https://www.penofchaos.com/warham/donjon.htm">
            Site officiel
            </Button>
          </Table.Cell>
        <Table.Cell>
          <Header as ='h3'>
          8
          </Header>
        </Table.Cell>
        <Table.Cell>
          Une aventure auditive culte du début des années 2000. Tout rôliste de doit de connaître cette histoire. Moultement référencée.
        </Table.Cell>
        <Table.Cell className="tableCell">
          <p> `Mais qu'il est con ce nain!`<br  />
          `Mais je vais l'avoir mon niveau deux ?` <br />
          `"Moi j'suis nyctalope! _Je savais bien que tu étais une salope!"`<br />
          `Chaussette !` </p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as ='h3'>
            <p> L&apos;Os à Moelle </p>
          </Header>
        </Table.Cell>
        <Table.Cell singleline>Livre<br />
          <Button primary href="http://dicocitations.lemonde.fr/reference_citation/5627/L_Os_a_moelle.php">
            Quelques citations
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Header as='h3'>
          8
          </Header>
        </Table.Cell>
        <Table.Cell>
          <p>Un classique de l&apos;humour français. Calembours délieusement rétrogrades</p>
        </Table.Cell>
        <Table.Cell className="tableCell">
          <p>`Jeune homme désintéressé épouserait jeune fille laide même fortunée.`</p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            George Carlin
          </Header>
        </Table.Cell>
        <Table.Cell>
          Humoriste <br />
          <Button primary href="https://www.youtube.com/watch?v=Y_NP4tFNkTY">
            Lien Youtube
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Header as='h3'>
          10
          </Header>
        </Table.Cell>
        <Table.Cell>
          Un homme d&apos;humour comme on n&apos;en fait plus. Sarcastique, politiquement incorrect et profondément cynique. Une de mes inspirations.
        </Table.Cell>
        <Table.Cell className="tableCell">
          <p>`Ne sous-estimez jamais le pouvoir des gens stupides dans les grandes communautés` <br />
          `J'aime bien quand une fleur ou une petite touffe d'herbe se développe à travers une fissure du béton. Ca paraît tellement follement héroïque`
          </p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Header as='h3'>
          Imgur
        </Header>
        </Table.Cell>
        <Table.Cell>
          Site Internet <br />
          <Button primary href="https://imgur.com/">
            Ta vie peut changer
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Header as='h3'>
          9
          </Header>
        </Table.Cell>
        <Table.Cell>
          <p> 9gag, c&apos;est tout naze comparé à Imgur, un site relié bien plus rapidement à 4chan (alias, la source des Internets). Une source permanente de fun et beaucoup d&apos;utilisateurs sympathiques. Become a meme addic !</p>
        </Table.Cell>
        <Table.Cell className="tableCell">
          <p>`Cat Tax` <br /> `Sorry for long post, here's a potato` <br /> `Small dump` </p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            Interneeeeet
          </Header>
        </Table.Cell>
        <Table.Cell>
          Le meilleur site du monde 2015 <br />
          <Button primary href="http://www.interneeeeet.com">
            Ne clique pas !
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Header as='h3'>
            10
          </Header>
        </Table.Cell>
        <Table.Cell>
          <p>En tant que gros consommateur de vidéos des Internets, celle-ci me plaît particulièrement. Mes voisins me détestent à cause de celle-ci...</p>
        </Table.Cell>
        <Table.Cell className="tableCell">
          <p>`INTERNEEEEEEEEEEET` </p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>
      <Header as='h3'>
        La Bande PAS Dessinée
        </Header>
      </Table.Cell>
      <Table.Cell>
        Web Comic <br />
        <Button primary href ="http://www.labandepasdessinee.com/bpd/13-3-cases">
          Gros coup de crayon
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Header as='h3'>
          9
        </Header>
      </Table.Cell>
      <Table.Cell>
        Navo, c&apos;est un univers particulier, assez percutant. Un auteur méconnu qui bosse pour les plus grands, mais personne ne le sait. Respect pour le bonhomme
      </Table.Cell>
      <Table.Cell className="tableCell">
        <p>`J'ai une bonne et une mauvaise nouvelle. La bonne, c'est qu'une personne sur deux guérit de cette maladie. La mauvaise, c'est que c'est lui, là-bas, qui va guérir`
        </p>
      </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            The Useless Web
          </Header>
        </Table.Cell>
        <Table.Cell>
          Site Web Utile <br/ >
          <Button primary href="http://www.theuselessweb.com/">
            Please
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Header as='h3'>
            10
          </Header>
        </Table.Cell>
        <Table.Cell>
          Une des raisons qui m&apos;ont donné envie de devenir Développeur Web. Internet is Magic !
        </Table.Cell>
        <Table.Cell className="tableCell">
          `Bury me with my money` <br />
          `HEEEEEY ... HOOOOOOO` <br />
          `Sell me something weird or confusing`
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            Police Squad
          </Header>
        </Table.Cell>
        <Table.Cell>
          Série <br />
          <Button primary href="https://www.dailymotion.com/video/xtx32w">
            Dailymotion
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Header as='h3'>
            10
          </Header>
        </Table.Cell>
        <Table.Cell>
          Peu d&apos;épisodes, mais cultes ! Je n&apos;ai pas tout vu par manque de temps, mais je te propose de les (re)voir ensemble ;)
        </Table.Cell>
        <Table.Cell className="tableCell">
        <p>`"Cigarette? _ Je sais ce que c'est, merci"`</p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            Les 2 minutes du Peuple
          </Header>
        </Table.Cell>
        <Table.Cell>
          Capsules Audio <br />
          <Button primary href="https://les2minutesdupeuple.tk/">
            Pérusse-moi ce bouton
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Header as='h3'>
            10
          </Header>
        </Table.Cell>
        <Table.Cell>
          François Pérusse, le québécois le plus drôle du monde ! Des calembours à foison, un rythme effréné, des heures d&aspo;humour non-stop
        </Table.Cell>
        <Table.Cell className="tableCell">
        <p>`Ma voisine, cette coquine` <br />
        `Caroline ? C'est Roger !` <be />
        `SnackBar chez Léon, SnackBar chez Léooooon`
        </p>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExamplePadded
