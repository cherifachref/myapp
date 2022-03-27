import React from 'react'

import { useDispatch } from 'react-redux';
import { deleteUser } from '../JS/Actions/admin';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUserDefault = ({allUser}) => {
  const dispatch = useDispatch()

  return (
    <div style={{diplay:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>

<Card sx={{ maxWidth: 400,marginBottom:'2rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={allUser.imageProfile||'noAvatar.jpg'}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          User : {allUser.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Email : {allUser.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Phone : {allUser.phone}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Super User : {allUser.superUser}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <Button variant="contained" color="error"  onClick={()=>dispatch(deleteUser(allUser._id))} >Delete this User</Button>
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  )
}

export default CardUserDefault