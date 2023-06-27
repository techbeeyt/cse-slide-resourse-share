"use client";

import useEventSlice from '../hooks/globalStates/useEventsSlice';
import useSWR from 'swr';
import fetcherPOST from '../libs/fetcherFuncPOST';

const ClientGlobalStates = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/events", fetcherPOST);
  const { setEvents, setMutator } = useEventSlice();
  if(!isLoading && !error && data) {
    setEvents(data);
    setMutator(mutate);
  }
  return null;
}

export default ClientGlobalStates
