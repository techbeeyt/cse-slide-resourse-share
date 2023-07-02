"use client";

export const revalidate = 0
export const dynamic = 'force-dynamic'
import GoBack from '@/app/components/GoBack';
import React from 'react'
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import AddEventModalBtn from '../routines/components/AddEventModalBtn';
import useSWR from 'swr';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ActionButtonGroup from '../routines/components/ActionButtonGroup';
import { Prisma } from '@prisma/client';
import fetcherPOST from '@/app/libs/fetcherFuncPOST';



const EventsPage = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/events", fetcherPOST);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-3 mb-4">
        <GoBack label="Go Back" />
        <AddEventModalBtn mutator={mutate} />
      </div>
      <PrimaryContainer
        title='Events'
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-primary rounded-md">
              <TableHead className="whitespace-nowrap rounded-t">Event Name</TableHead>
              <TableHead className="whitespace-nowrap">Event Date</TableHead>
              <TableHead className="whitespace-nowrap">Event Time</TableHead>
              <TableHead className="whitespace-nowrap">Description</TableHead>
              <TableHead className="whitespace-nowrap text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              isLoading ? (
                <TableRow>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              ) : (
                data.map((event: Prisma.EventCreateInput, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">{event.title}</TableCell>
                    <TableCell className="whitespace-nowrap">{moment(event.date).format("DD-MM-YYYY")}</TableCell>
                    <TableCell className="whitespace-nowrap">{moment(event.time).format("HH:MM a")}</TableCell>
                    <TableCell className="w-auto">{event.description}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      <ActionButtonGroup id={event.id as string} mutator={mutate as any} />
                    </TableCell>
                  </TableRow>
                ))
              )
            }
          </TableBody>
        </Table>
      </PrimaryContainer>
    </div>
  )
}

export default EventsPage;
