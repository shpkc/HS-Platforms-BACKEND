import {MigrationInterface, QueryRunner} from "typeorm";

export class addCourtType1643356561396 implements MigrationInterface {
    name = 'addCourtType1643356561396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isIndoor\` \`isIndoor\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isOutDoor\` \`isOutDoor\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isOutDoor\` \`isOutDoor\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`courts\` CHANGE \`isIndoor\` \`isIndoor\` tinyint NOT NULL DEFAULT '0'`);
    }

}
