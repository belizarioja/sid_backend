"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportes_controller_1 = require("../controllers/reportes.controller");
const router = (0, express_1.Router)();
router.route('/facturas/relacionado')
    .post(reportes_controller_1.getFacturaNum);
router.route('/facturas/detalles/:id')
    .get(reportes_controller_1.getFacturaDet);
router.route('/facturas')
    .post(reportes_controller_1.getFacturas);
router.route('/impprocesados')
    .post(reportes_controller_1.getImpProcesados);
router.route('/anulados')
    .post(reportes_controller_1.getAnulados);
router.route('/topclientes')
    .post(reportes_controller_1.getTopClientes);
router.route('/totalclientes')
    .post(reportes_controller_1.getTotalClientes);
router.route('/grafica')
    .post(reportes_controller_1.getGrafica);
router.route('/totaldocumentos')
    .post(reportes_controller_1.getDocProcesados);
router.route('/ultimasemana')
    .post(reportes_controller_1.getUltimaSemana);
exports.default = router;
