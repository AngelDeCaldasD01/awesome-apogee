interface UseFetchI {
    url: string;
    method?: "GET" | "POST" | "PUT" | "PATCH";
    data?: any;
}
  
export const useFetch = async ({ url, method = "GET", data }: UseFetchI) => {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    const body = data ? JSON.stringify(data) : undefined;

    try {
        const response = await fetch(url, {
            method,
            headers,
            body,
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();

        return result;
    } catch (error: any) {
        throw new Error(`Error: ${error.message}`);
    }
};