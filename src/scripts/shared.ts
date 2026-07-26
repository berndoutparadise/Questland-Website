const header = document.querySelector<HTMLElement>("[data-header]");
const menuButton = document.querySelector<HTMLButtonElement>("[data-menu]");
const nav = document.querySelector<HTMLElement>("[data-nav]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("is-open", open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((link) => {
  link.addEventListener("click", () => {
    if (!location.hash || !document.querySelector("[data-home]")) return;
    link.href = `${link.href.split("#")[0]}${location.hash}`;
  });
});

function alignDeepLink() {
  if (!location.hash) return;
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  target?.scrollIntoView({ behavior: "auto", block: "start" });
}

if (location.hash) {
  const alignAfterLayout = () => {
    requestAnimationFrame(() => requestAnimationFrame(alignDeepLink));
    window.setTimeout(alignDeepLink, 120);
  };
  if (document.readyState === "complete") alignAfterLayout();
  else window.addEventListener("load", alignAfterLayout, { once: true });
}
