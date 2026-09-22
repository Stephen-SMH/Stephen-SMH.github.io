import { en } from "./en";
import { my } from "./my";
import { th } from "./th";
import type { DeepPartial, Dict, Locale } from "./types";

export * from "./types";

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** Objects merge key-by-key; arrays and primitives are replaced wholesale. */
function merge<T>(base: T, over: DeepPartial<T> | undefined): T {
  if (over === undefined) return base;
  if (!isPlainObject(base) || !isPlainObject(over)) return over as T;
  const out: Record<string, unknown> = { ...base };
  for (const key of Object.keys(over)) {
    out[key] = merge(out[key], (over as Record<string, unknown>)[key] as never);
  }
  return out as T;
}

const overrides: Record<Locale, DeepPartial<Dict> | undefined> = { en: undefined, my, th };

export function getDict(locale: Locale): Dict {
  return merge(en, overrides[locale]);
}
