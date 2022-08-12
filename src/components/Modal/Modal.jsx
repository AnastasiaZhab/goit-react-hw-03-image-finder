import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    
    componentDidMount() {
        
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {

        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
                    if (e.code === 'Escape') {
                this.props.onClose();
            }
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    
    render() {

        return createPortal(
            <div onClick={this.handleBackdropClick}className={s.Overlay}>
                <div className={s.Modal}>
                    <img width='300px' height='300px' src="" alt="" />
                </div>
            </div>,
            modalRoot,
        )
    }
};

export default Modal;