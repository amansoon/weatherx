import DeviceInfo from 'react-native-device-info'


export function isToday(date: Date) {
    const today = new Date();

    if (today.toDateString() === date.toDateString()) {
        return true;
    }

    return false;
}


export function isTomorrow(date: Date) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (tomorrow.toDateString() === date.toDateString()) {
        return true;
    }

    return false;
}

export function getDayName(date: Date) {
    return date.toLocaleDateString('en-IN', { weekday: 'long' });
}

