"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1648101860313 = void 0;
class add1648101860313 {
    constructor() {
        this.name = 'add1648101860313';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`collections\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`isUse\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`collections\``);
    }
}
exports.add1648101860313 = add1648101860313;
//# sourceMappingURL=1648101860313-add.js.map