"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addvalues1645442841238 = void 0;
class addvalues1645442841238 {
    constructor() {
        this.name = 'addvalues1645442841238';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`release\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isReleased\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`releaseDate\` varchar(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`releaseDate\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isReleased\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`release\` varchar(255) NOT NULL`);
    }
}
exports.addvalues1645442841238 = addvalues1645442841238;
//# sourceMappingURL=1645442841238-addvalues.js.map