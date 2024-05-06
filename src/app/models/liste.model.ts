export interface Liste {
  id?: number;
  titre: string;
  startDate: string;
  endDate: string;
  subtasks?: Liste[];
}

