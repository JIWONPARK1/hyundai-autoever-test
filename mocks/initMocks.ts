export async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    await worker.start({ onUnhandledRequest: "bypass" });
  }
}
if (process.env.NODE_ENV === "development") {
  await initMocks(); // 렌더링 전에 초기화 완료
}
