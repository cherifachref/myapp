import * as React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export const InfoCar = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const mycar=useSelector(state=>state.carReducer.car)

    const {variable} = useParams()

    const oneCar = mycar.find(el=>el._id===variable )



  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      

<Card sx={{ maxWidth: 690 ,backgroundColor:'#003075',color:'white' }}>
      <CardHeader style={{color:'white'}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {oneCar&&oneCar.userCar.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={[oneCar&&oneCar.make,'-',oneCar&&oneCar.model]}
      />

      <CardMedia
        component="img"
        height="388"
        image={oneCar&&oneCar.articleImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography >
        this car made in {oneCar&&oneCar.year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{backgroundColor:'#FFDEF1'}}>
        <IconButton aria-label="add to favorites">
          
        </IconButton>

        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
          <ExpandMoreIcon  />

        </ExpandMore>
        <Chip label= {`❤️ ${oneCar&&oneCar.likedByUserName.length}`}  />

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{backgroundColor:'#FFC0E4',color:'black'}} >
          <Typography paragraph style={{display:'flex'}}>Liked by :
          {oneCar&&oneCar.likedByUserName.map((el)=><Typography>-{el}-</Typography> )}
  
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      

    </div> 
  )
}
