import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { RiDeleteBinLine } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";
import { RiPlayLargeLine } from "react-icons/ri";
import FormVideo from '../../Pages/NewVideo/FormVideo';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '65%',
  bgcolor: 'black',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
};


const VideoCard = (props) => {

    
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => setModal(!modal);


    const [editModal, setEditModal] = React.useState(false);
    const toggleEditModal = () => setEditModal(!editModal);


    
    const {dataCard} = props;
    const {onDelete} = props;
    const {onEdit} = props;

  return (<>
  
    <Card sx={{ maxWidth: 345,minWidth: 345, maxHeight: 300 , backgroundColor: 'black', color: 'white', 
            borderRadius: '20px', boxShadow: '10px 10px 0 0 rgba(255, 255, 255, 0.795)',
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
                
            }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={dataCard.imagen}
          alt={dataCard.titulo}
          onClick={toggleModal}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataCard.titulo}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'white', 
              maxHeight: '38px', 
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '10px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.5)',
                },
              },
            }} 
          >
            {dataCard.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
           <RiDeleteBinLine style={{color: 'white', fontSize: '30px',
                                cursor: 'pointer', position: 'relative',
                                left: '20%'}}
                            onClick={onDelete}
           /> 
            <RiEditLine style={{color: 'white', fontSize: '30px',
                                cursor: 'pointer', position: 'relative',
                                left: '38%'}} 
                            onClick={toggleEditModal}  />
            <RiPlayLargeLine style={{color: 'white', fontSize: '30px', cursor: 'pointer', position: 'relative', left: '55%'}}
            onClick={toggleModal} />
      </CardActions>
    </Card>

    {modal && (

            <div>
              <Modal
                open={modal}
                onClose={toggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                    <iframe width="100%" height="100%" 
                    src={dataCard.video} title={dataCard.titulo}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </Box>
              </Modal>
            </div>
          )
        }



    {editModal && (
                <Modal
                    open={editModal}
                    onClose={toggleEditModal}
                    aria-labelledby="edit-modal-title"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '20px',
                    }}>
                        <FormVideo 
                            initialData={dataCard}
                            onSubmit={(updatedData) => {
                                onEdit(dataCard.id, updatedData);
                                toggleEditModal();
                            }}
                        />
                    </Box>
                </Modal>
            )} 

          </>
  );
}

export default VideoCard;