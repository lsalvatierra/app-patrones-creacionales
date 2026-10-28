// patterns/prototype/userPrototype.js

class UserPrototype {
    constructor(nombre, email, rol, permisos) {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.permisos = permisos;
    }

    clone() {
        // Copia profunda nativa con structuredClone
        return structuredClone(this);
    }
}

export default UserPrototype;