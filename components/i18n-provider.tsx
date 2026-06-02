"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react"
import { translations, type Lang } from "@/lib/translations"
import { getNestedValue } from "@/lib/translations"

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

const STORAGE_KEY = "romanet-lang"

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && ["en", "es", "it", "el"].includes(stored)) {
      setLangState(stored)
      document.documentElement.lang = stored
    }
    setHydrated(true)
  }, [])

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
    document.documentElement.lang = newLang
  }, [])

  const t = useCallback(
    (key: string) => {
      const dict = translations[lang] as Record<string, unknown>
      const value = getNestedValue(dict, key)
      if (typeof value === "string") return value
      const fallback = getNestedValue(
        translations.en as Record<string, unknown>,
        key
      )
      if (typeof fallback === "string") return fallback
      return key
    },
    [lang]
  )

  // Prevent hydration mismatch: always start with English on first render,
  // then switch to stored language after mount
  if (!hydrated) {
    const fallbackT = (key: string) => {
      const value = getNestedValue(translations.en as Record<string, unknown>, key)
      if (typeof value === "string") return value
      return key
    }
    return (
      <I18nContext.Provider value={{ lang: "en", setLang: () => {}, t: fallbackT }}>
        {children}
      </I18nContext.Provider>
    )
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useTranslation must be used within I18nProvider")
  }
  return context
}
