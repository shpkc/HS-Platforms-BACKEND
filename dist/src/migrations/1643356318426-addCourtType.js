"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCourtType1643356318426 = void 0;
class addCourtType1643356318426 {
    constructor() {
        this.name = 'addCourtType1643356318426';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`courtType\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`courtType\``);
    }
}
exports.addCourtType1643356318426 = addCourtType1643356318426;
//# sourceMappingURL=1643356318426-addCourtType.js.map