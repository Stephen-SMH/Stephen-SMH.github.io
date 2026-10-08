// The number is assembled at click time so it never appears in the page HTML.
const PHONE = [48, 57, 51, 45, 55, 49, 53, 45, 53, 56, 51, 55];
const decodePhone = () => String.fromCharCode(...PHONE);

/** Delegated, so the form + phone reveal keep working after a page swap. */
export function initContact() {
  document.addEventListener("submit", (e) => {
    const formEl = (e.target as Element).closest<HTMLFormElement>("[data-contact-form]");
    if (!formEl) return;
    e.preventDefault();

    const status = formEl.querySelector<HTMLElement>("[data-form-status]")!;
    const data = new FormData(formEl);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const subject = get("subject");
    const message = get("message");

    status.replaceChildren();
    if (!name || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      const msg = document.createElement("span");
      msg.className = "inline-block rounded-lg bg-destructive-soft px-3 py-1.5 text-destructive-soft-ink";
      msg.textContent = formEl.dataset.invalid ?? "";
      status.append(msg);
      return;
    }
    // No backend: hand the message to the visitor's own mail client.
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${formEl.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const ok = document.createElement("span");
    ok.className = "text-ink-soft";
    ok.textContent = formEl.dataset.opening ?? "";
    status.append(ok);
  });

  document.addEventListener("click", (e) => {
    const btn = (e.target as Element).closest<HTMLElement>("[data-phone-reveal]");
    if (!btn) return;
    const phone = decodePhone();
    const a = document.createElement("a");
    a.href = `tel:${phone.replace(/-/g, "")}`;
    a.className = btn.className.replace("w-full text-left", "").trim();
    const label = btn.firstElementChild!.cloneNode(true);
    const value = document.createElement("span");
    value.className = "font-mono text-[13px] text-ink transition group-hover:text-accent";
    value.textContent = phone;
    a.append(label, value);
    btn.replaceWith(a);
  });
}
