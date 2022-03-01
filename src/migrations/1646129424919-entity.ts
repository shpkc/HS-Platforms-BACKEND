import {MigrationInterface, QueryRunner} from "typeorm";

export class entity1646129424919 implements MigrationInterface {
    name = 'entity1646129424919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isWindow\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isApple\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isGoogle\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isSteam\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isNFT\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isNFT\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isSteam\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isGoogle\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isApple\``);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isWindow\``);
    }

}
