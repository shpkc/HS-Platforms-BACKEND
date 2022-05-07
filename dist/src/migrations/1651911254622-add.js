"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1651911254622 = void 0;
class add1651911254622 {
    constructor() {
        this.name = 'add1651911254622';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`banners\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`bannerImgUrl\` varchar(255) NOT NULL, \`link\` varchar(255) NOT NULL, \`isUse\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`banners\``);
    }
}
exports.add1651911254622 = add1651911254622;
//# sourceMappingURL=1651911254622-add.js.map