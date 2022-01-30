import {MigrationInterface, QueryRunner} from "typeorm";

export class longtext1643517167168 implements MigrationInterface {
    name = 'longtext1643517167168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` longtext NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`reservationLink\``);
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`reservationLink\` varchar(255) NOT NULL`);
    }

}
