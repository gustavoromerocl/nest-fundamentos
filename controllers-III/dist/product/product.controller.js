"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
let ProductController = class ProductController {
    getAll(_page, _perPage, search, query) {
        console.log(query);
        const page = parseInt(_page, 10);
        const perPage = parseInt(_perPage, 10);
        const metadata = { page, perPage, search };
        return {
            message: 'Array of products',
            data: [],
            metadata,
        };
    }
    getOne(id, categoryName) {
        return {
            message: 'Get a product by ID',
            data: { id: Number(id), categoryName },
        };
    }
    create() {
        return 'Adding a new product';
    }
    update() {
        return 'Updating a product by ID or cursor';
    }
    delete() {
        return 'Delete a product by ID or cursor';
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('perPage')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':productID/categoria/:categoryName'),
    __param(0, (0, common_1.Param)('productID')),
    __param(1, (0, common_1.Param)('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "delete", null);
ProductController = __decorate([
    (0, common_1.Controller)('product')
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map