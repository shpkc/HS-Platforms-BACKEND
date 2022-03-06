"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity1646552709891 = void 0;
class entity1646552709891 {
    constructor() {
        this.name = 'entity1646552709891';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`score\` float NOT NULL DEFAULT '1'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`score\``);
    }
}
exports.entity1646552709891 = entity1646552709891;
//# sourceMappingURL=1646552709891-entity.js.map