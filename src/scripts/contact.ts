// The number is assembled at click time so it never appears in the page HTML.
const PHONE = [48, 57, 51, 45, 55, 49, 53, 45, 53, 56, 51, 55];
const decodePhone = () => String.fromCharCode(...PHONE);

type Method = { label: string; value: string; url?: string; hint?: string; aria?: string };
type ChatData = {
  to: string;
  options: { label: string; subject: string; reply: string }[];
  restart: string;
  methods: { email: Method; linkedin: Method; github: Method; phone: Method };
};

const el = (tag: string, cls: string, text?: string) => {
  const n = document.createElement(tag);
  n.className = cls;
  if (text) n.textContent = text;
  return n;
};

/** Delegated, so the chat and copy button keep working after a page swap. */
export function initContact() {
  const roots = () => [...document.querySelectorAll<HTMLElement>("[data-chat]")];

  const typing = () => {
    const t = el("div", "ct-bot ct-typing");
    t.append(el("i", ""), el("i", ""), el("i", ""));
    return t;
  };

  const run = (root: HTMLElement, idx: number) => {
    const data = JSON.parse(root.dataset.chat!) as ChatData;
    const log = root.querySelector<HTMLElement>("[data-chat-log]")!;
    const opts = root.querySelector<HTMLElement>("[data-chat-opts]")!;
    const opt = data.options[idx];
    const scroll = () => log.scrollTo({ top: log.scrollHeight, behavior: "smooth" });

    opts.replaceChildren();
    log.append(el("p", "ct-user", opt.label));
    const t = typing();
    log.append(t);
    scroll();

    window.setTimeout(() => {
      t.replaceWith(el("p", "ct-bot", opt.reply));
      const grid = el("div", "ct-methods");

      const mk = (m: Method, href?: string, ext = false) => {
        const a = el(href ? "a" : "button", "ct-method");
        if (href) {
          (a as HTMLAnchorElement).href = href;
          if (ext) { (a as HTMLAnchorElement).target = "_blank"; (a as HTMLAnchorElement).rel = "noreferrer noopener"; }
        } else (a as HTMLButtonElement).type = "button";
        a.append(el("span", "ct-method-l", m.label), el("span", "ct-method-v", m.value));
        return a;
      };
      grid.append(
        mk(data.methods.email, `mailto:${data.to}?subject=${encodeURIComponent(opt.subject)}`),
        mk(data.methods.linkedin, data.methods.linkedin.url, true),
        mk(data.methods.github, data.methods.github.url, true),
      );
      const phone = mk(data.methods.phone);
      phone.setAttribute("data-phone-reveal", "");
      phone.setAttribute("aria-label", data.methods.phone.aria ?? "");
      phone.lastElementChild!.textContent = `${data.methods.phone.value}  ·  ${data.methods.phone.hint ?? ""}`;
      grid.append(phone);
      log.append(grid);

      const again = el("button", "ct-reply", data.restart);
      again.setAttribute("type", "button");
      again.setAttribute("data-chat-restart", "");
      opts.append(again);
      scroll();
    }, 900);
  };

  document.addEventListener("click", (e) => {
    const target = e.target as Element;

    const optEl = target.closest<HTMLElement>("[data-chat-opt]");
    if (optEl) {
      e.preventDefault();
      const root = optEl.closest<HTMLElement>("[data-chat]")!;
      run(root, Number(optEl.dataset.chatOpt));
      return;
    }

    const restart = target.closest<HTMLElement>("[data-chat-restart]");
    if (restart) {
      const root = restart.closest<HTMLElement>("[data-chat]")!;
      const data = JSON.parse(root.dataset.chat!) as ChatData;
      const log = root.querySelector<HTMLElement>("[data-chat-log]")!;
      const opts = root.querySelector<HTMLElement>("[data-chat-opts]")!;
      while (log.children.length > 2) log.lastElementChild!.remove();
      opts.replaceChildren();
      data.options.forEach((o, i) => {
        const a = el("a", "ct-reply", o.label) as HTMLAnchorElement;
        a.href = `mailto:${data.to}?subject=${encodeURIComponent(o.subject)}`;
        a.dataset.chatOpt = String(i);
        opts.append(a);
      });
      return;
    }

    const phoneBtn = target.closest<HTMLElement>("[data-phone-reveal]");
    if (phoneBtn) {
      const phone = decodePhone();
      const a = el("a", phoneBtn.className) as HTMLAnchorElement;
      a.href = `tel:${phone.replace(/-/g, "")}`;
      a.append(el("span", "ct-method-l", phoneBtn.firstElementChild?.textContent ?? ""), el("span", "ct-method-v", phone));
      phoneBtn.replaceWith(a);
      return;
    }

    const copy = target.closest<HTMLElement>("[data-copy]");
    if (copy) {
      void navigator.clipboard?.writeText(copy.dataset.copy ?? "");
      const label = copy.querySelector<HTMLElement>("[data-copy-label]");
      if (label) {
        const old = label.textContent;
        label.textContent = copy.dataset.copied ?? "Copied";
        window.setTimeout(() => { label.textContent = old; }, 1600);
      }
    }
  });

  void roots;
}
