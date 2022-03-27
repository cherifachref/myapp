import React from 'react'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';




import { useDispatch } from 'react-redux';
import { deleteCar } from '../JS/Actions/car';

const CardCarDefault = ({car}) => {
  const dispatch = useDispatch()
  return (
    <div>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={car.articleImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Created by : {car.userCar}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Make : {car.make}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Year : {car.year}
          </Typography>
          <Button variant="contained" color="error" onClick={()=>dispatch(deleteCar(car._id))}>Delete</Button>

        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  )
}

export default CardCarDefault