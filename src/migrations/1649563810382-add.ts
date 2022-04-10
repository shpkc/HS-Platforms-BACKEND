import {MigrationInterface, QueryRunner} from "typeorm";

export class add1649563810382 implements MigrationInterface {
    name = 'add1649563810382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`score\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`reviewScore\` float NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`reviewParticipants\` int NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`reviewParticipants\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`reviewScore\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`score\` float NOT NULL DEFAULT '0'`);
    }

}
