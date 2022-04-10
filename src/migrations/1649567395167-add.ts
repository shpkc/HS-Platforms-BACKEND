import {MigrationInterface, QueryRunner} from "typeorm";

export class add1649567395167 implements MigrationInterface {
    name = 'add1649567395167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`webLink\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`isAppStore\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`isPlayStore\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`isWebService\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`webServiceLink\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`webServiceLink\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`isWebService\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`isPlayStore\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`isAppStore\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`webLink\` varchar(255) NOT NULL DEFAULT ''`);
    }

}
