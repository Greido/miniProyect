import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
// iconos
import BungalowIcon from '@mui/icons-material/Bungalow';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import CampaignIcon from '@mui/icons-material/Campaign';

import { NavLink } from 'react-router-dom';

function NavListDrawer({ navLinks }) {
  return (
    <>
      <Box
        sx={{
          width: 200,
          color: 'black'
        }}
      >

        <Divider />
        <nav>
          <List>
            {navLinks.map(item => (
              <ListItem key={item.title}>
                <ListItemButton>
                  <ListItemText sx={{ color: 'black' }}>
                    {item.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  )
}

export default NavListDrawer
