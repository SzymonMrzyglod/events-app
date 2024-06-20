import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { FC } from 'react';

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Disagree</Button>
      <Button onClick={onConfirm} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);
