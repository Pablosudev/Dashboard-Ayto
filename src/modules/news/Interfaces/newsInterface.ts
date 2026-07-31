
export type AllNewsInterface = NewsInterface[]


export  interface NewsInterface {
id: number;
title: string;
description: string;
image: string | null;
uploadDate: string;
}
export type RequestStatus = "idle" | "pending" | "fulfilled" | "rejected"

export type NewInputInterface = Omit<NewsInterface, 'id' | 'uploadDate'>;

export type NewsFormInput = Omit<NewsInterface , 'id' | 'uploadDate' | 'image'> & {image: File | null} 

export interface NewsStatus {
news: AllNewsInterface;
newById: NewsInterface | null;
getAllStatus: RequestStatus;
getAllError: string | undefined;
getByIdStatus: RequestStatus;
getByIdError: string | undefined;
createNewStatus: RequestStatus;
createNewError: string | undefined;
updateNewStatus: RequestStatus;
updateNewError: string | undefined;
deleteNewStatus: RequestStatus;
deleteNewError: string | undefined;
} 