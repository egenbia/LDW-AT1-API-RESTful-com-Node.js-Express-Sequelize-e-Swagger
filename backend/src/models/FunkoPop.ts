import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

// Atributos completos da entidade (como ela existe no banco)
export interface FunkoPopAttributes {
  id: number;
  personagem: string;
  casa: string;
  numeroColecao: number;
  preco: number;
  emEstoque: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Atributos opcionais na hora de CRIAR um novo registro
// (id, createdAt, updatedAt são gerados automaticamente)
export interface FunkoPopCreationAttributes
  extends Optional<FunkoPopAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class FunkoPop
  extends Model<FunkoPopAttributes, FunkoPopCreationAttributes>
  implements FunkoPopAttributes
{
  public id!: number;
  public personagem!: string;
  public casa!: string;
  public numeroColecao!: number;
  public preco!: number;
  public emEstoque!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FunkoPop.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    personagem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    casa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroColecao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    emEstoque: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'funko_pops',
    timestamps: true, // gera createdAt e updatedAt automaticamente
  }
);