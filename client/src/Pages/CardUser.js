
import React,{ useState } from 'react'

import { useSelector,useDispatch } from 'react-redux';
import { postCar } from '../JS/Actions/car'
import { updateSuperUser, updateUser } from '../JS/Actions/user';
import CardCarUser from './CardCarUser';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardActionArea } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Alert from '@mui/material/Alert';

import CircularProgress from '@mui/material/CircularProgress';
import Switch from '@mui/material/Switch';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const Input = styled('input')({
  display: 'none',
});

const label = { inputProps: { 'aria-label': 'Switch demo' } };




function CardUser() {

  const [make0, setMake0] = React.useState('');



  const handleChange = (event) => {
    setMake0(event.target.value);



    if(event.target.value!=='Other'){
    setMake(event.target.value)

  }
  if(event.target.value==='Other'){
    setMake('')

  }
    
  };
  



    const user = useSelector(state=>state.userReducer.user)
    const car = useSelector(state=>state.carReducer.car)
    
    const loadcar=useSelector(state=>state.carReducer.loadCar)

    let GlobalLikeMyCars = car.filter((el)=>el.userCar===user.name).map(el=>el.likedByUserName).filter(el=>el.length>0).map(el=>el.length).reduce((a, b) => a + b, 0)




    const dispatch = useDispatch()
    
    const userCar = user.name
    const [make,setMake]= useState("")
    const [model,setModel]= useState("")
    const [year,setYear]= useState("")
    const [articleImage,setArticleImage]= useState("")
    const [imageProfile,setImageProfile]= useState(user.imageProfile)

    const [goldCar, setGoldCar] = useState(false)

    const verifGoldCar=(e)=>{
      setGoldCar(e.target.checked)
      

    }

    console.log('goldcar is :',goldCar)

  

    

    
//tttttttttttttttttttttttttt
const uploadImage = async(e)=>{
  const file = e.target.files[0];
  const base64 = await convertBase64(file)
  setArticleImage(base64)
}

const uploadImageProfile = async(e)=>{
  const file = e.target.files[0];
  const base64 = await convertBase64(file)
  setImageProfile(base64) 
}

let upUser = {imageProfile:imageProfile}
let id=user._id

const saveImageProfile = () => {
  dispatch(updateUser({id,upUser}))
}

let superUserTrue={superUser:'true'}

if (user.superUser==='false'&&GlobalLikeMyCars>10){
  dispatch(updateSuperUser({id,superUserTrue}))
}






const makeCar = (e)=>{
  setMake(e.target.value)
}

const modelCar = (e)=>{
  setModel(e.target.value)
}
const yearCar = (e)=>{
  setYear(e.target.value)
}

const newAddCar =()=>{
  let newObjectCar ={
    userCar : userCar,
    userCarImage : imageProfile,
    make : make,
    model : model,
    year : year,
    articleImage : articleImage,
    goldCar:goldCar
  }

  console.log(newObjectCar)

  if(make.length<31){dispatch(postCar(newObjectCar))}
}









const convertBase64 =(file)=>{
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = () =>{
      resolve(fileReader.result);

    }
    fileReader.onerror = (error)=> {
      reject(error);
    }
  })
}

//url(./bgGold.jpg)
        
  return (
    <div style={{backgroundImage:` ${user.superUser==='true'?'url(./bgGold.jpg)':'null'} `}} >
        <div style={{display:'flex',justifyContent:'space-around'}}>

          <Card sx={{ maxWidth: 600,maxHeight:450,backgroundColor:'#052A52',color:'white',borderRadius:'5%' }}>
                <CardActionArea>
              
                <CardMedia
                  component="img"
                  height="250px"
                  
                  image={imageProfile || user.imageProfile || "./noAvatar.jpg"}
                  alt="green iguana" 
                /> 
                <Button variant="outlined" color="primary" component="label" style={{float:'right'}}>
                  <input type="file" name='imageProfile' onChange={(e)=>uploadImageProfile(e)} hidden/>
                  <AddAPhotoIcon fontSize="large"  />
                </Button><br/><br/><Button onClick={()=>saveImageProfile()} style={{float:'right'}}><CheckIcon color="success" /></Button>
                
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" >   
                    <AccessibilityIcon style={{float:'left'}}/> {user.name} 
                    </Typography>
                    <Typography  gutterBottom variant="h6" color="white">
                    <ContactMailIcon style={{float:'left'}} /> {user.email} 
                    </Typography>
                    <Typography  gutterBottom variant="h6" color="white">
                    <LocalPhoneIcon style={{float:'left'}} /> {user.phone} 
                    </Typography>
                  </CardContent>
                </CardActionArea>
          </Card> 



    



            {/* FORM ADD CARS */}

      <div >
        {/*'#DAE8FF' */}

      <Box
      sx={{
        width: 300,
        height: 480,
        backgroundColor: `${goldCar?'#FFD700':'#DAE8FF'}`,
        padding:'20px',
        borderRadius:'10%'
        
      }}
    >
      <Box sx={{ minWidth: 200  , top:'200px'  }}>
      <FormControl fullWidth      >
        <InputLabel id=""   >Make</InputLabel>
        
        <Select 
          labelId=""
          id=""
          value={make0}
          label="Make"
          onChange={handleChange} 
          MenuProps={MenuProps}
          
          
        >
          <MenuItem value={'BMW'}>BMW</MenuItem>
          <MenuItem value={'Audi'}>Audi</MenuItem>
          <MenuItem value={'Alfa Romeo'}>Alfa Romeo</MenuItem>
          <MenuItem value={'Aston-Martin'}>Aston-Martin</MenuItem>
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
          <MenuItem value={'Fiat Chrysler Automobiles'}>Fiat Chrysler Automobiles</MenuItem>
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
          
    <MenuItem sx={{fontSize:'1.2rem',color:'blue'}} value={'Other'}>Other</MenuItem>
          




          
          
        </Select>
       
      </FormControl>
    </Box><br/>
      {make0==='Other'&&<TextField id="outlined-basic" label="Make.."  value={make0==='Other'?null:make0} onChange={(e)=>makeCar(e)}  color="success" focused sx={{backgroundColor:'#C3D9FD'}} />}<br/><br/>
      <TextField id="outlined-basic" label="Model"  color="success" focused sx={{backgroundColor:'#C3D9FD'}} onChange={(e)=>modelCar(e)} /><br/><br/>
      <TextField id="outlined-basic" label="Made in(Year: like 2005)"  color="success" focused sx={{backgroundColor:'#C3D9FD'}}onChange={(e)=>yearCar(e)} /><br/><br/>
      
      {user.superUser==='true'&&<>   <Switch {...label }  onClick={(e)=>verifGoldCar(e)} />   <span style={{fontWeight:'bold'}}>Gold car</span></>}

      
      
     
      <div style={{float:'right'}}><img src={articleImage} alt='image22' style={{maxWidth:'150px',maxHeight:'90px'}} />
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={(e)=>uploadImage(e)} />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </div><br/><br/><br/><br/>
      <Button style={{float:'right'}} variant="contained" onClick={()=>newAddCar()} >submit</Button><div style={{textAlign:'center'}}>{loadcar?<CircularProgress color="secondary" />:null}</div>
      {make.length>30?<Alert severity="error">make car max 30-char!</Alert>:null}
      
    </Box>


    </div>



      </div>
      <br/>

      {user.superUser==='false'&&<div style={{backgroundColor:'gold',textAlign:'center'}}><h2>To Be gold User You need to : Your  Global-Cars Liked by over 10 person❤️  </h2></div>} <br/>
      {user.superUser==='true'&&<div style={{backgroundColor:'gold',textAlign:'center'}}><h2>Welcome Super User !! You Can post now in Gold Cars collection!</h2></div>} <br/> 
      <div style={{backgroundColor:'orange',textAlign:'center'}}><h1> My Global Cars Liked By 💗 : {GlobalLikeMyCars} 🙍--Person-- </h1></div>
      <br/>
      <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      {car.filter((el)=>el.userCar===user.name).map((el)=><CardCarUser carPrivate={el} />)}
      

      
      </div>
    </div>
  )
}

export default CardUser