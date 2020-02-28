import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";

const PresentationComponent = (props) => {
    const[showPresentation, setShowPresentation] = useState(false);

    //TODO: get name image etc from props.
    return (<div>
            <Card style={{margin: "1em",padding: "1em", width: "20%"}}>
                <CardActionArea>
                    <CardMedia title={"BEKK"}
                               image="./images/bekk.png"
                    />

                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Bekk
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Presentasjon med Bekk 04.02.2020, med pizza!
                    </Typography>
                    <Button variant={"contained"} color={"primary"} onClick={() => setShowPresentation(true)}>Meld på!</Button>
                </CardContent>
            </Card>
            <Modal show={showPresentation} onHide={() => setShowPresentation(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Meld på presentasjon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Tekstbokser her</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
};
export default PresentationComponent;