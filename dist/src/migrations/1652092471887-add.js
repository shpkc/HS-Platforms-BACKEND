"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1652092471887 = void 0;
class add1652092471887 {
    constructor() {
        this.name = 'add1652092471887';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`subTitle\` varchar(255) NOT NULL, \`contents\` longtext NOT NULL, \`slug\` varchar(255) NOT NULL, \`isUse\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`posts\``);
    }
}
exports.add1652092471887 = add1652092471887;
//# sourceMappingURL=1652092471887-add.js.map