// app.js
import db from './db.js';
import userRepository from './userRepository.js';
import notificationFactory from './patterns/factory/notificationFactory.js';
import UserBuilder from './patterns/builder/userBuilder.js';
import UserPrototype from './patterns/prototype/userPrototype.js';

async function main() {
    console.log('=== ARQUITECTURA MODULAR CON ES MODULES (import/export) ===\n');

    try {
        // --- 1. PATRÓN BUILDER ---
        console.log('1. Construyendo usuario complejo con Builder...');
        const nuevoUsuario = new UserBuilder('Pedro Rivas', 'pedro.rivas@mail.com')
            .setEdad(30)
            .setRol('ADMIN')
            .conNewsletter()
            .build();
        
        console.log('Objeto construido:', nuevoUsuario);

        const idInsertado = await userRepository.insertarUsuario(nuevoUsuario.nombre, nuevoUsuario.email);
        console.log(`-> Usuario guardado en MySQL con ID: ${idInsertado}\n`);


        // --- 2. PATRÓN FACTORY METHOD ---
        console.log('2. Generando notificaciones mediante Factory Method...');
        
        const notifEmail = notificationFactory.createNotification('EMAIL');
        const notifSms = notificationFactory.createNotification('SMS');

        notifEmail.send(`¡Hola ${nuevoUsuario.nombre}, cuenta creada con éxito!`);
        notifSms.send(`Tu código temporal ha sido enviado.`);
        console.log('');


        // --- 3. PATRÓN PROTOTYPE ---
        console.log('3. Clonando perfiles con Prototype...');
        
        const usuarioBase = new UserPrototype('Plantilla Docente', 'docente@mail.com', 'PROFESSOR', ['leer', 'calificar']);
        console.log('Prototipo Original:', usuarioBase);

        const usuarioClonado = usuarioBase.clone();
        usuarioClonado.nombre = 'Prof. Carlos Mendoza';
        usuarioClonado.email = 'carlos.mendoza@mail.com';
        usuarioClonado.permisos.push('configurar_examenes');

        console.log('Usuario Clonado y Modificado:', usuarioClonado);
        console.log('Prototipo Original intacto:', usuarioBase);


        // --- VERIFICACIÓN DE INSTANCIA ÚNICA (SINGLETON) ---
        console.log('\n----------------------------------------');
        const otraConexionDB = await import('./db.js');
        console.log(`¿Se mantiene la instancia única del Singleton DB?: ${db === otraConexionDB.default}`);
        console.log('----------------------------------------');

    } catch (error) {
        console.error('Error durante la ejecución del flujo:', error.message);
    }
}

main();