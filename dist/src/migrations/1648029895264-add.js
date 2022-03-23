"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1648029895264 = void 0;
class add1648029895264 {
    constructor() {
        this.name = 'add1648029895264';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`nfts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tokenId\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`currency\` varchar(255) NOT NULL DEFAULT 'ETH', \`price\` float NOT NULL DEFAULT '1', \`mediaType\` varchar(255) NOT NULL DEFAULT 'IMAGE', \`image\` varchar(255) NOT NULL DEFAULT '', \`owner\` varchar(255) NOT NULL DEFAULT '', \`seller\` varchar(255) NOT NULL DEFAULT '', \`isSold\` tinyint NOT NULL DEFAULT 0, \`isUse\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`nfts\``);
    }
}
exports.add1648029895264 = add1648029895264;
//# sourceMappingURL=1648029895264-add.js.map