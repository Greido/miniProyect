import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
function NavBar() {

    const [open,setOpen]=useState(false)
    
    const navLinks = [
        {
            title:"Home", path:"#"
        },
        {
            title:"News", path:"#news"
        },
        {
            title:"About me", path:"#aboutme"
        },
    ]
  
    return (

        <>
            
        <AppBar position='fixed'>
          <Toolbar sx={{justifyContent:"rigth"}}>
            <Box sx={{display:{xs:"block",sm:"none"}}}>
                <IconButton
                onClick={()=>setOpen(true)}
                color='inherit'
                size='large'
                >
                    <ViewHeadlineIcon/>
                </IconButton>
            </Box>

                <Typography sx={{flexGrow:1}}>
                    New
                
                
                </Typography>
                    <Box sx={{display:{xs:'none',sm:"block"}}}>
                       {navLinks.map(item=>(
                        <Button color='inherit' key={item}
                        >{item.title}
                        </Button>
                       ))}

                </Box>
                
          </Toolbar>
        </AppBar>

            <Drawer
                open={open}
                anchor='left'
                onClose={()=>setOpen(false)}
            >
                <NavListDrawer navLinks={navLinks}/>
            </Drawer>
        
        </>

   )
}

export default NavBar