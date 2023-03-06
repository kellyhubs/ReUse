import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

    return (
        // When clicked on, the toggle of the sidebar will open(show) only if the screen is small
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            {/* side bar items */}
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>

                    <SidebarLink to="explore" onClick={toggle}>
                        Explore
                    </SidebarLink>

                    <SidebarLink to="signup" onClick={toggle}>
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