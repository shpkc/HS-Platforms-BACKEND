"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longtext1643517167168 = void 0;
class longtext1643517167168 {
    constructor() {
        this.name = 'longtext1643517167168';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` longtext NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` varchar(255) NOT NULL`);
    }
}
exports.longtext1643517167168 = longtext1643517167168;
//# sourceMappingURL=1643517167168-longtext.js.map