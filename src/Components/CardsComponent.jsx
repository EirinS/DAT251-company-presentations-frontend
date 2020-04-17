import React from 'react';
import {Card, Grid, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CompanyLogoComponent from "./CompanyLogoComponent";

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

export default function CardComponent(props) {
  const classes = useStyles();
  let cardList = [];

  props.presentations && Object.keys(props.presentations).forEach(index => {
    console.log(props.presentations);
    let card = props.presentations[index];

    cardList.push(
        <Card className={classes.card}>
            <CardActionArea>
                <CompanyLogoComponent logo={card.companyPresenting.logo}/>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" align="left" gutterBottom>
                        {card.dateOfPresentation}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {card.companyPresenting.companyName}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {card.description}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={12}>
                    <Button>Meld på</Button></Grid>
            </CardActions>
        </Card>
    );
  });
   return (
   <div className={classes.card_list}>
     {cardList}
     </div>
     );
}
