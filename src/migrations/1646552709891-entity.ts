import {MigrationInterface, QueryRunner} from "typeorm";

export class entity1646552709891 implements MigrationInterface {
    name = 'entity1646552709891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`score\` float NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`score\``);
    }

}
