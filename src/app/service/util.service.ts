export function saveToStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
}

export function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function makeId(length = 2) {
    var text = '';
    var possible =
        '123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(
            Math.floor(Math.random() * possible.length)
        );
    }
    return text;
}
