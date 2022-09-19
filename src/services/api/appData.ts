import { Language } from "../../models/states/userSelection";

export class AppDataApi {
  private static languageKey = "language";

  static getSelectedLanguage() {
    const result = localStorage.getItem(this.languageKey);

    if (result === null) return Language.NOTHING;

    return result;
  }

  static setSelectedLanguage(newSelectedLanguage: Language) {
    if (localStorage.getItem(this.languageKey))
      localStorage.removeItem(this.languageKey);

    localStorage.setItem(this.languageKey, newSelectedLanguage);

    return newSelectedLanguage;
  }
}
