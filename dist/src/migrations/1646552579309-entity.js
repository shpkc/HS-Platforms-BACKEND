"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity1646552579309 = void 0;
class entity1646552579309 {
    constructor() {
        this.name = 'entity1646552579309';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`score\` \`score\` float NOT NULL DEFAULT '1'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`score\` \`score\` float NOT NULL DEFAULT '0'`);
    }
}
exports.entity1646552579309 = entity1646552579309;
//# sourceMappingURL=1646552579309-entity.js.map