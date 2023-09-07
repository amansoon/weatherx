

export interface Notification {
    temperature: {
        enabled: boolean,
        value: number, // degree celcius
    },

    humidity: {
        enabled: boolean,
        value: number, // percentage
    },

    visibility: {
        enabled: boolean,
        value: number, // in kilo-meter,
    },

    cloud: {
        enabled: boolean,
        value: number, // percentage (rain chance)
    }

    aqi: {
       enabled: boolean,
       value: number, // air quality index,
    },

    uv: {
        enabled: boolean,
        value: number, // uv rays
    }

    condition: {
        enabled: boolean,
        code: number,
        text: number,
    },
}