"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addentity1646552316460 = void 0;
class addentity1646552316460 {
    constructor() {
        this.name = 'addentity1646552316460';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`participantsCount\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`currency\` \`currency\` varchar(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`currency\` \`currency\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`participantsCount\``);
    }
}
exports.addentity1646552316460 = addentity1646552316460;
//# sourceMappingURL=1646552316460-addentity.js.map