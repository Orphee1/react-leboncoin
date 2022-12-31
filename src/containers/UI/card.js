import { Card } from '../../components'

export const CardContainer = ({ offer }) => {
  // console.log(offer)
  const { category, location, pictures, price, title } = offer
  return (
    <Card>
      <Card.BoxImage>
        <Card.Image src={pictures} />
      </Card.BoxImage>
      <Card.BoxInfo sb>
        <Card.Box>
          <Card.Title>{title}</Card.Title>
          <Card.Text fs='13px'>{price} €</Card.Text>
        </Card.Box>
        <Card.Box>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{location}</Card.Text>
          {/* <Card.Text>{createdAt}</Card.Text> */}
        </Card.Box>
        <Card.HeartIcon />
      </Card.BoxInfo>
    </Card>
  )
}
