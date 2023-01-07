export interface IScheduleRequest {
  userId: string;
  propertyId: string;
  date: string;
  hour: string;
}

export interface IScheduleResponse {
  date: string;
  hour: string;
  propertyId: string;
}
