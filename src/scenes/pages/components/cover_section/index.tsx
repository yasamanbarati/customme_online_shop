import { Grid, styled } from "@mui/material"
import CustomizedButton from "components/button"
import { BrushIcon } from "components/icons"

 
const MainCoverSection = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width:'100%',
    height:'auto',
    padding:'60px 73px',
    position:'relative',
    backgroundColor: theme.palette.primary.light,
    '&::after':{
        content: `''`,
        position:'absolute',
        width:'241px',
        height:'381px',
        borderRadius:'8px',
        background: theme.palette.neutral.main,
        boxShadow:  `12px -12px 0px ${theme.palette.primary.light},`,
        top:'72px',
        right:'-215px',
        zIndex:'2',
        transform: 'rotate(9deg)',
    },
    '&::before':{
        content: `''`,
        position:'absolute',
        width:'241px',
        height:'381px',
        borderRadius:'8px',
        background: theme.palette.neutral.main,
        boxShadow:  `12px -12px 20px ${theme.palette.primary.light}`,
        bottom:'-47px',
        left:'-114px',
        zIndex:'2',
        transform: 'rotate(-9deg)',
    }
  }))

const MainInformationCover = styled(Grid)(({ theme }) => ({
    '& h1':{
        lineHeight: '140%',
    },
    '& p':{
        lineHeight: '180%',
        fontWeight:'400',
    },
    '& div':{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:'30px',
        '& Button:first-child':{
          '& span':{
            margin:0
          }
        },
    }
}))
const MainImageCover = styled(Grid)(({ theme }) => ({

    '& img':{
        
        width:'100%',
        height:'100%',
    }
}))
const CoverSection = () => {
  return (
    <MainCoverSection container spacing={1}>
        <MainInformationCover item md={4}>
            <h1>آنلاین شاپ کاستومی</h1>
            <p>آنلاین شاپ کاستومی محصولات متنوعی  داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید </p>

            <div>
                <CustomizedButton 
                size="medium" 
                variant="contained" 
                color="secondary"
                startIcon={<BrushIcon />}
                text="شروع طراحی"
                />
                <CustomizedButton 
                size="medium" 
                variant="outlined" 
                color="secondary"
                text="دیدن محصولات"
                />
            </div>

        </MainInformationCover>

        <MainImageCover item md={7}>
            <img src={process.env.PUBLIC_URL + '/images/cover.png'} alt="cover" />
        </MainImageCover>
    </MainCoverSection>
  )
}

export default CoverSection