"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addwebsite1645173327620 = void 0;
class addwebsite1645173327620 {
    constructor() {
        this.name = 'addwebsite1645173327620';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`website\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`description\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`description\` varchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`website\``);
    }
}
exports.addwebsite1645173327620 = addwebsite1645173327620;
//# sourceMappingURL=1645173327620-addwebsite.js.map