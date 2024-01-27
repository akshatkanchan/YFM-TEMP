export class DutyType {
   id?: string;
   dType?: string;
   name?: string;
   maxKms?:string; 
   maxHrs?:string; 
   totalKms?:string;
   totalHrs?:string;
   maxDays?:string;
   ownerId?:string;
   p2p?:boolean;
   g2g?:boolean;
   dontCalculateGarageStartKmTime?:boolean;
   dontCalculateGarageEndKmTime?:boolean;
   
}
