export const FALLBACK_POST_IMAGE = "/assets/fallback.svg";

export function coverOf(entity: { image?: string | null }): string {
    const src = entity.image?.trim();
    return src ? src : FALLBACK_POST_IMAGE;
}