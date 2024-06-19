import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConfirmModal } from '..';
import Wrapper from '../../../../tests/wrapper';

describe('ConfirmModal', () => {
  const defaultProps = {
    isOpen: true,
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed?',
    onClose: jest.fn(),
    onConfirm: jest.fn(),
  };

  const setup = () => {
    render(
      <Wrapper>
        <ConfirmModal {...defaultProps} />
      </Wrapper>,
    );
  };

  test('should render the modal with the correct title and description', () => {
    setup();

    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to proceed?')).toBeInTheDocument();
  });

  test('should call onClose when the Disagree button is clicked', () => {
    render(
      <Wrapper>
        <ConfirmModal {...defaultProps} />
      </Wrapper>,
    );

    fireEvent.click(screen.getByText('Disagree'));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  test('should call onConfirm when the Agree button is clicked', () => {
    setup();

    fireEvent.click(screen.getByText('Agree'));
    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  test('should not be visible when isOpen is false', () => {
    render(
      <Wrapper>
        <ConfirmModal {...defaultProps} isOpen={false} />
      </Wrapper>,
    );

    expect(screen.queryByText('Confirm Action')).not.toBeInTheDocument();
    expect(screen.queryByText('Are you sure you want to proceed?')).not.toBeInTheDocument();
  });

  test('should be visible when isOpen is true', () => {
    setup();

    expect(screen.getByText('Confirm Action')).toBeVisible();
    expect(screen.getByText('Are you sure you want to proceed?')).toBeVisible();
  });
});
