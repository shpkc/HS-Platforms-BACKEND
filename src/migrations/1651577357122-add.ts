import {MigrationInterface, QueryRunner} from "typeorm";

export class add1651577357122 implements MigrationInterface {
    name = 'add1651577357122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` ADD \`duration\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exhibitions\` CHANGE \`isSeoul\` \`isSeoul\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`exhibitions\` DROP COLUMN \`duration\``);
    }

}
