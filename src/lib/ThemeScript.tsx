/*
 *  This script will be loaded seperately.
    and this work around is for preventing initial render theme flash
    Most of codes is from https://github.com/vercel/next.js/discussions/53063 and
    https://github.com/Hugomndez/nextjs-app-darkmode mentioned in the discussion
*/
type Theme = "light" | "dark";

declare global {
  interface Window {
    __theme: Theme;
    __onThemeChange: (theme: Theme) => void;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

function code() {
  window.__onThemeChange = function () {};

  function setTheme(newTheme: Theme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.className = newTheme;
    window.__onThemeChange(newTheme);
  }

  let preferredTheme;

  try {
    preferredTheme = localStorage.getItem("theme") as Theme;
  } catch (error: unknown) {
    console.log("Can't get theme from LocalStorage", (error as Error).message);
  }

  window.__setPreferredTheme = function (newTheme: Theme) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (error: unknown) {
      console.log(
        "Can't get theme from LocalStorage",
        (error as Error).message,
      );
    }
  };

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light");
  });

  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
}

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />;
}
