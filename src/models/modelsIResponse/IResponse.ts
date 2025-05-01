import {ITodos} from "../ITodos.ts";

export interface IResponse {
    todos: ITodos[],
    total: number,
    skip: number,
    limit: number}