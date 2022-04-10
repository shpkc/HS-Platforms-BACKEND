"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1649567395167 = void 0;
class add1649567395167 {
    constructor() {
        this.name = 'add1649567395167';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`webLink\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`isAppStore\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`isPlayStore\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`isWebService\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`webServiceLink\` varchar(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`webServiceLink\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`isWebService\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`isPlayStore\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`isAppStore\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`webLink\` varchar(255) NOT NULL DEFAULT ''`);
    }
}
exports.add1649567395167 = add1649567395167;
//# sourceMappingURL=1649567395167-add.js.map