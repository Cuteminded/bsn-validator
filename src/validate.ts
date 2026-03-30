export function isValidBSN(bsn: string): boolean {
    bsn = bsn.trim();
    if (!/^\d{8,9}$/.test(bsn)) return false;
    const digits: number[] = bsn.split("").map(Number);
    let sum: number = 0;
    for (let i = 0; i < digits.length; i++) {
        const weight: number = i === digits.length - 1 ? -1 : digits.length - i;
        sum += digits[i] * weight;
    }
    return sum % 11 === 0;
}
