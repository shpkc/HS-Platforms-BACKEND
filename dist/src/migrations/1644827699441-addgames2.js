"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addgames21644827699441 = void 0;
class addgames21644827699441 {
    constructor() {
        this.name = 'addgames21644827699441';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`games\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`genre\` varchar(255) NOT NULL, \`developer\` varchar(255) NOT NULL, \`currency\` varchar(255) NOT NULL, \`release\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`title\` (\`title\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`title\` ON \`games\``);
        await queryRunner.query(`DROP TABLE \`games\``);
    }
}
exports.addgames21644827699441 = addgames21644827699441;
//# sourceMappingURL=1644827699441-addgames2.js.map