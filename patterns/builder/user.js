// patterns/builder/user.js

class User {
    constructor(builder) {
        this.nombre = builder.nombre;
        this.email = builder.email;
        this.edad = builder.edad;
        this.rol = builder.rol;
        this.activo = builder.activo;
        this.suscripcionNewsletter = builder.suscripcionNewsletter;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}

export default User;