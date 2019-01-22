import React from 'react';
import { NotificationManager } from 'react-notifications';


export const createNotification = (type, message, timeout, subText) => {
    //console.log(type, message, timeout, subText)
    switch (type) {
            case 'info':
                NotificationManager.info(message, subText, timeout);
                break;
            case 'success':
                NotificationManager.success(message, subText, timeout);
                break;
            case 'warning':
                NotificationManager.warning(message, subText, timeout);
                break;
            case 'error':
                NotificationManager.error(message, subText, timeout);
                break;
            default:
                NotificationManager.info('No message assigned', '', 1000);
                break;
        }
    
};
