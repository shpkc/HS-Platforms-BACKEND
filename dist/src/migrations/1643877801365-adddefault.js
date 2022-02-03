"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adddefault1643877801365 = void 0;
class adddefault1643877801365 {
    constructor() {
        this.name = 'adddefault1643877801365';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` varchar(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` longtext NOT NULL`);
    }
}
exports.adddefault1643877801365 = adddefault1643877801365;
//# sourceMappingURL=1643877801365-adddefault.js.map