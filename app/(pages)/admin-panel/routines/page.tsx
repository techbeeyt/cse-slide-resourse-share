"use client";

export const revalidate = 0
export const dynamic = 'force-dynamic'
import GoBack from '@/app/components/GoBack';
import React from 'react'
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import AddEventModalBtn from './components/AddEventModalBtn';
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
import ActionButtonGroup from './components/ActionButtonGroup';
import { Prisma } from '@prisma/client';
import fetcherPOST from '@/app/libs/fetcherFuncPOST';



const RoutinesPage = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/routine", fetcherPOST);
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
              <TableHead className="whitespace-nowrap rounded-t">Course Name</TableHead>
              <TableHead className="whitespace-nowrap">Weekday</TableHead>
              <TableHead className="whitespace-nowrap">Start Time</TableHead>
              <TableHead className="whitespace-nowrap">Room No</TableHead>
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
                data.map((event: Prisma.ClassRoutineCreateInput, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">{event.course_title}</TableCell>
                    <TableCell className="whitespace-nowrap">{event.day}</TableCell>
                    <TableCell className="whitespace-nowrap">{event.start_time as string}</TableCell>
                    <TableCell className="w-auto">{event.room_no}</TableCell>
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

export default RoutinesPage;
