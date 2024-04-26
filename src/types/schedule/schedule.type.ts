import React from "react";

export type TSchedule = {
  id?: string;
  startDate: string;
  endDate: string;
};

export type TScheduleFrom = {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
};

export type TScheduleProps = {
  id: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};
export type TSchedulesPropsType = {
  schedules: TScheduleProps[] | undefined;
  selectedScheduleIds: string[];
  setSelectedScheduleIds: React.Dispatch<React.SetStateAction<string[]>>;
};
