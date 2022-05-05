"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1651577512818 = void 0;
class add1651577512818 {
    constructor() {
        this.name = 'add1651577512818';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` ADD \`isNew\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT 1`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` DROP COLUMN \`isNew\``);
    }
}
exports.add1651577512818 = add1651577512818;
//# sourceMappingURL=1651577512818-add.js.map