"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity1646129424919 = void 0;
class entity1646129424919 {
    constructor() {
        this.name = 'entity1646129424919';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isWindow\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isApple\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isGoogle\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isSteam\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isNFT\` tinyint NOT NULL DEFAULT 0`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isNFT\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isSteam\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isGoogle\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isApple\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isWindow\``);
    }
}
exports.entity1646129424919 = entity1646129424919;
//# sourceMappingURL=1646129424919-entity.js.map