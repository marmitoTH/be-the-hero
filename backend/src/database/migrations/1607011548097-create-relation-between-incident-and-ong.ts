import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class createRelationBetweenIncidentAndOng1607011548097 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('incidents', new TableColumn({
      name: 'ong_id',
      type: 'varchar',
      isNullable: true
    }))

    await queryRunner.createForeignKey('incidents', new TableForeignKey({
      name: 'incident_ong',
      columnNames: ['ong_id'],
      referencedTableName: 'ongs',
      referencedColumnNames: ['id'],
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('incidents', 'incident_ong')
    await queryRunner.dropColumn('incidents', 'ong_id')
  }
}
