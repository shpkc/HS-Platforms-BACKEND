"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1649158313461 = void 0;
class add1649158313461 {
    constructor() {
        this.name = 'add1649158313461';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL DEFAULT '', \`keywords\` varchar(255) NOT NULL DEFAULT '', \`companyName\` varchar(255) NOT NULL DEFAULT '', \`companyCeoName\` varchar(255) NOT NULL DEFAULT '', \`homepage\` varchar(255) NOT NULL DEFAULT '', \`appStoreLink\` varchar(255) NOT NULL DEFAULT '', \`playStoreLink\` varchar(255) NOT NULL DEFAULT '', \`releaseDate\` varchar(255) NOT NULL DEFAULT '', \`isNew\` tinyint NOT NULL DEFAULT 0, \`isUse\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`nfts\` ADD \`blockchain\` varchar(255) NOT NULL DEFAULT 'Ethereum'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`nfts\` DROP COLUMN \`blockchain\``);
        await queryRunner.query(`DROP TABLE \`products\``);
    }
}
exports.add1649158313461 = add1649158313461;
//# sourceMappingURL=1649158313461-add.js.map