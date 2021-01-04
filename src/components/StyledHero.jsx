import styled from 'styled-components'
 //dont need to import react for styled components
 import defaultImg from '../images/room-6.jpeg'

 //accessing props from a styled component is differet as written on line 8
 const StyledHero = styled.header`
 min-height: 60vh;
 background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
 display: flex;
 align-items: center;
 justify-content: center;

 `

export default StyledHero;
