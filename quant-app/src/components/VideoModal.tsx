'use client'
import { Modal } from '@mui/material';


const VideoModal = ({ open, setOpen, handleClose, src, noSupportMessage } : any) => {
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <div className="modal d-flex" id="video-popup" onClick={()=>console.log("CLICKEDD")}>
        <div className="modal-content">
          <span className="close-modal" onClick={handleClose} />

          <video
            id="localVideo"
            width="100%"
            controls
            key={src}
            autoPlay
          >
            <source src={src} type="video/mp4" />

            {noSupportMessage}
          </video>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
