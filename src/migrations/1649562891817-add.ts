import {MigrationInterface, QueryRunner} from "typeorm";

export class add1649562891817 implements MigrationInterface {
    name = 'add1649562891817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`webLink\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`webLink\``);
    }

}
