import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCar } from '../JS/Actions/car';



import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';





export const  CardCar = ({car}) => {

  




  const navigate = useNavigate()

  const dispatch = useDispatch()

  const user = useSelector(state=>state.userReducer.user)

  const loadcar = useSelector(state=>state.carReducer.loadCar)

  



  return (
    <div>

<Card sx={{ width: 350,marginBottom:'3rem',marginRight:'1rem',backgroundColor:`${car&&car.goldCar?'#FFD700':'#003075'}`,color:'white' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={(car&&car.userCarImage)||('./noAvatar.png')} style={{width:'40px'}} alt="avatar" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={[<span style={{fontSize:'1.4rem'}}>{car&&car.make}</span>,'-',car&&car.model]}
        
      /><h6 style={{marginLeft:'1rem'}}> {car.userCar} </h6>
      <CardMedia
        component="img"
        height="200"
        image={(car&&car.articleImage)||'./empty-img.png'}
        alt="Paella dish"
      />
      <CardActions disableSpacing style={{backgroundColor:'#FFDEF1',justifyContent:'space-around'}}>
      <Link to={`/${car&&car._id}`} ><Button  variant="contained"  > More info </Button></Link>{loadcar?<CircularProgress color="success" />:null}
        <IconButton aria-label="add to favorites">
        
         
          <FavoriteIcon  style={{color:`${(car&&car.likedByUserId.indexOf(user._id)> -1 )?'red':''}`}} onClick={()=>{ 

            
            


            

            //if user not connected then go to login or register
            if(user._id===undefined){
              navigate( "/login")
            }

              //if my id not found in liked then add like
              else if(car.likedByUserId.indexOf(user._id)< 0 ){
              let id = car._id
              let tab=car.likedByUserId
              let tab2=car.likedByUserName
              tab.push(user._id)
              tab2.push(user.name)
              let newLike = {likedByUserId: tab,likedByUserName: tab2 }
              
              dispatch (updateCar({newLike,id}))
            }
            //if my id founded in liked then dislike
            else {
              let id = car._id
              let tab=car.likedByUserId
              let tab2=car.likedByUserName

              let index=tab.indexOf(user._id)
              let index2=tab2.indexOf(user.name)
              tab.splice(index, 1)
              tab2.splice(index2, 1)

              let newLike = {likedByUserId: tab,likedByUserName: tab2 }
              dispatch (updateCar({newLike,id}))

            }

            

            return true
            }  
          }  /> <h6 style={{marginLeft:'1rem'}}>{`${car&&car.likedByUserId.length}`}</h6>

        </IconButton>

      </CardActions>
      
    </Card>

    </div>
  )
}

