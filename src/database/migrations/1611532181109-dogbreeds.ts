import { MigrationInterface, QueryRunner } from 'typeorm';

export class dogbreeds1611532181109 implements MigrationInterface {
  name = 'dogbreeds1611532181109';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "dog_breed" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(300) NOT NULL, "pictureUl" varchar(500) NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "dog_breed"`);
  }
}
