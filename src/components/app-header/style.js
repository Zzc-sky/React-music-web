import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height:75px;
  background-color:#242424;
  .content {
    display:flex;
    justify-content:space-between;

    height:70px;
  }
  .divider {
    height:5px;
    background-color:#C20C0C;
  }
`

export const HeaderLeft = styled.div`
   display:flex;

   color:#cccccc;
`

export const HeaderRight = styled.div`
  
`

export const Logo = styled.a.attrs({
   href: "/#",
   className: "sprite_01"
})`
   display:inline-block;
   width:176px;
   height:69px;
   background-position:0 0;
`

export const HeaderLinks = styled.div`
   display:flex;
`

export const LinkItem = styled.div`
   a {
      display:inline-block;
      line-height:70px;
   }
`