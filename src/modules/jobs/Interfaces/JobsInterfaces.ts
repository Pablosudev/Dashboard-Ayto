


export type AllJobsInterface = JobInterface[];
export interface JobInterface {
    id: number,
    title: string,
    description: string,
    requirements: string,
    companyName: string,
    phone: string | null,
    email: string | null,
    createDate: string
}
export type RequestJob = "idle" | "pending" | "fulfilled" | "rejected"

export interface JobStatus {
    jobs: [],
    jobById: JobInterface | null,
    getJobsStatus: RequestJob,
    getJobError: string | undefined,
    getJobByIdStatus: RequestJob,
    getJobByIdError: string | undefined,
    createJobStatus: RequestJob,
    createJobError: string | undefined,
    updateJobStatus: RequestJob,
    updateJobError: string | undefined,
    deleteJobStatus: RequestJob,
    deleteJobError: string | undefined
}

export type JobInputInterface = Omit<JobInterface, 'id' | 'createDate'>;