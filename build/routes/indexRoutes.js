"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); // definimos erutador
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexController.index);
        this.router.post('/');
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
