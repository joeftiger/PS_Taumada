function TR_Taumada() {
  Browsers.Item(btEdge).Run("https://duckduckgo.com/");
  const window = Aliases.browser.BrowserWindow;
  window.Close();
}