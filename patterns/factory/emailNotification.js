// patterns/factory/emailNotification.js

class EmailNotification {
    send(message) {
        console.log(`[Factory - Email]: Enviando correo electrónico -> "${message}"`);
    }
}

export default EmailNotification;