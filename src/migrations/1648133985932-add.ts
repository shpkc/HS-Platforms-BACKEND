import {MigrationInterface, QueryRunner} from "typeorm";

export class add1648133985932 implements MigrationInterface {
    name = 'add1648133985932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`collections\` ADD \`category\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`collections\` DROP COLUMN \`category\``);
    }

}
