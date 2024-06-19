import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { FC, PropsWithChildren, ReactElement, Suspense } from 'react';
import { EventDetail, Events, Home } from '../pages';
import routes from './routes';
import { MainLayout } from '../layout/main';
import { Calendar } from '../pages/Calendar';
import { AddEvent } from '../pages/Events/AddEvent';

export const Routes: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const { home, events, event, addEvent, calendar } = routes;

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <MainLayout>
          <Switch>
            <Route path={home} element={<Home />} />
            <Route path={events} element={<Events />} />
            <Route path={event} element={<EventDetail />} />
            <Route path={addEvent} element={<AddEvent />} />
            <Route path={calendar} element={<Calendar />} />
          </Switch>
        </MainLayout>
      </Suspense>
      {children}
    </BrowserRouter>
  );
};
