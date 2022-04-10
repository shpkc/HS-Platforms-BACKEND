"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1649563810382 = void 0;
class add1649563810382 {
    constructor() {
        this.name = 'add1649563810382';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`score\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`reviewScore\` float NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`reviewParticipants\` int NOT NULL DEFAULT '1'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`reviewParticipants\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`reviewScore\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`score\` float NOT NULL DEFAULT '0'`);
    }
}
exports.add1649563810382 = add1649563810382;
//# sourceMappingURL=1649563810382-add.js.map