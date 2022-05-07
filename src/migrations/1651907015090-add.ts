import {MigrationInterface, QueryRunner} from "typeorm";

export class add1651907015090 implements MigrationInterface {
    name = 'add1651907015090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`isThumbnail\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`isThumbnail\``);
    }

}
