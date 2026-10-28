// db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class Database {
    constructor() {
        // 1. Verificamos si ya existe una instancia creada previamente en memoria       
        if (Database.instance) {
            return Database.instance;
        }
        // 2. Si no existe, inicializamos el pool de conexiones utilizando variables de entorno
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        console.log('[Database Singleton] ¡Conexión única inicializada con éxito!');
        // 3. Guardamos la referencia de la instancia actual  
        Database.instance = this;
        // Congelamos el objeto para evitar modificaciones accidentales en caliente
        Object.freeze(Database.instance);
    }
    /**
     * Método genérico para ejecutar consultas SQL de forma limpia
     */
    async query(sql, params = []) {
        try {
            const [rows] = await this.pool.execute(sql, params);
            return rows;
        } catch (error) {
            console.error('[Database Error]: Fallo al ejecutar la consulta.', error.message);
            throw error;
        }
    }
}

const instance = new Database();
Object.freeze(instance);

// Exportación por defecto (equivalente a module.exports = instance)
export default instance;