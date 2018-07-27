import styled from 'styled-components'

const ColorFill = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`

ColorFill.displayName = 'ColorFill'

export default ColorFill
