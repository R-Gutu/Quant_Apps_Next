'use client'
import { Modal } from '@mui/material';


const VideoModal = ({ open, setOpen, handleClose, src, noSupportMessage }: any) => {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      id="video-popup"
      className="modal d-flex"
    >
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
    </Modal>
  );
};

export default VideoModal;
