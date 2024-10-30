import "react-responsive-modal/styles.css";
import { Modal, ModalProps } from "react-responsive-modal";

export default function BaseModal(props: ModalProps) {
    const { showCloseIcon = false } = props;
    return (
        <Modal
            center
            showCloseIcon={showCloseIcon}
            {...props}
        >
            {props.children}
        </Modal>
    );
};