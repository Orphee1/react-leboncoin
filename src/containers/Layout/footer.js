import { Footer } from '../../components'
import {
  about,
  appsLogos,
  externalLinks,
  infos,
  socialLinks,
  solutions,
  questions,
} from '../../constants'

export const FooterContainer = () => {
  return (
    <Footer>
      <Footer.RowGrid>
        <Footer.Column>
          <Footer.Title>À propos du Boncoin</Footer.Title>
          {about.map((item) => {
            return (
              <Footer.LinkBox key={item.id}>
                <Footer.Link href='#'>{item.text}</Footer.Link>
              </Footer.LinkBox>
            )
          })}
          <Footer.Title>Nos applications</Footer.Title>
          <Footer.ImageBox>
            {appsLogos.map((logo) => (
              <Footer.Image key={logo.id} src={logo.src} alt={logo.alt} />
            ))}
          </Footer.ImageBox>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Informations légales</Footer.Title>
          {infos.map((info) => {
            return (
              <Footer.LinkBox key={info.id}>
                <Footer.Link href='#'>{info.text}</Footer.Link>
              </Footer.LinkBox>
            )
          })}
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Nos solutions pros</Footer.Title>
          {solutions.map((solution) => {
            return (
              <Footer.LinkBox key={solution.id}>
                <Footer.Link href='#'>{solution.text}</Footer.Link>
              </Footer.LinkBox>
            )
          })}
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Des questions ?</Footer.Title>
          {questions.map((question) => {
            return (
              <Footer.LinkBox key={question.id}>
                <Footer.Link href='#'>{question.text}</Footer.Link>
              </Footer.LinkBox>
            )
          })}
          <Footer.Title>Vous êtes à l'étranger ?</Footer.Title>
          <Footer.Select></Footer.Select>
        </Footer.Column>
      </Footer.RowGrid>
      <Footer.RowNone>
        <Footer.Line />
        <Footer.Box>
          <Footer.Text>leboncoin:</Footer.Text>
          {externalLinks.map((link) => {
            console.log(link.url)
            return (
              <Footer.LinkBox key={link.id} style={{ margin: '0 3px 0 3px' }}>
                <Footer.Link href={link.url}>{link.text} .</Footer.Link>
              </Footer.LinkBox>
            )
          })}
        </Footer.Box>
        <Footer.Line />
      </Footer.RowNone>
      <Footer.RowBetween>
        <Footer.Text>leboncoin 2006 {new Date().getFullYear()}</Footer.Text>
        <Footer.Box>
          <Footer.Text>Retrouvez-nous sur</Footer.Text>
          <Footer.Box>
            {socialLinks.map((link) => {
              return (
                <a key={link.id} href={link.url}>
                  {link.icon}
                </a>
              )
            })}
          </Footer.Box>
        </Footer.Box>
      </Footer.RowBetween>
    </Footer>
  )
}
