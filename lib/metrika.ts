export const METRIKA_ID = 106955454;

declare global {
    interface Window {
        ym: (id: number, action: string, goal: string, params?: Record<string, any>) => void;
    }
}

/**
 * Safely triggers a Yandex Metrika goal.
 * @param goal - The goal identifier (e.g., 'open_bot')
 * @param place - Where the action occurred (e.g., 'hero', 'header')
 */
export const reachGoal = (goal: string, place: string) => {
    if (typeof window !== "undefined" && window.ym) {
        window.ym(METRIKA_ID, "reachGoal", goal, { place });
    } else {
        console.warn(`[Metrika] Goal "${goal}" for "${place}" was not sent (ym not initialized)`);
    }
};
