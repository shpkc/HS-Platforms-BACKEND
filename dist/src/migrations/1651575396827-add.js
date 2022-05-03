"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add1651575396827 = void 0;
class add1651575396827 {
    constructor() {
        this.name = 'add1651575396827';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`exhibitions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`category\` varchar(255) NOT NULL DEFAULT '', \`location\` varchar(255) NOT NULL DEFAULT '', \`reviewScore\` float NOT NULL DEFAULT '0', \`reviewParticipants\` int NOT NULL DEFAULT '1', \`keywords\` varchar(255) NOT NULL DEFAULT '', \`isSeoul\` tinyint NOT NULL DEFAULT 1, \`isOngoing\` tinyint NOT NULL DEFAULT 1, \`isUse\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`exhibitions\``);
    }
}
exports.add1651575396827 = add1651575396827;
//# sourceMappingURL=1651575396827-add.js.map