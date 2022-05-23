import { useTranslation } from "react-i18next";
import { DivFadeInUpContent } from "./animations/genericAnimations";

export function Footer(){
  const { t } = useTranslation();
  return (
    <footer className="text-white flex items-center justify-center p-2 mb-2 z-10">
      <DivFadeInUpContent>
        <p className="max-w-5xl opacity-60 hover:opacity-100 transition-all">
          {t('developed-by')}
          <a href="https://links.ernane.dev" target="_blank" className="underline underline-offset-4">
            Ernane Ferreira
          </a>
        </p>
      </DivFadeInUpContent>
    </footer>
  );
}