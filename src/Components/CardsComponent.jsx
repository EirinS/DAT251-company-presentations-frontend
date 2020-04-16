import React from 'react';
import { CardHeader, Card, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import render from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
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


export default function CardComponent(props) {
  const classes = useStyles();

  let cardList = [];
  props.presentations && Object.keys(props.presentations).forEach(index => {
    console.log(props.presentations);
    let card = props.presentations[index];

    cardList.push(
        <Card className={classes.card}>
          <Typography className={classes.title} color="textSecondary" align="left" gutterBottom>
            {card.dateOfPresentation}
          </Typography>
          <Typography variant="h5" component="h2">
            {card.companyPresenting.companyName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {card.description}
          </Typography>
        </Card>
    );

    /*let card = bedpressJSONObject.bedpress[index];
    cardList.push(
      <Card className={classes.card}>
       <Typography className={classes.title} color="textSecondary" align="left" gutterBottom>
        {card.dato}
       </Typography>
       <Typography variant="h5" component="h2">
          {card.bedriftsnavn}
        </Typography>
       <Typography className={classes.pos} color="textSecondary">
          {card.info}
        </Typography>
      </Card>
    );*/
  });
{
   return (
   <div className={classes.card_list}>
     {cardList}
     </div>
     );
    }
}
