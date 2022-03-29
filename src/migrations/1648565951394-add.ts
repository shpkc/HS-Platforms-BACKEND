import {MigrationInterface, QueryRunner} from "typeorm";

export class add1648565951394 implements MigrationInterface {
    name = 'add1648565951394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`nfts\` ADD \`category\` varchar(255) NOT NULL DEFAULT 'ART'`);
        await queryRunner.query(`ALTER TABLE \`nfts\` ADD \`contractAddress\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`nfts\` DROP COLUMN \`contractAddress\``);
        await queryRunner.query(`ALTER TABLE \`nfts\` DROP COLUMN \`category\``);
    }

}
