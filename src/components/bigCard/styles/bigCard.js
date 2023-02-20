import styled from 'styled-components/macro'

export const Adv = styled.div`
  grid-column: 1/2;
  grid-row: pay-end / adv-end;
  border-bottom: 1px solid var(--clr-grey-3);
  border-radius: var(--radius);
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }
  p {
    color: var(--clr-grey-2);
    font-size: 0.8rem;
  }
`

export const BackButton = styled.button`
  z-index: 1010;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  background: var(--clr-white);
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  svg {
    font-size: 1.4rem;
    font-weight: bold;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const Box = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid var(--clr-grey-3);
`

export const CardVendor = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 1rem;
  height: 18rem;
  button {
    display: block;
  }
  border-radius: var(--radius);
  box-shadow: 1px 5px 14px 1px rgba(171, 171, 171, 0.51);
  -webkit-box-shadow: 1px 5px 14px 1px rgba(171, 171, 171, 0.51);
  -moz-box-shadow: 1px 5px 14px 1px rgba(171, 171, 171, 0.51);

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const CardVendorHeader = styled.div`
  display: flex;
  padding: 15px 0 35px 0;
  border-bottom: 1px solid var(--clr-grey-3);
`

export const CardVendorBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  p {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`
export const Container = styled.article`
  background: var(--clr-white);
  width: 80%;
  margin: 3rem auto;
  height: auto;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: [photoBox-start] 20rem [photoBox-end] 1fr;
  grid-row-gap: 5px;
  grid-column-gap: 20px;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    z-index: 1000;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    grid-template-columns: 1fr;
    grid-template-rows: [photoBox-start] 30rem [photoBox-end] auto;
    grid-row-gap: 5px;
  }
`

export const ContainerInfo = styled.article`
  grid-row: 2 / 3;
  display: grid;
  grid-template-rows: [title-start] 8rem [title-end] 4rem [empty-end] 9rem [pay-end] 13rem [adv-end] 10rem [desc-end] 10rem [vend-end];
  padding: 0 1rem;
  grid-row-gap: 15px;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    grid-template-rows: [title-start] 8rem [title-end] 4rem [empty-end] 4rem [btn-end] 9rem [pay-end] 13rem [adv-end] 10rem [desc-end] 10rem [vend-end];
  }
`

export const Desc = styled(Box)`
  grid-column: 1/2;
  grid-row: adv-end / desc-end;
  border-bottom: 1px solid var(--clr-grey-3);
  h4 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
`

export const EmptyBox = styled(Box)`
  grid-column: 1 / 2;
  grid-row: title-end / empty-end;
`

export const FlexBox = styled.div`
  display: flex;
  margin-bottom: 0.3rem;
`

export const Image = styled.div`
  flex: 3;
  height: 100%;
  margin: auto 8px;
  background: purple;
  overflow: hidden;
  border-radius: var(--radius);
  img {
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    margin: auto 0;
  }
`

export const PhotoBox = styled.div`
  background: blue;
  grid-row: photoBox-start / photoBox-end;
  display: flex;
`

export const PhotoFill = styled.div`
  background: var(--clr-grey-4);
  flex: 1;
  border-radius: var(--radius);

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const Pay = styled(Box)`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--clr-grey-3);
  border-radius: var(--radius);
  p {
    font-size: 0.7rem;
    margin-left: 0.5rem;
  }
`

export const PayBox = styled(Box)`
  grid-column: 1 / 2;
  grid-row: empty-end / pay-end;
  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    grid-row: btn-end / pay-end;
  }
`
export const TabletButton = styled.button`
  width: 100%;
  padding: 10px 25px;
  margin: 10px auto;
  border: none;
  border-radius: var(--radius);
  outline: none;
  color: white;
  font-weight: bold;
  background: ${({ color }) => color};
  grid-row: empty-end / btn-end;
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const Title = styled(Box)`
  grid-column: 1 / 2;
  grid-row: title-start / title-end;
`
