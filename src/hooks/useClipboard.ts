import { useState, useCallback } from 'react';

export const useClipboard = (resetDuration: number = 2500) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator?.clipboard) {
          await navigator.clipboard.writeText(text);
          setHasCopied(true);
          setTimeout(() => setHasCopied(false), resetDuration);
          return true;
        } else {
          // Fallback
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setHasCopied(true);
          setTimeout(() => setHasCopied(false), resetDuration);
          return true;
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
      }
    },
    [resetDuration]
  );

  return { hasCopied, copy };
};

