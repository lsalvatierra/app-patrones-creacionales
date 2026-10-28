// patterns/builder/userBuilder.js
import User from './user.js';

class UserBuilder {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.edad = null;
        this.rol = 'USER';
        this.activo = true;
        this.suscripcionNewsletter = false;
    }

    setEdad(edad) {
        this.edad = edad;
        return this; // Method chaining
    }

    setRol(rol) {
        this.rol = rol;
        return this;
    }

    setActivo(activo) {
        this.activo = activo;
        return this;
    }

    conNewsletter() {
        this.suscripcionNewsletter = true;
        return this;
    }

    build() {
        return new User(this);
    }
}

export default UserBuilder;