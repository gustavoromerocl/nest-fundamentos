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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    constructor() {
        this.elements = ['coche', 'moto', 'bicicleta'];
    }
    getAll() {
        return this.elements;
    }
    create() {
        this.elements.push('nuevo elemento');
        return this.elements;
    }
    httpCode2() {
        this.elements[0] = 'vehículo';
        console.log('Se ha editado el primer elemento');
        return `Edited: ${this.elements[0]}`;
    }
    responseWithDecoratorHeader() {
        return 'OK, mira los headers!';
    }
    librarySpecific(res) {
        return res
            .status(common_1.HttpStatus.OK)
            .header('mi-propiedad-header', 'valor de la propiedad')
            .jsonp('Todo ok con la librería especifica');
    }
    combinedRsponseStrategies(res) {
        res.status(common_1.HttpStatus.OK);
        res.header('mi-propiedad-header', 'valor de la propiedad');
        return res.json('Respuesta combinada, mirar en headers para verificar');
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('http-code'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('http-code'),
    (0, common_1.HttpCode)(common_1.HttpStatus.PARTIAL_CONTENT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "httpCode2", null);
__decorate([
    (0, common_1.Get)('header'),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    (0, common_1.Header)('mi-propiedad-header', 'valor de la propiedad'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "responseWithDecoratorHeader", null);
__decorate([
    (0, common_1.Get)('library-specific'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "librarySpecific", null);
__decorate([
    (0, common_1.Get)('combined-response'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "combinedRsponseStrategies", null);
AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map