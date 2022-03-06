import {MigrationInterface, QueryRunner} from "typeorm";

export class addentity1646552316460 implements MigrationInterface {
    name = 'addentity1646552316460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` ADD \`participantsCount\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`currency\` \`currency\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`currency\` \`currency\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`games\` DROP COLUMN \`participantsCount\``);
    }

}
