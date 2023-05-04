/*  B"H
*/
const API_URL = import.meta.env.VITE_API_URL ?? '/api/v1/';

export function rest(url: string){
    return fetch(url)
        .then(res => res.ok ? res.json() : res.json().then(x=> { throw({ ...x, message: x.error }) } ) );
}

export function api(url: string){
    return rest(API_URL + url);
}

export type DataEnvelope<T> = {
    data: T,
    isSuccess: boolean,
    error?: string,
}

export type DataListEnvelope<T> = DataEnvelope<T[]> & {
    total: number,
}