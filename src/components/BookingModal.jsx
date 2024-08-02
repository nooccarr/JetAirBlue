import Modal from 'react-modal';

const BookingModal = ({ isBookingModalOpen, handleBookingModalClose }) => {
  return (
    <Modal
      isOpen={isBookingModalOpen}
      onRequestClose={handleBookingModalClose}
      contentLabel="Booking Modal"
      className=""
      overlayClassName=""
    >
      <div className="h-11 bg-blue-300">Booking Modal</div>
    </Modal>
  );
};

export default BookingModal;

// TODO: click on Book a Tour button set isBookingModalOpen to true
