"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1649489307448 = void 0;
class add1649489307448 {
    constructor() {
        this.name = 'add1649489307448';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`subTitle\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`score\` float NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`score\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`subTitle\``);
    }
}
exports.add1649489307448 = add1649489307448;
//# sourceMappingURL=1649489307448-add.js.map