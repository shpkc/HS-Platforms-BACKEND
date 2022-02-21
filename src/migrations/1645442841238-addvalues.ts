import {MigrationInterface, QueryRunner} from "typeorm";

export class addvalues1645442841238 implements MigrationInterface {
    name = 'addvalues1645442841238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`release\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isReleased\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`releaseDate\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`releaseDate\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isReleased\``);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`release\` varchar(255) NOT NULL`);
    }

}
