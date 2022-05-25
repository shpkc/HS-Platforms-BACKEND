import {MigrationInterface, QueryRunner} from "typeorm";

export class add1653474864185 implements MigrationInterface {
    name = 'add1653474864185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`category\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`thumbnail\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`thumbnail\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`category\``);
    }

}
