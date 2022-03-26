"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1648133985932 = void 0;
class add1648133985932 {
    constructor() {
        this.name = 'add1648133985932';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`collections\` ADD \`category\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`collections\` DROP COLUMN \`category\``);
    }
}
exports.add1648133985932 = add1648133985932;
//# sourceMappingURL=1648133985932-add.js.map