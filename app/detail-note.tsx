import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function Rootlayout() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }} />
        </QueryClientProvider>
    );
}