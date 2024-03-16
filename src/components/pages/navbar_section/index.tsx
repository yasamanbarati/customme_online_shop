import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, styled } from '@mui/material'
import SearchInput from 'components/input/search'
import CustomizedButton from 'components/button'
import { CartIcon, LoginIcon, MagicPenIcon } from 'components/icons'
import { navbarLinks } from 'services/servers'

const NavbarSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width:'100%',
  height:'208px',
}))

const MainNavbarSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'100%',
  height:'105px',
}))

const MainNavbarButtonSection = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& Button:first-child':{
    paddingRight: 0,
    '& span':{
      margin:0
    }
  },
  '& Button:last-child':{
    paddingLeft: 0
  }
}))

const ConnectionsNavbarSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'100%',
  borderTop: `1px solid ${theme.palette.black.light}`,
}))

const LinksNavbarSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const MainLinks = styled(Link)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '1rem' ,
  color: 'black',
  textDecoration:'none',
  fontWeight:'400',
}))
const logoStyle ={
  display: 'flex', 
  textDecoration: 'none',
  '& img':{
    width:'189px',
    height:'51px',
  },
}
const magicPenButtonStyle ={
  whiteSpace:'nowrap',
  height:'48px',
  borderRadius:'8px',
  '& .MuiButton-startIcon':{
    margin:'0',
  }
}

const Navbar = () => {
  return (
    <NavbarSection
    container
    spacing={1}
    my={3}
    direction={'column'}
    sx={{padding:{md:'0px 108px'}}} 
    >

      <MainNavbarSection height={{md:'105px'}}>

        <Link to="/" style={logoStyle}>
          <img src={process.env.PUBLIC_URL + '/LOGO1.png'} alt="logo" />
        </Link>

        <SearchInput />

        <MainNavbarButtonSection>
          <CustomizedButton 
            size='medium' 
            variant='text' 
            startIcon={<LoginIcon/>}
            text='ورود | ثبت نام'
            color='black'
            sx={{ whiteSpace:'nowrap'}} />
            <CustomizedButton 
            size='medium' 
            variant='text' 
            startIcon={<CartIcon/>}
            text='سبد خرید'
            color='black'
            sx={{ whiteSpace:'nowrap'}} />
        </MainNavbarButtonSection>

      </MainNavbarSection>
      
      <ConnectionsNavbarSection height={{md:'64px'}}>

        <CustomizedButton 
          size='medium' 
          variant='contained' 
          startIcon={<MagicPenIcon/>}
          text='خودت طراحیش کن'
          color='secondary'
          sx={magicPenButtonStyle} />

        <LinksNavbarSection item md={10}>
          {navbarLinks.map((item , key)=>{
            return <MainLinks to={item.url} key={item.id}>{item.name}</MainLinks>
          })}
        </LinksNavbarSection>

      </ConnectionsNavbarSection>

    </NavbarSection>
  )
}

export default Navbar