import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_SSL,
} = process.env;

if (!DB_HOST || !DB_NAME || !DB_USER || !DB_PASSWORD) {
  throw new Error('Variáveis de ambiente do banco de dados não configuradas corretamente.');
}

const useSSL = DB_SSL === 'true';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT ? Number(DB_PORT) : 5432,
  dialect: 'postgres',
  logging: false,
  dialectOptions: useSSL
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {},
});

export const testConnection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
  }
};