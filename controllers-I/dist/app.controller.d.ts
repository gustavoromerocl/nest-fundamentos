import { Response } from "express";
export declare class AppController {
    elements: string[];
    getAll(): string[];
    create(): string[];
    httpCode2(): string;
    responseWithDecoratorHeader(): string;
    librarySpecific(res: Response): Response<any, Record<string, any>>;
    combinedRsponseStrategies(res: Response): Response<any, Record<string, any>>;
}
