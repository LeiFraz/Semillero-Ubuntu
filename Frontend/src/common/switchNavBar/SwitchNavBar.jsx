
import React, { useEffect } from 'react'
import NavBarAdmin from '../navBarAdmin/NavBarAdmin'
import NavBarDrawer from '../navBarDrawer/NavBarDrawer'
import UserAvatar from '../../components/userAuthenticated/UserAuthenticated';
import { useNavigate } from 'react-router-dom';


export const SwitchNavBar = () => {
    
    let rol = 'user';
    let initials;
    let userLastName;
    let userName;
    const navigate = useNavigate();

    if (localStorage.getItem('rol')) {
        rol = localStorage.getItem('rol');
        userName = localStorage.getItem('name');
        userLastName = localStorage.getItem('lastName');
        initials = userName.slice(0,1) + userLastName.slice(0,1); 
    }
    
    const handleLogout = () => {  
        localStorage.clear(); 
        navigate('/');
      }; 
      
    return (
        <>
            
            { rol === 'ADMIN'? (
                <NavBarAdmin 
                    showUserAvatar={true}   
                    userAvatar={<UserAvatar initials={initials} onLogout={handleLogout} />} 
                />
                ):(
                <NavBarDrawer/>
                )
            }
        </>
  )
}
