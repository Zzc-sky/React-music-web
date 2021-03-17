import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '../../common/local-data'

import {
   HeaderWrapper,
   HeaderLeft,
   HeaderRight,
   Logo,
   HeaderLinks,
   LinkItem
} from "./style";

export default memo(function AppHeader() {


   return (
      <HeaderWrapper>
         <div className="content wrap-v1">
            <HeaderLeft>
               <Logo />
               {renderHeaderLinks()}
            </HeaderLeft>
            <HeaderRight></HeaderRight>
         </div>
         <div className="divider"></div>
      </HeaderWrapper>
   )

   // 渲染顶部链接 
   function renderHeaderLinks() {
      return (
         <HeaderLinks>
            {
               headerLinks.map((item, index) => {
                  if (index < 3) {
                     return (
                        <LinkItem key={item.title}>
                           <NavLink to={item.link}  >{item.title}</NavLink>
                        </LinkItem>
                     )
                  } else {
                     return (
                        <LinkItem key={item.title}>
                           <a href={item.link} >{item.title}</a>
                        </LinkItem>
                     )
                  }
               })
            }
         </HeaderLinks>
      )
   }
})
