export interface Employee {
  id: number;
  name: string;
  positionId?: number | null;
  positionname?: string | null;
  birthdate?: Date | null;
  isActive: boolean | null;
  startDate: Date;
  phone?: string | null;
  managerId?: Number | null;
  managerName?: string | null;
  departmentId?: number | null;
  departmentName?: string | null;
}