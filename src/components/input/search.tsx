import React from 'react'
import {IconButton, InputBase, styled } from '@mui/material'
import { SearchIcon } from 'components/icons'

const InputSection = styled('div')(({ theme }) => ({
  position:'relative',
  width:'596px',
  height:'48px',
  borderRadius:'16px',
  padding:'11px 24px',
  border: `1px solid ${theme.palette.primary.light}`,
  display:'flex',
  justifyContent:'flex-start',
  alignItems:'center',
  '& button':{
    position:'absolute',
    left:'10px',
    '& svg':{
      width:'24px',
      height:'24px', 
    }
  }
}))

const SearchInput = () => {
  return (
    <InputSection>
    <InputBase
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        sx={{width:'90%',height:'100%'}}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
      </InputSection>

  )
}

export default SearchInput