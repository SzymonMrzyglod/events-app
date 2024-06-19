import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { format } from 'date-fns';
import { EventCard, EventCardProps } from '..';
import { DATETIME_FORMAT } from '../../../../utils/dates';
import { EventTypes } from '../../../../types/event';
import Wrapper from '../../../../tests/wrapper';

describe('EventCard', () => {
  const defaultProps: EventCardProps = {
    id: 1,
    title: 'Test Event',
    image: 'https://random-image-pepebigotes.vercel.app/api/random-image',
    date: new Date().toDateString(),
    description: 'This is a test event.',
    location: 'Test Location',
    type: EventTypes.Culture,
    onDelete: jest.fn(),
  };

  const setup = () => {
    render(
      <Wrapper>
        <EventCard {...defaultProps} />
      </Wrapper>,
    );
  };

  test('should render the event card with the correct details', () => {
    setup();

    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByText(format(defaultProps.date, DATETIME_FORMAT))).toBeInTheDocument();
    expect(screen.getByText('This is a test event.')).toBeInTheDocument();
    expect(screen.getByText(EventTypes.Culture)).toBeInTheDocument();
  });

  test('should open the confirm modal when "Delete event" is clicked', () => {
    setup();
    const deleteButton = screen.getByText('Delete event');

    fireEvent.click(deleteButton);

    expect(screen.getByText('Are you sure you want to delete the event?')).toBeInTheDocument();
  });

  test('should call onDelete when the delete is confirmed', () => {
    setup();
    const deleteButton = screen.getByText('Delete event');

    fireEvent.click(deleteButton);
    fireEvent.click(screen.getByText('Agree'));

    expect(defaultProps.onDelete).toHaveBeenCalledWith(defaultProps.id);
  });
});
