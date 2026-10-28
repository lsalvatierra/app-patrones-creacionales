// patterns/factory/notificationFactory.js
import EmailNotification from './emailNotification.js';
import SmsNotification from './smsNotification.js';

class NotificationFactory {
    createNotification(type) {
        switch (type.toUpperCase()) {
            case 'EMAIL':
                return new EmailNotification();
            case 'SMS':
                return new SmsNotification();
            default:
                throw new Error(`Tipo de notificación '${type}' no soportado.`);
        }
    }
}

export default new NotificationFactory();