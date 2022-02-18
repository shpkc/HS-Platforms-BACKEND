import {MigrationInterface, QueryRunner} from "typeorm";

export class addwebsite1645173327620 implements MigrationInterface {
    name = 'addwebsite1645173327620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`website\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`description\` varchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`website\``);
    }

}
