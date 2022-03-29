"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1648565951394 = void 0;
class add1648565951394 {
    constructor() {
        this.name = 'add1648565951394';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`nfts\` ADD \`category\` varchar(255) NOT NULL DEFAULT 'ART'`);
        await queryRunner.query(`ALTER TABLE \`nfts\` ADD \`contractAddress\` varchar(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`nfts\` DROP COLUMN \`contractAddress\``);
        await queryRunner.query(`ALTER TABLE \`nfts\` DROP COLUMN \`category\``);
    }
}
exports.add1648565951394 = add1648565951394;
//# sourceMappingURL=1648565951394-add.js.map