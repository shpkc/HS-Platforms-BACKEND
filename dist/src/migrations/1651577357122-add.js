"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1651577357122 = void 0;
class add1651577357122 {
    constructor() {
        this.name = 'add1651577357122';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` ADD \`duration\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT 0`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` DROP COLUMN \`duration\``);
    }
}
exports.add1651577357122 = add1651577357122;
//# sourceMappingURL=1651577357122-add.js.map