import { MigrationInterface, QueryRunner } from "typeorm";

export class fixedEntitiesConection1672502243890 implements MigrationInterface {
    name = 'fixedEntitiesConection1672502243890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD "propertyId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "adressId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "UQ_e9058266ab1b092d636b1868956" UNIQUE ("adressId")`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_e9058266ab1b092d636b1868956" FOREIGN KEY ("adressId") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_e9058266ab1b092d636b1868956"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d38c8782cbb21122d7c6c531a78"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "UQ_e9058266ab1b092d636b1868956"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "adressId"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP COLUMN "propertyId"`);
    }

}
