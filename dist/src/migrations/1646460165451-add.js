"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1646460165451 = void 0;
class add1646460165451 {
    constructor() {
        this.name = 'add1646460165451';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isUse\` tinyint NOT NULL DEFAULT 1`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isUse\``);
    }
}
exports.add1646460165451 = add1646460165451;
//# sourceMappingURL=1646460165451-add.js.map