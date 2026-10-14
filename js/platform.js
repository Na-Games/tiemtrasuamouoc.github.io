/** Clipboard fallback for file:// and Android wrappers without Clipboard API. */
export async function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) { /* Try the synchronous WebView API below. */ }
  const input = document.createElement('textarea');
  input.value = text;
  input.readOnly = true;
  input.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';
  const active = document.activeElement;
  document.body.appendChild(input);
  let copied = false;
  try {
    input.focus(); input.select(); input.setSelectionRange(0, text.length);
    copied = !!document.execCommand('copy');
  } catch (e) { /* The caller offers manual selection. */ }
  finally { input.remove(); if (active && active.focus) active.focus(); }
  return copied;
}
