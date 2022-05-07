"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1651907015090 = void 0;
class add1651907015090 {
    constructor() {
        this.name = 'add1651907015090';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`isThumbnail\` tinyint NOT NULL DEFAULT 0`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`isThumbnail\``);
    }
}
exports.add1651907015090 = add1651907015090;
//# sourceMappingURL=1651907015090-add.js.map