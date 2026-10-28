// patterns/factory/smsNotification.js

class SmsNotification {
    send(message) {
        console.log(`[Factory - SMS]: Enviando mensaje de texto -> "${message}"`);
    }
}

export default SmsNotification;