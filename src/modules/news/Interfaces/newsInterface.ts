


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
