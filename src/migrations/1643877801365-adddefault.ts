import {MigrationInterface, QueryRunner} from "typeorm";

export class adddefault1643877801365 implements MigrationInterface {
    name = 'adddefault1643877801365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` longtext NOT NULL`);
    }

}
