import {MigrationInterface, QueryRunner} from "typeorm";

export class addCourtType1643356318426 implements MigrationInterface {
    name = 'addCourtType1643356318426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` ADD \`courtType\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` DROP COLUMN \`courtType\``);
    }

}
