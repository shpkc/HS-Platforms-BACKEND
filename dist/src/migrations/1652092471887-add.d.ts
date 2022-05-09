import { MigrationInterface, QueryRunner } from "typeorm";
export declare class add1652092471887 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
