import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

const obj = {
    id: 1,
    name: 'Maharajapura',
}

storage.set('places', JSON.stringify([obj]));

export default storage;

