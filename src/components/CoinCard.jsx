import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Accordion, AccordionDetails, FormLabel, Modal} from "@mui/material";
import {useState, useContext} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MyCoinsContext from "./context/my-coins-context";

const CoinCard = (props) => {
    const { coin } = props;
    const [showAccordion, setShowAccordion] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { addMyCoin } = useContext(MyCoinsContext);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 430,
        bgcolor: 'background.paper',
        border: '2px solid #f0f0f0',
        boxShadow: 24,
        p: 4,
    };

    const handleAddCoin = () => {
        addMyCoin(coin); 
        setOpenModal(false);
      };

    return (
        <Card sx={{ maxWidth: 380}} >
            <CardMedia  sx={{height: 250}}image={coin.image} onClick={() => setShowAccordion(!showAccordion)} />
            <CardContent onClick={() => setShowAccordion(!showAccordion)}>
                <Typography variant="h6" component="div">
                    {coin.name}
                </Typography>

            </CardContent>
            <Accordion hidden={!showAccordion}>
                <AccordionDetails>
                <FormLabel variant="h6" component="div">
                Symbol: <b>{coin.symbol}</b>
                </FormLabel>
                <FormLabel variant="h6" component="div">
                Current price: <b>{coin.current_price} $ </b>
                </FormLabel>
                    <Button onClick={() => setOpenModal(true)}>Save coin</Button>
                    <Modal open={openModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Do you want to save <b>{coin.name}</b> in your coin list?
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <Button onClick={handleAddCoin}>Yes</Button>
                                <Button onClick={() => setOpenModal(false)}>No</Button>
                            </Typography>
                        </Box>
                    </Modal>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};

export default CoinCard;
