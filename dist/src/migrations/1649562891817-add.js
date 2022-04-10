"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1649562891817 = void 0;
class add1649562891817 {
    constructor() {
        this.name = 'add1649562891817';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`webLink\` varchar(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`webLink\``);
    }
}
exports.add1649562891817 = add1649562891817;
//# sourceMappingURL=1649562891817-add.js.map