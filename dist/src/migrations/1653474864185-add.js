"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1653474864185 = void 0;
class add1653474864185 {
    constructor() {
        this.name = 'add1653474864185';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`category\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`thumbnail\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`thumbnail\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`category\``);
    }
}
exports.add1653474864185 = add1653474864185;
//# sourceMappingURL=1653474864185-add.js.map