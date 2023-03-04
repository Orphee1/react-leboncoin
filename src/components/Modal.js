import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ImCross } from 'react-icons/im'
// import image from "../icons/modal-illustration.png"

const Modal = () => {
  return (
    <Wrapper>
      <section className='modal-content section fl-col-left'>
        <button className='btn'>
          <ImCross fontSize='2rem' style={{ color: '#939ea9' }} />
        </button>
        <h2>Déposer une annonce</h2>
        <div className='d-flex full-width'>
          <div className='message-container'>
            <div>
              <h4>Bonjour !</h4>
              <p>
                Connectez-vous ou créez un compte pour déposer votre annonce
              </p>
            </div>
            <div className='s-b' style={{ width: '80%' }}>
              <button className='btn'>
                <Link to='/user/sign_in' style={{ color: 'white' }}>
                  Me connecter
                </Link>
              </button>
              <button className='btn'>
                <Link to='/user/sign_up/' style={{ color: '#4183D7' }}>
                  Créer un compte
                </Link>
              </button>
            </div>
          </div>
          <div className='img-container'>
            {/* <img src={image} alt='logo-modal' /> */}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.main`
  position: fixed;
  z-index: 200;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--clr-white-2);
  .modal-content {
    position: relative;
    height: auto;
    background: var(--clr-white-1);
    padding: 1rem;
    max-width: 55rem;
    svg {
      position: absolute;
      top: 2px;
      right: 10px;
    }
  }
  .message-container {
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    h4 {
      margin-bottom: 1.25rem;
    }
    button {
      height: 43px;
      width: 45%;
      color: var(--clr-white-1);
      background: var(--clr-blue);
    }
    button:nth-child(2) {
      height: 42px;
      width: 45%;
      border: 1px solid var(--clr-blue);
      color: var(--clr-white-blue);
      background: var(--clr-white-1);
    }
  }
  .img-container {
    display: none;
  }
  @media (min-width: 1064px) {
    display: grid;
    place-items: center;
    .message-container {
      flex: 3;
      margin-right: 0.5rem;
    }
    .img-container {
      display: block;
      flex: 2;
      margin-left: 0.5rem;
      height: 15rem;
      img {
        width: 100%;
        height: 15rem;
        object-fit: contain;
      }
    }
  }
`
