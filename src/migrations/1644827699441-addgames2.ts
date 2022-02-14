import {MigrationInterface, QueryRunner} from "typeorm";

export class addgames21644827699441 implements MigrationInterface {
    name = 'addgames21644827699441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`games\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`genre\` varchar(255) NOT NULL, \`developer\` varchar(255) NOT NULL, \`currency\` varchar(255) NOT NULL, \`release\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`title\` (\`title\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`title\` ON \`games\``);
        await queryRunner.query(`DROP TABLE \`games\``);
    }

}
