// AMBIENTE DE TESTE do Orto+ (banco "Orto+ Teste"). Nada aqui mexe nas clínicas reais.
// A chave "publishable" é pública e pode ficar aqui. NUNCA coloque a chave "secret" ou "service_role".
window.CONFIG = {
  SUPABASE_URL: "https://lixbltgsrzvgcvyakkux.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_GfkVNxhBYaXuUzltcDVx-Q_Fz-d6SZk",
  LOGIN_DOMAIN: "acesso.orto.app",
  AMBIENTE: "teste"
};
(function () {
  function faixa() {
    if (document.getElementById('faixa-teste')) return;
    var d = document.createElement('div');
    d.id = 'faixa-teste';
    d.textContent = 'AMBIENTE DE TESTE · dados fictícios';
    d.style.cssText = 'position:fixed;left:50%;bottom:6px;transform:translateX(-50%);z-index:2147483647;background:#d97706;color:#fff;font:600 11px/1 system-ui,sans-serif;letter-spacing:.04em;padding:5px 12px;border-radius:999px;pointer-events:none;opacity:.92';
    document.body.appendChild(d);
  }
  if (document.body) faixa(); else document.addEventListener('DOMContentLoaded', faixa);
  document.title = '[TESTE] ' + document.title;
})();
