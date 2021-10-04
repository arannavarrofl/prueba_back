"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); // definimos erutador
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Holi jejeje página principal');
        });
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
