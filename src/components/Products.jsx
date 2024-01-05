import styled from '@emotion/styled'
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

function Products() {

    const img = styled("img")({
        width:200,
        height:100,
        objectPosition:"center"
    })

  return (
        <Paper sx={{
            display:'flex',
            alignItems:'center',
            gap:2,
            mt:5,
            overflow:"hidden",
            }}>
            <img
                src='http://via.placeholder.com/200'
            />
            
            <Box flexGrow={1} sx={{display:"grid",gap:4}}>
                <Typography 
                variant='h6' 
                sx={{color:'black',pb:3}}>Product Name</Typography>
                <Typography sx={{color:'black'}}>Descripcion</Typography>

                <Button variant='contained'>Add </Button>
            </Box>
            <Box>
                <Typography sx={{color:'black',pr:2}}>$20</Typography>
            </Box>
            

        </Paper>
  )
}

export default Products