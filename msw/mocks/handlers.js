import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://google.com/passwords", () => {
    return HttpResponse.json([
      {
        user: "pentacodeeeeeeee",
        password: "subscribe",
      },
      {
        user: "johndoe",
        password: "foobar",
      },
    ]);
  }),
];
