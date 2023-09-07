import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

const obj = {
    id: 1,
    name: 'Maharajapura',
}

const obj2 = {
    id: 2,
    name: 'Gwalior',
}

storage.set('places', JSON.stringify([obj, obj2]));

export default storage;

