export default {
    setCookie(name, value, time) {
        // document.cookie = `${name}=${value};expires=${expires}`;
        document.cookie = `${name}=${value};max-age=${time}`;
    },
    getCookie(name) {
        const cookieItem = document.cookie.split(';');
        for (const item in cookieItem) {
            const arr = arr[item].split('=');
            if (arr[0] == name) {
                return arr[1];
            }
        }
    },
    delCookie(name) {
        this.setCookie(name, 0, 0);
    }
}