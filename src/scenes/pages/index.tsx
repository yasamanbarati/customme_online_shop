import { Typography, styled } from "@mui/material"
import Layout from "./layout"


const AdvertisingNavbarSection = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width:'100%',
  height:'40px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.neutral.main,
  padding:'7px 0'
}))
export const Root = () => {
  return <>

    <AdvertisingNavbarSection variant='body2' color='neutral'>
        با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید 
    </AdvertisingNavbarSection>

  <Layout>
    <div>
      
    </div>
  </Layout>
  </>
}
