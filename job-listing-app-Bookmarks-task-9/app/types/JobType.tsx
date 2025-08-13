export default interface JobType {
  id: string;
  logoUrl: string;
  location: string[];
  title: string;
  orgName: string;
  description: string;

  responsibilities: string;
  idealCandidate: string;
  whenAndWhere: string;

  datePosted: string;
  startDate: string;
  endDate: string;
  deadline: string;

  categories: string[];
  requiredSkills: string[];
}
