import React from 'react';
import { CardHeader, Card, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import render from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from '@material-ui/core/Typography';
import FormDialog from './PopupDialog'
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
  card: {
    width: "50%",
    height: "25%",
    marginBottom: 15,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    flex: "1 0 20%"
  },
  card_list: {
    display: "flex",
    flexWrap: "wrap"
  },
  title: {
    marginLeft: 0,
    marginTop: 5,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function CardComponent() {
  const classes = useStyles();

  let bedpressJSONObject = {
    bedpress: {
      "0": {
        bedriftsnavn: "Politiet",
        dato: "24.12.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "1": {
        bedriftsnavn: "Bekk",
        dato: "14.05.22",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "2": {
        bedriftsnavn: "TV2",
        dato: "15.2.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "4": {
        bedriftsnavn: "Computas",
        dato: "24.12.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "5": {
        bedriftsnavn: "HVL",
        dato: "14.05.22",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "6": {
        bedriftsnavn: "UIB",
        dato: "15.2.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "7": {
        bedriftsnavn: "Sopra Steria",
        dato: "24.12.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "8": {
        bedriftsnavn: "McDonalds",
        dato: "14.05.22",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "9": {
        bedriftsnavn: "Norwegian",
        dato: "15.2.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "10": {
        bedriftsnavn: "Google",
        dato: "24.12.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "11": {
        bedriftsnavn: "Microsoft",
        dato: "14.05.22",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      },
      "12": {
        bedriftsnavn: "Apple",
        dato: "15.2.12",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis mi dui, non hendrerit lacus ullamcorper vel. Mauris porttitor augue."
      }
    }
  };

  let cardList = [];
  Object.keys(bedpressJSONObject.bedpress).forEach(index => {
    let card = bedpressJSONObject.bedpress[index];
    cardList.push(
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="140"
              className={classes.media}
              image="https://www.bindeleddet.no/uploads/companies/1082/logo/medium_LOGO-BEKKlogo.png"
              title="Bekk"
        />
        <CardContent>
         <Typography className={classes.title} color="textSecondary" align="left" gutterBottom>
          {card.dato}
         </Typography>
         <Typography variant="h5" component="h2">
            {card.bedriftsnavn}
          </Typography>
         <Typography className={classes.pos} color="textSecondary">
            {card.info}
          </Typography>

        </CardContent>
        </CardActionArea>
        <CardActions>
        <Grid container spacing={12}>
          <FormDialog prop={card} /></Grid>
        </CardActions>
      </Card>
    );
  });
{
   return (
   <div className={classes.card_list}>
     {cardList}
     </div>
     );
    }
}
