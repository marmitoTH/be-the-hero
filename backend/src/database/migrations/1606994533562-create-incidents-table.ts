import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createIncidentsTable1606994533562 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'incidents',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'title',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'value',
          type: 'decimal',
          precision: 10,
          scale: 2,
          isNullable: false
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('incidents')
  }
}
