import adv from '../../images/payment-adv.png'
import { ImCoinEuro } from 'react-icons/im'
import { BiLock } from 'react-icons/bi'
import { GoSmiley } from 'react-icons/go'
import { AiOutlineClockCircle, AiOutlineArrowLeft } from 'react-icons/ai'
import { BsArrowLeftCircle } from 'react-icons/bs'

import { Button } from '../Button'

import {
  Adv,
  BackButton,
  CardVendor,
  CardVendorBanner,
  CardVendorHeader,
  Container,
  ContainerInfo,
  Desc,
  EmptyBox,
  FlexBox,
  Image,
  Pay,
  PayBox,
  PhotoBox,
  PhotoFill,
  TabletButton,
  Title,
} from './styles/bigCard'

export const BigCard = ({ children }) => {
  return <Container> {children} </Container>
}

BigCard.Adv = ({ ...restProps }) => {
  return (
    <Adv {...restProps}>
      <img src={adv} alt='Imapge promotionnelle Leboncoin' />
      <p>
        *Enquête réalisée du 26/07/22 au 02/08/22 auprès des membres de la
        communauté lecoindesutilisateurs https://www.lecoindesutilisateurs.fr/
        et ayant utilisé le paiement sécurisé leboncoin. 913 membres ont répondu
        à l'enquête et 884 indiquent être satisfaits du service de paiement
        sécurisé leboncoin.
      </p>
    </Adv>
  )
}

BigCard.BackButton = ({ ...restProps }) => {
  return (
    <BackButton {...restProps}>
      <AiOutlineArrowLeft />
    </BackButton>
  )
}

BigCard.ContainerInfo = ({ children, ...restProps }) => {
  return <ContainerInfo {...restProps}>{children}</ContainerInfo>
}

BigCard.CardVendor = ({ children, ...restProps }) => {
  return (
    <CardVendor {...restProps}>
      {children}
      <Button color='#FF6E13'>Acheter</Button>
      <Button color='#4183D7'>Message</Button>
    </CardVendor>
  )
}

BigCard.CardVendorHeader = ({ num }) => {
  return (
    <CardVendorHeader>
      <span>{num} annonces</span>
    </CardVendorHeader>
  )
}

BigCard.CardVendorBanner = () => {
  return (
    <CardVendorBanner>
      <AiOutlineClockCircle />
      <p>Répond généralement dans les 3 heures</p>
    </CardVendorBanner>
  )
}

BigCard.Desc = ({ desc, ...restProps }) => {
  return (
    <Desc {...restProps}>
      <h4>Description</h4>
      <p>{desc}</p>
    </Desc>
  )
}

BigCard.EmptyBox = ({ children, ...restProps }) => {
  return <EmptyBox {...restProps}>{children}</EmptyBox>
}

BigCard.Image = ({ alt, src, ...restProps }) => {
  return (
    <Image {...restProps}>
      <img src={src} alt={alt} />
    </Image>
  )
}

BigCard.Pay = ({ ...restProps }) => {
  return (
    <Pay {...restProps}>
      <FlexBox>
        <ImCoinEuro />
        <p>
          Payez en ligne pour réserver l’article jusqu’à votre rencontre avec le
          vendeur
        </p>
      </FlexBox>
      <FlexBox>
        <GoSmiley />
        <p>
          Restez libre de refuser ce bien s’il ne correspond pas à vos attentes
        </p>
      </FlexBox>
      <FlexBox>
        <BiLock />
        <p>Paiement sécurisé</p>
      </FlexBox>
    </Pay>
  )
}

BigCard.PayBox = ({ children, ...restProps }) => {
  return <PayBox {...restProps}>{children}</PayBox>
}

BigCard.PhotoBox = ({ children, ...restProps }) => {
  return <PhotoBox {...restProps}>{children}</PhotoBox>
}

BigCard.PhotoFill = () => {
  return <PhotoFill />
}

BigCard.TabletButton = ({ children, ...restProps }) => {
  return <TabletButton {...restProps}>{children}</TabletButton>
}

BigCard.Title = ({ price, title, ...restProps }) => {
  return (
    <Title>
      <h3>{title}</h3>
      <h4>{price} €</h4>
    </Title>
  )
}
