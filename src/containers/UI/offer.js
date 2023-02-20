import { BigCard, Button } from '../../components'

export const OfferContainer = ({ offer, num }) => {
  console.log(offer)
  const { description, pictures, price, title } = offer
  return (
    <BigCard>
      <BigCard.BackButton />
      <BigCard.PhotoBox>
        <BigCard.PhotoFill />
        <BigCard.Image src={pictures} alt={title} />
        <BigCard.PhotoFill />
      </BigCard.PhotoBox>
      <BigCard.ContainerInfo>
        <BigCard.Title price={price} title={title} />
        <BigCard.EmptyBox />
        <BigCard.TabletButton color='#FF6E13'>Acheter</BigCard.TabletButton>
        <BigCard.PayBox>
          <BigCard.Pay />
        </BigCard.PayBox>
        <BigCard.Adv />
        <BigCard.Desc desc={description} />
      </BigCard.ContainerInfo>
      <BigCard.CardVendor>
        <BigCard.CardVendorHeader num={num} />
        <BigCard.CardVendorBanner />
      </BigCard.CardVendor>
    </BigCard>
  )
}
