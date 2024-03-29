module.exports = class Operations {

    static add(x, y) {
        return x + y;
    }

    static subtract(x, y) {
        return x - y;
    }

    static multiply(x, y) {
        return x * y;
    }

    static divide(x, y) {
        return x / y;
    }

    static validateNumbers(x, y) {
        return !isNaN(x) && !isNaN(y);
    }
}