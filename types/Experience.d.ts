export interface Experience {
  companyName: string;
  logoLink: string;
  positions: {
    position: string;
    startTime: Date;
    endTime?: Date;
  }[],
  website: string;
}
