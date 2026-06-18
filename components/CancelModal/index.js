import {
  Overlay,
  ModalBox,
  ModalTitle,
  ModalMessage,
  ButtonGroup,
  ConfirmCancelButton,
  KeepBookingButton,
  ErrorMessage,
} from "./CancelModal.styled";

export default function CancelModal({
  onConfirm,
  onClose,
  isCancelling,
  cancellationError,
}) {
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(event) => event.stopPropagation()}>
        <ModalTitle> Cancel Booking?</ModalTitle>
        <ModalMessage>
          Are you sure you want to cancel? This cannot be undone.
        </ModalMessage>

        {cancellationError && <ErrorMessage> {cancellationError}</ErrorMessage>}

        <ButtonGroup>
          <ConfirmCancelButton
            onClick={onConfirm}
            disabled={isCancelling}
            aria-label="Confirm booking cancellation"
          >
            {isCancelling ? "Cancelling..." : "Yes, Cancel"}
          </ConfirmCancelButton>
          <KeepBookingButton
            onClick={onClose}
            aria-label="Keep booking and close modal"
          >
            Keep Booking
          </KeepBookingButton>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
}
