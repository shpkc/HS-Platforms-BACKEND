import {MigrationInterface, QueryRunner} from "typeorm";

export class entity1646552579309 implements MigrationInterface {
    name = 'entity1646552579309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`score\` \`score\` float NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`games\` CHANGE \`score\` \`score\` float NOT NULL DEFAULT '0'`);
    }

}
