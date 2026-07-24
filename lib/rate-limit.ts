
type Entry = { count: number; resetAt: number };

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

const attempts = new Map<string, Entry>();

/** Returns true if this identifier is currently blocked. */
export function isRateLimited(id: string): boolean {
    const e = attempts.get(id);
    if (!e) return false;
    if (Date.now() > e.resetAt) {
        attempts.delete(id);
        return false;
    }
    return e.count >= MAX_ATTEMPTS;
}

/** Record a FAILED attempt. Successful logins should call clearAttempts. */
export function recordFailure(id: string): void {
    const now = Date.now();
    const e = attempts.get(id);
    if (!e || now > e.resetAt) {
        attempts.set(id, { count: 1, resetAt: now + WINDOW_MS });
    } else {
        e.count += 1;
    }
}

export function clearAttempts(id: string): void {
    attempts.delete(id);
}

/** Minutes until the identifier unlocks (for the error message). */
export function minutesLeft(id: string): number {
    const e = attempts.get(id);
    if (!e) return 0;
    return Math.max(1, Math.ceil((e.resetAt - Date.now()) / 60000));
}