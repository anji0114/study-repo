import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { usePosts } from "./index.";
import { renderHook } from "@testing-library/react-hooks";

const queryClient = new QueryClient();
const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("use posts test", () => {
  it("fetch posts", async () => {
    const { result, waitFor } = renderHook(() => usePosts(), { wrapper });
    expect(result.current.data).toEqual(undefined);
    await waitFor(() => !!result.current.data?.length);

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBeTruthy();
  });
});
