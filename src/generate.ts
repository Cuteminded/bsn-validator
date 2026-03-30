export function generateFakeBSN(): string {
    let bsn: string = "";
    for (let i = 0; i < 8; i++) {
        bsn += Math.floor(Math.random() * 10).toString();
    }
    const digits: number[] = bsn.split("").map(Number);
    let sum: number = 0;
    for (let i = 0; i < digits.length; i++) {
        const weight: number = i === digits.length - 1 ? -1 : digits.length - i;
        sum += digits[i] * weight;
    }
    const checkDigit: number = (11 - (sum % 11)) % 11;
    return bsn + checkDigit.toString();
}
