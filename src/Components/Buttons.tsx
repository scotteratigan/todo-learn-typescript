import styled from 'styled-components'

const Button = styled.button`
  border: none;
  padding: 0.25rem;
  &:active {
    transform: translate(2px, 2px);
  }
`

const PrimaryButton = styled(Button)`
  color: white;
  background-color: blue;
`

export { Button, PrimaryButton }
