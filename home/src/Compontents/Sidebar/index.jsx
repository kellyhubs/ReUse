import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = () => {
    return (
        // sidebar 
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>

            {/* side bar items */}
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>

                    <SidebarLink to="market">
                        Market
                    </SidebarLink>

                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>

                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>

                {/* centering the button */}
                <SideBtnWrap>
                    {/* needs / because its a react router link  */}
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;