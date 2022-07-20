export declare class ProductController {
    getAll(query: any, _page: string, _perPage: string, search: string): {
        message: string;
        data: any[];
        metadata: {
            page: number;
            perPage: number;
            search: string;
        };
    };
    getOne(): string;
    create(): string;
    update(): string;
    delete(): string;
}
