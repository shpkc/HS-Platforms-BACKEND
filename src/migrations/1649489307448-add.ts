import {MigrationInterface, QueryRunner} from "typeorm";

export class add1649489307448 implements MigrationInterface {
    name = 'add1649489307448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`subTitle\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`score\` float NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`score\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`subTitle\``);
    }

}
