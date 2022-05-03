import {MigrationInterface, QueryRunner} from "typeorm";

export class add1651577512818 implements MigrationInterface {
    name = 'add1651577512818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` ADD \`isNew\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` DROP COLUMN \`isNew\``);
    }

}
