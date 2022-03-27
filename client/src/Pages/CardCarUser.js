import React, { useState } from 'react'

import { useDispatch,useSelector } from 'react-redux';
import { deleteCar } from '../JS/Actions/car';

import CircularProgress from '@mui/material/CircularProgress';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


const CardCarUser = ({carPrivate,kye}) => {

  const [id,setId] = useState('nothing')

  const loadcardel=useSelector(state=>state.carReducer.loadCarDel)
    const dispatch = useDispatch()
    
  return (
    <div>

<Card sx={{ maxWidth: 345  }} style={{ width: '18rem',marginBottom:'3rem',backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}` }}    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={(carPrivate&&carPrivate.articleImage)||'./empty-img.png'}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
           {carPrivate.userCar}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          Car Make : {carPrivate.make}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          Car Model : {carPrivate.model}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          Car Year : {carPrivate.year}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          liked by ❤️ : {carPrivate.likedByUserName.length} users
          </Typography>
          <Typography variant="h6" color="text.secondary">
          Names users like this car 👨‍🦱👱‍♀️ : {carPrivate.likedByUserName.join('-')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" color="error" onClick={()=> {
              dispatch(deleteCar(carPrivate._id))
              setId(carPrivate._id)
              return  
            } 
              } >Delete</Button>
            {loadcardel&&carPrivate._id===id?<CircularProgress sx={{float:'right'}} color="secondary" />:null}
    </Card>
















{ /*       <Card style={{ width: '18rem',marginBottom:'3rem',backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}` }}>
        <Card.Img variant="top" style={{ width: '18rem',height:'10rem' }} src={(carPrivate&&carPrivate.articleImage)||'./empty-img.png'} />
        <Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem style={{backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}`}} >Aded by user : {carPrivate.userCar} </ListGroupItem>
            <ListGroupItem style={{backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}`}} >Car Make : {carPrivate.make}</ListGroupItem>
            <ListGroupItem style={{backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}`}} >Car Model : {carPrivate.model}</ListGroupItem>
            <ListGroupItem style={{backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}`}} >Car Year : {carPrivate.year}  </ListGroupItem>
            <ListGroupItem style={{backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}`}} >liked by ❤️ : {carPrivate.likedByUserName.length} users  </ListGroupItem>
            <ListGroupItem style={{backgroundColor:`${carPrivate&&carPrivate.goldCar?'gold':''}`}} >Names users like this car 👨‍🦱👱‍♀️ : {carPrivate.likedByUserName.join('-')}  </ListGroupItem>
         
        </ListGroup>
            <Button variant="danger" onClick={()=> {
              dispatch(deleteCar(carPrivate._id))
              setId(carPrivate._id)
              return  
            } 
              } >Delete</Button>
            {loadcardel&&carPrivate._id===id?<CircularProgress sx={{float:'right'}} color="secondary" />:null}
        </Card.Body>
        </Card> 
      
      */ }

    </div>
  )
}

export default CardCarUser