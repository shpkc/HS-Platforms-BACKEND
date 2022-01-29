"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCourtType1643356561396 = void 0;
class addCourtType1643356561396 {
    constructor() {
        this.name = 'addCourtType1643356561396';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isIndoor\` \`isIndoor\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isOutDoor\` \`isOutDoor\` tinyint NOT NULL DEFAULT 1`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isOutDoor\` \`isOutDoor\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isIndoor\` \`isIndoor\` tinyint NOT NULL DEFAULT '0'`);
    }
}
exports.addCourtType1643356561396 = addCourtType1643356561396;
//# sourceMappingURL=1643356561396-addCourtType.js.map