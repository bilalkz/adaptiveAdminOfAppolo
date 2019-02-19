import { OPEN_MODAL, CLOSE_MODAL } from '../../../modules/constants';
import { actionCreator } from './actionCreator';

export const openModal = actionCreator(OPEN_MODAL);
export const closeModal = actionCreator(CLOSE_MODAL);
