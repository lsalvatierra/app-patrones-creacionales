// userRepository.js
import db from './db.js'; 

class UserRepository {
    async obtenerTodos() {
        const sql = 'SELECT * FROM usuarios';
        const resultados = await db.query(sql);
        return resultados;
    }

    async insertarUsuario(nombre, email) {
        const sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
        const resultado = await db.query(sql, [nombre, email]);
        return resultado.insertId;
    }
}

export default new UserRepository();