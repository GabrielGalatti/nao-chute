import localFont from "@next/font/local";

export const bdSuper = localFont({
  src: [
    {
      path: "../pages/fonts/bd-super/bold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../pages/fonts/bd-super/regular.woff2",
      style: "normal",
      weight: "400",
    },
  ],
});

export const urbane = localFont({
  src: [
    {
      path: "../pages/fonts/urbane/bold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../pages/fonts/urbane/medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../pages/fonts/urbane/light.woff2",
      style: "normal",
      weight: "400",
    },
  ],
});
