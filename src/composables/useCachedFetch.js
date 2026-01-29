import { ref } from 'vue';

export function useCachedFetch() {
    /**
     * Fetches data from a URL with caching.
     * @param {string} url - The URL to fetch.
     * @param {string} cacheKey - The key to store data in localStorage.
     * @param {number} duration - Cache duration in milliseconds (default 5 mins = 300000).
     * @returns {Promise<any>} - The JSON data.
     */
    const fetchWithCache = async (url, cacheKey, duration = 300000) => {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                if (Date.now() - parsed.timestamp < duration) {
                    console.log(`[Cache Hit] ${cacheKey}`);
                    return parsed.data;
                }
            } catch (e) {
                console.error("Cache parse error", e);
                localStorage.removeItem(cacheKey);
            }
        }

        console.log(`[Cache Miss] Fetching ${url}`);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Network response was not ok for ${url}`);
        const data = await response.json();

        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: Date.now(),
                data: data
            }));
        } catch (e) {
            console.warn("Storage quota exceeded or error", e);
        }

        return data;
    };

    return { fetchWithCache };
}
