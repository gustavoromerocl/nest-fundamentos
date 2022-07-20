export declare class ProductController {
    getAll(_page: string, _perPage: string, search: string, query: any): {
        message: string;
        data: {};
        metadata: {
            page: any;
            perPage: any;
            search: string;
        };
    };
    getOne(id: number, categoryName: string): {
        message: string;
        data: {
            id: any;
            categoryName: string;
        };
    };
    create(): string;
    update(): string;
    delete(): string;
}
