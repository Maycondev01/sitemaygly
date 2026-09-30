// Edite este array para trocar título, ícone e URL de cada botão.
// Ícones disponíveis: whatsapp, instagram, site, catalogo, avaliacao
const links = [
  { icon: "whatsapp",  label: "Fale no WhatsApp",   sub: "Resposta rápida",     url: "https://wa.me/5581999016948" },
  { icon: "catalogo",  label: "Ver catálogo",        sub: "Produtos e preços",   url: "#" },
  { icon: "instagram", label: "Instagram",           sub: "@maygly3d",           url: "https://instagram.com/maygly3d" },
  { icon: "site",      label: "Site",                sub: "maygly.com.br",       url: "#" },
  { icon: "avaliacao", label: "Avaliar no Google",   sub: "Deixe sua avaliação", url: "#" }
];

const icons = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="none"><path fill="#00D9FF" d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.7-1.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/><path fill="#00D9FF" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.1L2 22l5.1-1.3c1.5.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C3.9 15 3.4 13.5 3.4 12 3.4 7.2 7.2 3.4 12 3.4S20.6 7.2 20.6 12 16.8 20.2 12 20.2z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="#00D9FF" stroke-width="1.6"/><circle cx="12" cy="12" r="4.2" stroke="#00D9FF" stroke-width="1.6"/><circle cx="17.4" cy="6.6" r="1.1" fill="#00D9FF"/></svg>',
  site: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#00D9FF" stroke-width="1.6"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3z" stroke="#00D9FF" stroke-width="1.4"/></svg>',
  catalogo: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 3.5h9l3.5 3.5V20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5z" stroke="#00D9FF" stroke-width="1.5"/><path d="M8.5 12h7M8.5 15.3h7M8.5 8.7h4" stroke="#00D9FF" stroke-width="1.4" stroke-linecap="round"/></svg>',
  avaliacao: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" stroke="#00D9FF" stroke-width="1.4" stroke-linejoin="round"/></svg>'
};

const nav = document.getElementById("links");
links.forEach(l => {
  const a = document.createElement("a");
  a.className = "link";
  a.href = l.url;
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = `
    <span class="icon">${icons[l.icon] || ""}</span>
    <span>
      <span class="label">${l.label}</span>
      <span class="sub">${l.sub || ""}</span>
    </span>`;
  nav.appendChild(a);
});
