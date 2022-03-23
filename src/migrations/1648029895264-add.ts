import {MigrationInterface, QueryRunner} from "typeorm";

export class add1648029895264 implements MigrationInterface {
    name = 'add1648029895264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nfts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tokenId\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`currency\` varchar(255) NOT NULL DEFAULT 'ETH', \`price\` float NOT NULL DEFAULT '1', \`mediaType\` varchar(255) NOT NULL DEFAULT 'IMAGE', \`image\` varchar(255) NOT NULL DEFAULT '', \`owner\` varchar(255) NOT NULL DEFAULT '', \`seller\` varchar(255) NOT NULL DEFAULT '', \`isSold\` tinyint NOT NULL DEFAULT 0, \`isUse\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`nfts\``);
    }

}
