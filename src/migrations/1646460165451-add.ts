import {MigrationInterface, QueryRunner} from "typeorm";

export class add1646460165451 implements MigrationInterface {
    name = 'add1646460165451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`isUse\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`isUse\``);
    }

}
