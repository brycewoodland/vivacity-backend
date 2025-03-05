"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Inside applicantRoute.js');
const express_1 = require("express");
const applicantController_1 = __importDefault(require("../controllers/applicantController"));
const router = (0, express_1.Router)();
console.log('Registering GET / route for applicant information.');
router.get('/awesome/applicant', applicantController_1.default);
exports.default = router;
