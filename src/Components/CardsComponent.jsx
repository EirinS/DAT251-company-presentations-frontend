import React, {useState, useEffect} from 'react';
import { CardHeader, Card, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import render from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from '@material-ui/core/Typography';
import FormDialog from './PopupDialog'


const useStyles = makeStyles({
  cardd: {
    width: "25%",
    height: "25%",
    marginBottom: 15,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    textAlign: "center",
    flex: "1 0 20%"
  },  
  card_list: {
    display: "flex",
  flexWrap: "wrap"
  },
  title: {
    marginLeft: 5,
    marginTop: 5,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function CardComponent() {
  const classes = useStyles();

  const [presentations, setPresentations] = useState({});

  useEffect(() => {
    const fetchPresentations = async () => {
      fetch("/allPresentations").then(response => response.json()).then(fetchedPresentations => setPresentations(fetchedPresentations)).catch(error => console.log(error));
    }; });

  let cardList = [];
  Object.keys(presentations).forEach(index => {
    let card = presentations[index];
    cardList.push(
      <Card className={classes.cardd}>
       <Typography className={classes.title} color="textSecondary" align="left" gutterBottom>
        {card.dateOfPresentation}
       </Typography>
       <Typography variant="h5" component="h2">
          {card.companyPresenting.companyName}
        </Typography>
       <Typography className={classes.pos} color="textSecondary">
          {card.description}
        </Typography>
       <FormDialog prop={card}/>
      </Card>
    );
  });

   return (
   <div className={classes.card_list}>
     {cardList}
     </div>
     );
    
}
