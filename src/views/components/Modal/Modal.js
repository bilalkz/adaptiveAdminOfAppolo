import React, { Fragment, Children } from 'react';
import { connect } from 'react-redux';
import { closeModal } from './modal.action';

const Modal = (props) => {

    const {
        close,
        children,
        title,
        name = 'default',
        isVisible,
        options,
        id = 'default',
        className = {}
    } = props;

    if (isVisible) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }

    return (
        <Fragment>
            <div
                className={`${(isVisible && name === id) ? 'show' : ''} modal fade popup-styles`}
                style={{ display: (isVisible && name === id) ? 'block' : 'none', paddingRight: '17px' }}>
                <div className={`modal-dialog ${className.dialog || 'modal-md'}`}>
                    <div className="modal-content">
                        <div className="content-popup">
                            <button
                                type="button"
                                className="close"
                                onClick={close}
                                data-dismiss="modal">
                                <i className="icon-close font-md d-block" />
                            </button>

                            {/* Start Modal Header */}
                            <div className="modal-header">
                                <h4 className="title max-width-full mb-0">{title || (options && options.header)}</h4>
                            </div>
                            {/* End Modal Header */}
                            {children(props)}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export const ModalBody = (props) => (
    <div className="modal-body modal-padding">
        {Children.only(props.children)}
    </div>
);


export const ModalFooter = (props) => (
    <div className="modal-footer">
        {Children.only(props.children)}
    </div>
);

Modal.propTypes = {
    children: (props, propName, componentName) => {
        if (React.Children.count(props[propName]) > 2)
            return new Error(`Only two children allowed one for modal body and one for modal footer`);
        else {
            return null;
        }
    }
};

const mapStateToProps = ({ ModalReducer }) => (
    {
        isVisible: ModalReducer.isVisible,
        name: ModalReducer.name,
        options: ModalReducer.options
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        close: () => dispatch(closeModal()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
