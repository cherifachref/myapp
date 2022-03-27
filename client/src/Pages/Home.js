import React from 'react'

import { useSelector } from 'react-redux';
import { CardCar } from './CardCar';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import './Nav.css'









function Home() {


   
  const mycar=useSelector(state=>state.carReducer.car)
  
  const load=useSelector(state=>state.carReducer.loadUser)


  
  return (
    
  <div> 

    <div style={{textAlign:'center'}} > <img src='./bmw123.gif' alt='bmw' style={{borderRadius:'5%',width:'60rem'}} />  </div>

    <div style={{display:'flex',flexWrap:'wrap'}}>

      <div  className='sticky' >
        
        <Stack direction="row" spacing={2}   >
          <Paper style={{maxHeight:550,width:270, overflow: 'auto',backgroundImage:'url(./bgselectcar.jpg)',color:'white',borderRadius:'5%'}} >
            <MenuList  >
            <a style={{textDecoration: 'none',color:'white'}} href='#BMW'><MenuItem value={'BMW'}>BMW</MenuItem></a>
            <a style={{textDecoration: 'none',color:'white'}} href='#Audi'><MenuItem value={'Audi'}>Audi</MenuItem></a>
            <a style={{textDecoration: 'none',color:'white'}} href='#Alfa Romeo'><MenuItem value={'Alfa Romeo'}>Alfa Romeo</MenuItem></a>
            <a style={{textDecoration: 'none',color:'white'}} href='#Aston-Martin'><MenuItem value={'Aston-Martin'}>Aston-Martin</MenuItem></a>
              <MenuItem value={'Bugatti'}>Bugatti</MenuItem>
              <MenuItem value={'Chevrolet'}>Chevrolet</MenuItem>
              <MenuItem value={'Ferrari'}>Ferrari</MenuItem>
              <MenuItem value={'Toyota'}>Toyota</MenuItem>
              <MenuItem value={'Volkswagen Group'}>Volkswagen Group</MenuItem>
              <MenuItem value={'Hyundai'}>Hyundai</MenuItem>
              <MenuItem value={'General Motors'}>General Motors</MenuItem>
              <MenuItem value={'Ford'}>Ford</MenuItem>
              <MenuItem value={'Nissan'}>Nissan</MenuItem>
              <MenuItem value={'Honda'}>Honda</MenuItem>
              <MenuItem value={'Fiat Chrysler Automobiles'}>Fiat Chrysler Automobiles abcde</MenuItem>
              <MenuItem value={'Renault'}>Renault</MenuItem>
              <MenuItem value={'PSA Group'}>PSA Group</MenuItem>
              <MenuItem value={'Suzuki'}>Suzuki</MenuItem>
              <MenuItem value={'SAIC'}>SAIC</MenuItem>
              <MenuItem value={'Daimler'}>Daimler</MenuItem>
              <MenuItem value={'Geely'}>Geely</MenuItem>
              <MenuItem value={'Tesla'}>Tesla</MenuItem>
              <MenuItem value={'Volvo'}>Volvo</MenuItem>
              <MenuItem value={'Jeep'}>Jeep</MenuItem>
              <MenuItem value={'Jaguar'}>Jaguar</MenuItem>

            </MenuList>
          </Paper>  
        </Stack> 
      
      </div>

   
      <div>
        <div style={{marginLeft:'280px'}} id='BMW'>
            <div style={{height:'3rem'}}>{load?<Box sx={{ display: 'flex',justifyContent:'center' }}>
              <CircularProgress color="secondary" /></Box>:null}
            </div>
            <img src='./logo-bmw.png' alt='bmw' style={{width:'80px',position:'absolute',left:'20rem'}} /><br/>
            <div style={{textAlign:'center',fontSize:'2rem',fontFamily:'fantasy',color:'orange'}}>
              B.M.W
            </div>

            <div style={{backgroundColor:'orange',height:'3px',width:'50%',margin: 'auto'}}>
            </div>
            <br/>

            <div style={{display:'flex' ,justifyContent:'space-around',flexWrap:'wrap'}}>
              {mycar.filter(el=>el.make==='BMW'&&!el.goldCar).map((el,i)=><CardCar kye={i}  car={el} />)}
            </div>
        </div>


        <div style={{marginLeft:'280px'}} id='Audi'>
            <div style={{height:'3rem'}}>{load?<Box sx={{ display: 'flex',justifyContent:'center' }}>
              <CircularProgress color="secondary" /></Box>:null}
            </div>
            <img src='./logo-audi.png' alt='bmw' style={{width:'150px',position:'absolute',left:'20rem'}} /><br/>
            <div style={{textAlign:'center',fontSize:'2rem',fontFamily:'fantasy',color:'orange'}}>
              Audi
            </div>

            <div style={{backgroundColor:'orange',height:'3px',width:'50%',margin: 'auto'}}>
            </div>
            <br/>

            <div style={{display:'flex' ,justifyContent:'space-around',flexWrap:'wrap'}}>
              {mycar.filter(el=>el.make==='Audi'&&!el.goldCar).map((el,i)=><CardCar kye={i}  car={el} />)}
            </div>
        </div>

        <div style={{marginLeft:'280px'}} id='Alfa Romeo'>
            <div style={{height:'3rem'}}>{load?<Box sx={{ display: 'flex',justifyContent:'center' }}>
              <CircularProgress color="secondary" /></Box>:null}
            </div>
            <img src='./logo-alpharomeo.png' alt='bmw' style={{width:'80px',position:'absolute',left:'20rem'}} /><br/>
            <div style={{textAlign:'center',fontSize:'2rem',fontFamily:'fantasy',color:'orange'}}>
            Alfa Romeo
            </div>

            <div style={{backgroundColor:'orange',height:'3px',width:'50%',margin: 'auto'}}>
            </div>
            <br/>

            <div style={{display:'flex' ,justifyContent:'space-around',flexWrap:'wrap'}}>
              {mycar.filter(el=>el.make==='Alfa Romeo'&&!el.goldCar).map((el,i)=><CardCar kye={i}  car={el} />)}
            </div>
        </div>


        <div style={{marginLeft:'280px'}} id='Aston-Martin'>
            <div style={{height:'3rem'}}>{load?<Box sx={{ display: 'flex',justifyContent:'center' }}>
              <CircularProgress color="secondary" /></Box>:null}
            </div>
            <img src='./logo-Aston-Martin.jpg' alt='bmw' style={{width:'130px',position:'absolute',left:'20rem',borderRadius:'20%'}} /><br/>
            <div style={{textAlign:'center',fontSize:'2rem',fontFamily:'fantasy',color:'orange'}}>
            Aston-Martin
            </div>

            <div style={{backgroundColor:'orange',height:'3px',width:'50%',margin: 'auto'}}>
            </div>
            <br/>

            <div style={{display:'flex' ,justifyContent:'space-around',flexWrap:'wrap'}}>
              {mycar.filter(el=>el.make==='Aston-Martin'&&!el.goldCar).map((el,i)=><CardCar kye={i}  car={el} />)}
            </div>
        </div>


        <div style={{marginLeft:'280px'}} id='Aston-Martin'>
            <div style={{height:'3rem'}}>{load?<Box sx={{ display: 'flex',justifyContent:'center' }}>
              <CircularProgress color="secondary" /></Box>:null}
            </div>
            <img src='./logo-other.png' alt='bmw' style={{width:'150px',position:'absolute',left:'20rem',borderRadius:'20%'}} /><br/>
            <div style={{textAlign:'center',fontSize:'2rem',fontFamily:'fantasy',color:'orange'}}>
            Other
            </div>

            <div style={{backgroundColor:'orange',height:'3px',width:'50%',margin: 'auto'}}>
            </div>
            <br/>

            <div style={{display:'flex' ,justifyContent:'space-around',flexWrap:'wrap'}}>
              {mycar.filter(el=>(el.make!=='Aston-Martin'&&'Alfa Romeo'&&'Audi'&&'BMW'&&!el.goldCar) ).map((el,i)=><CardCar kye={i}  car={el} />)}
            </div>
        </div>

      </div>



    </div>
        
        
  </div>
  )
}

export default Home