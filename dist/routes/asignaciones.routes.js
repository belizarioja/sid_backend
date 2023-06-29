"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignaciones_controller_1 = require("../controllers/asignaciones.controller");
const verifyTokenFactura_1 = require("../lib/verifyTokenFactura");
const router = (0, express_1.Router)();
router.route('/').post(verifyTokenFactura_1.verifyTokenFactura, asignaciones_controller_1.setAsignacion);
router.route('/listar')
    .post(asignaciones_controller_1.getAsignacion);
router.route('/:id')
    .put(asignaciones_controller_1.updFechaProd);
exports.default = router;
