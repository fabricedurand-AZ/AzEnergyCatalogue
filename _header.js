/* ==========================================================
   AZ Energy — Header Component v1.0
   Usage: <script src="_header.js"></script> in <body>
   Cart shared via localStorage key "az_cart"
   ========================================================== */
(function(){
'use strict';

const LOGO='data:image/png;base64,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';

const PAGES=[
  {id:'catalogue',    icon:'📦', label:'Catalogue',          sub:'Batteries · Piles · Éclairage · Lubrifiants',       href:'catalogue.html'},
  {id:'recherche',    icon:'🔍', label:'Recherche Batterie',  sub:'Trouver la référence exacte par véhicule',          href:'recherche-batteries.html'},
  {id:'calculateurs', icon:'🧮', label:'Calculateurs',        sub:'Véhicule · Solaire · Marine · Résidentiel',         href:'calculateurs.html'},
  {id:'pdf-metiers',  icon:'📄', label:'Catalogue Métiers',   sub:'PDF téléchargeable par univers professionnel',      href:'catalogue-pdf-metiers.html'},
];

const LANGS=[
  {c:'fr',f:'🇫🇷',l:'Français'},
  {c:'en',f:'🇬🇧',l:'English'},
  {c:'es',f:'🇪🇸',l:'Español'},
  {c:'it',f:'🇮🇹',l:'Italiano'},
  {c:'de',f:'🇩🇪',l:'Deutsch'},
  {c:'ar',f:'🇸🇦',l:'العربية'},
  {c:'nl',f:'🇳🇱',l:'Nederlands'},
  {c:'pt',f:'🇵🇹',l:'Português'},
  {c:'ur',f:'🇵🇰',l:'اردو'},
  {c:'uk',f:'🇺🇦',l:'Українська'},
  {c:'pl',f:'🇵🇱',l:'Polski'},
];

const CART_KEY='az_cart';
function cartCount(){try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]').reduce((s,i)=>s+(parseInt(i.qty)||1),0);}catch(e){return 0;}}

function currentPage(){
  const p=(window.location.pathname.split('/').pop()||'').replace(/\.html$/,'');
  if(!p||p==='index') return 'catalogue';
  if(p==='catalogue') return 'catalogue';
  if(p==='recherche-batteries') return 'recherche';
  if(p==='calculateurs') return 'calculateurs';
  if(p.includes('pdf')) return 'pdf-metiers';
  return p;
}
function currentLang(){return localStorage.getItem('az_lang')||document.documentElement.lang||'fr';}

// ── CSS ──────────────────────────────────────────────────────
const CSS=`
#az-header,#az-megamenu,#az-cart-overlay,#az-cart-drawer,#az-quick-order{box-sizing:border-box;font-family:'DM Sans','Segoe UI',Arial,sans-serif;}
#az-header *,#az-megamenu *,#az-cart-overlay *,#az-quick-order *{box-sizing:border-box;}
#az-header-spacer{height:58px;display:block;}
#az-header{position:fixed;top:0;left:0;right:0;height:58px;background:rgba(10,10,12,0.96);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(212,168,71,0.15);display:flex;align-items:center;padding:0 16px;gap:10px;z-index:2000;}
#az-logo{display:flex;align-items:center;cursor:pointer;flex-shrink:0;text-decoration:none;}
#az-logo img{height:32px;width:auto;}
#az-menu-btn{display:flex;align-items:center;gap:7px;background:transparent;border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);border-radius:8px;padding:6px 12px;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit;transition:all .15s;flex-shrink:0;}
#az-menu-btn:hover,#az-menu-btn.open{border-color:rgba(212,168,71,0.5);color:#D4A847;background:rgba(212,168,71,0.07);}
.az-hbg{display:flex;flex-direction:column;gap:4px;}
.az-hbg span{display:block;width:15px;height:1.5px;background:currentColor;border-radius:2px;transition:all .2s;}
#az-menu-btn.open .az-hbg span:nth-child(1){transform:rotate(45deg) translate(4px,4px);}
#az-menu-btn.open .az-hbg span:nth-child(2){opacity:0;}
#az-menu-btn.open .az-hbg span:nth-child(3){transform:rotate(-45deg) translate(4px,-4px);}
#az-search-wrap{flex:1;max-width:400px;position:relative;}
#az-search-input{width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:7px 34px 7px 34px;color:#fff;font-size:13px;font-family:inherit;outline:none;transition:border-color .2s;}
#az-search-input:focus{border-color:rgba(212,168,71,0.4);}
#az-search-input::placeholder{color:rgba(255,255,255,0.28);}
#az-search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);opacity:.35;pointer-events:none;}
#az-hdr-gap{flex:1;}
#az-lang-wrap{position:relative;flex-shrink:0;}
#az-lang-btn{display:flex;align-items:center;gap:5px;background:transparent;border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:12px;font-family:inherit;transition:all .15s;white-space:nowrap;}
#az-lang-btn:hover{border-color:rgba(212,168,71,0.4);color:#D4A847;}
#az-lang-drop{display:none;position:absolute;top:calc(100% + 6px);right:0;background:#1c1c1e;border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;min-width:155px;box-shadow:0 20px 50px rgba(0,0,0,0.7);z-index:2100;}
#az-lang-drop.open{display:block;}
.az-lo{display:flex;align-items:center;gap:8px;padding:8px 14px;color:rgba(255,255,255,0.65);font-size:12px;cursor:pointer;transition:background .12s;font-family:inherit;}
.az-lo:hover,.az-lo.on{background:rgba(212,168,71,0.1);color:#D4A847;}
#az-cart-btn{position:relative;background:transparent;border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);border-radius:8px;padding:6px 12px;cursor:pointer;font-size:16px;font-family:inherit;transition:all .15s;flex-shrink:0;}
#az-cart-btn:hover{border-color:rgba(212,168,71,0.5);background:rgba(212,168,71,0.07);}
#az-cart-badge{position:absolute;top:-6px;right:-6px;background:#D4A847;color:#000;border-radius:10px;font-size:9px;font-weight:800;min-width:18px;height:18px;display:none;align-items:center;justify-content:center;padding:0 4px;font-family:inherit;}
#az-cart-badge.show{display:flex;}
#az-megamenu{display:none;position:fixed;top:58px;left:0;right:0;background:rgba(11,11,13,0.98);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid rgba(212,168,71,0.12);z-index:1999;padding:24px 32px 28px;box-shadow:0 20px 60px rgba(0,0,0,0.7);animation:azMIn .18s ease;}
#az-megamenu.open{display:block;}
@keyframes azMIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
.az-mlbl{font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(212,168,71,0.55);margin-bottom:12px;}
.az-mgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:18px;}
@media(max-width:680px){.az-mgrid{grid-template-columns:repeat(2,1fr);}}
.az-mcard{display:flex;flex-direction:column;gap:3px;padding:14px 15px;border:1px solid rgba(255,255,255,0.06);border-radius:10px;cursor:pointer;transition:all .15s;text-decoration:none;color:inherit;}
.az-mcard:hover{border-color:rgba(212,168,71,0.35);background:rgba(212,168,71,0.05);}
.az-mcard.active{border-color:rgba(212,168,71,0.4);background:rgba(212,168,71,0.06);}
.az-mci{font-size:20px;margin-bottom:3px;}
.az-mcn{font-size:13px;font-weight:700;color:#fff;}
.az-mcs{font-size:11px;color:rgba(255,255,255,0.38);line-height:1.4;}
.az-mdiv{height:1px;background:rgba(255,255,255,0.05);margin-bottom:14px;}
.az-mbot{display:flex;gap:7px;flex-wrap:wrap;}
.az-mlink{display:flex;align-items:center;gap:6px;padding:6px 13px;border:1px solid rgba(255,255,255,0.07);border-radius:20px;font-size:12px;color:rgba(255,255,255,0.55);text-decoration:none;cursor:pointer;transition:all .15s;background:transparent;font-family:inherit;}
.az-mlink:hover{border-color:rgba(212,168,71,0.4);color:#D4A847;background:rgba(212,168,71,0.06);}
#az-menu-ov{display:none;position:fixed;inset:58px 0 0 0;z-index:1998;}
#az-menu-ov.open{display:block;}
#az-cart-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:3000;backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);}
#az-cart-overlay.open{display:block;}
#az-cart-drawer{position:fixed;top:0;right:-420px;width:400px;max-width:100vw;height:100vh;background:#111113;border-left:1px solid rgba(212,168,71,0.12);z-index:3001;display:flex;flex-direction:column;transition:right .3s cubic-bezier(.4,0,.2,1);box-shadow:-20px 0 60px rgba(0,0,0,0.6);}
#az-cart-drawer.open{right:0;}
#az-cdhdr{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid rgba(255,255,255,0.06);flex-shrink:0;}
#az-cdtitle{font-size:14px;font-weight:700;color:#fff;}
#az-cdclose{background:rgba(255,255,255,0.06);border:none;border-radius:6px;color:rgba(255,255,255,0.55);padding:5px 9px;cursor:pointer;font-size:14px;font-family:inherit;transition:background .15s;}
#az-cdclose:hover{background:rgba(255,255,255,0.12);color:#fff;}
#az-cdbody{flex:1;overflow-y:auto;padding:14px 18px;}
#az-cdbody::-webkit-scrollbar{width:4px;}
#az-cdbody::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px;}
#az-cdfoot{border-top:1px solid rgba(255,255,255,0.06);padding:14px 18px;flex-shrink:0;display:none;}
.az-cd-empty{text-align:center;padding:48px 20px;color:rgba(255,255,255,0.3);font-size:13px;}
.az-cd-empty span{font-size:36px;display:block;margin-bottom:12px;}
.az-cdtotal{font-size:11px;color:rgba(255,255,255,0.38);margin-bottom:10px;}
.az-cdtotal strong{color:#D4A847;font-size:13px;}
.az-cdbtns{display:flex;gap:7px;}
.az-cdbtn-s{flex:1;padding:8px 10px;background:transparent;border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.55);border-radius:8px;cursor:pointer;font-size:11px;font-weight:600;font-family:inherit;transition:all .15s;}
.az-cdbtn-s:hover{border-color:rgba(255,255,255,0.22);color:#fff;}
.az-cdbtn-p{flex:2;padding:8px 10px;background:#D4A847;border:none;color:#000;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;font-family:inherit;transition:background .15s;}
.az-cdbtn-p:hover{background:#e6bc55;}
.az-cditem{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);}
.az-cditem-info{flex:1;min-width:0;}
.az-cditem-ref{font-size:12px;font-weight:700;color:#fff;margin-bottom:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.az-cditem-sub{font-size:10px;color:rgba(255,255,255,0.38);}
.az-cditem-qty{font-size:11px;color:rgba(255,255,255,0.45);flex-shrink:0;}
.az-cditem-rm{background:rgba(232,64,42,.12);border:1px solid rgba(232,64,42,.25);color:#E8402A;border-radius:5px;padding:3px 7px;cursor:pointer;font-size:10px;font-family:inherit;flex-shrink:0;}
#az-quick-order{display:none;position:fixed;top:58px;left:50%;transform:translateX(-50%);background:#1c1c1e;border:1px solid rgba(212,168,71,0.3);border-top:none;border-radius:0 0 12px 12px;padding:12px 16px;z-index:1990;min-width:320px;box-shadow:0 20px 40px rgba(0,0,0,0.6);}
#az-quick-order.open{display:block;}
#az-qo-row{display:flex;gap:8px;align-items:center;}
#az-qo-in{flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:8px 12px;color:#fff;font-size:13px;font-family:inherit;outline:none;}
#az-qo-in:focus{border-color:rgba(212,168,71,0.4);}
#az-qo-add{padding:8px 16px;background:#D4A847;border:none;border-radius:7px;color:#000;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;}
#az-qo-hint{font-size:10px;color:rgba(255,255,255,0.28);margin-top:6px;text-align:center;}
@media(max-width:580px){#az-search-wrap{display:none;}#az-quick-order{left:10px;right:10px;transform:none;min-width:0;}}
#sugg-box{display:none;position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:2200;background:rgba(12,12,16,0.98);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border:1px solid rgba(255,255,255,0.1);border-radius:10px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,0.8),0 0 0 1px rgba(212,168,71,0.07);min-width:280px;}
#sugg-box.open{display:block;}
.sugg-sep{font-size:9px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(212,168,71,0.55);padding:10px 12px 4px;font-family:'DM Sans','Segoe UI',Arial,sans-serif;}
.sugg-item{display:flex;align-items:center;gap:8px;padding:9px 12px;color:rgba(255,255,255,0.72);font-size:12.5px;cursor:pointer;font-family:'DM Sans','Segoe UI',Arial,sans-serif;transition:background .1s,color .1s;border-bottom:1px solid rgba(255,255,255,0.04);}
.sugg-item:last-child{border-bottom:none;}
.sugg-item:hover,.sugg-item.sel{background:rgba(212,168,71,0.1);color:#fff;}
.sugg-item strong{color:#fff;font-weight:700;}
#az-scan-btn{position:absolute;right:7px;top:50%;transform:translateY(-50%);background:transparent;border:none;color:rgba(255,255,255,0.38);cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:5px;transition:color .15s;line-height:1;}
#az-scan-btn:hover{color:#D4A847;}
#az-scan-overlay{display:none;position:fixed;inset:0;z-index:9000;background:#000;flex-direction:column;align-items:center;justify-content:center;}
#az-scan-overlay.open{display:flex;}
#az-scan-video{width:100%;height:100%;object-fit:cover;position:absolute;inset:0;}
#az-scan-frame{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:20px;padding:20px;}
#az-scan-box{width:260px;height:180px;border:2px solid #D4A847;border-radius:14px;position:relative;box-shadow:0 0 0 9999px rgba(0,0,0,0.6);overflow:hidden;}
#az-scan-line{position:absolute;left:10px;right:10px;height:2px;background:linear-gradient(90deg,transparent,#D4A847,transparent);top:20%;animation:azSL 1.6s ease-in-out infinite;}
@keyframes azSL{0%,100%{top:10%;}50%{top:88%;}}
#az-scan-msg{color:rgba(255,255,255,0.75);font-size:13px;text-align:center;z-index:1;font-family:'DM Sans','Segoe UI',Arial,sans-serif;max-width:280px;line-height:1.6;}
#az-scan-close{position:absolute;top:20px;right:16px;z-index:2;background:rgba(255,255,255,0.15);border:none;color:#fff;border-radius:50%;width:42px;height:42px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:inherit;}
#az-scan-flash{position:fixed;inset:0;background:#fff;z-index:9001;opacity:0;pointer-events:none;transition:opacity .08s;}
`;

// ── Init ─────────────────────────────────────────────────────
function init(){
  const style=document.createElement('style');
  style.textContent=CSS;
  document.head.appendChild(style);

  const ap=currentPage();
  const al=currentLang();
  const lobj=LANGS.find(l=>l.c===al)||LANGS[0];
  const cnt=cartCount();

  // Spacer
  const spacer=document.createElement('div');
  spacer.id='az-header-spacer';

  // Header
  const hdr=document.createElement('header');
  hdr.id='az-header';
  hdr.innerHTML=
    '<a id="az-logo" href="catalogue.html" title="AZ Energy"><img src="'+LOGO+'" alt="AZ Energy"/></a>'+
    '<button id="az-menu-btn" onclick="azToggleMenu()" title="Menu"><div class="az-hbg"><span></span><span></span><span></span></div> <span>Menu</span></button>'+
    '<div id="az-search-wrap">'+
      '<svg id="az-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>'+
      '<input id="az-search-input" type="text" placeholder="Référence, marque, technologie… (Ctrl+K)" autocomplete="off" oninput="azSearchLive(this.value)" onkeydown="if(event.key===\'Enter\')azSearchGo(this.value);if(event.key===\'Escape\')this.value=\'\',azSearchLive(\'\')"/>'+
      '<button id="az-scan-btn" onclick="azOpenScan()" title="Scanner un code-barres"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7V1h-6M1 7V1h6M23 17v6h-6M1 17v6h6"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>'+
    '</div>'+
    '<div id="az-hdr-gap"></div>'+
    '<div id="az-lang-wrap">'+
      '<button id="az-lang-btn" onclick="azToggleLang(event)"><span id="az-lf">'+lobj.f+'</span><span id="az-lc">'+al.toUpperCase()+'</span> ▾</button>'+
      '<div id="az-lang-drop">'+LANGS.map(l=>'<div class="az-lo'+(l.c===al?' on':'')+'" onclick="azSetLang(\''+l.c+'\')">'+l.f+' '+l.l+'</div>').join('')+'</div>'+
    '</div>'+
    '<button id="az-cart-btn" onclick="azOpenCart()" title="Panier devis">🛒<span id="az-cart-badge" class="'+(cnt>0?'show':'')+'">'+cnt+'</span></button>';

  // Mega menu
  const menu=document.createElement('div');
  menu.id='az-megamenu';
  menu.innerHTML=
    '<div class="az-mlbl">Navigation</div>'+
    '<div class="az-mgrid">'+
      PAGES.map(p=>'<a class="az-mcard'+(p.id===ap?' active':'')+'" href="'+p.href+'"><div class="az-mci">'+p.icon+'</div><div class="az-mcn">'+p.label+'</div><div class="az-mcs">'+p.sub+'</div></a>').join('')+
    '</div>'+
    '<div class="az-mdiv"></div>'+
    '<div class="az-mbot">'+
      '<a class="az-mlink" href="catalogue.html" onclick="if(window.nav)window.nav(\'equipe\'),event.preventDefault()">👥 Équipe</a>'+
      '<a class="az-mlink" href="catalogue.html" onclick="if(window.nav)window.nav(\'contact\'),event.preventDefault()">📞 Contact</a>'+
      '<button class="az-mlink" onclick="azOpenQO()">⚡ Commande rapide</button>'+
    '</div>';

  const menuOv=document.createElement('div');
  menuOv.id='az-menu-ov';
  menuOv.onclick=azCloseMenu;

  // Cart drawer
  const cartOv=document.createElement('div');
  cartOv.id='az-cart-overlay';
  cartOv.onclick=function(e){if(e.target===this)azCloseCart();};

  const drawer=document.createElement('div');
  drawer.id='az-cart-drawer';
  drawer.innerHTML=
    '<div id="az-cdhdr"><span id="az-cdtitle">🛒 Panier devis</span><button id="az-cdclose" onclick="azCloseCart()">✕</button></div>'+
    '<div id="az-cdbody"><div class="az-cd-empty"><span>🛒</span>Votre panier est vide.</div></div>'+
    '<div id="az-cdfoot"></div>';
  cartOv.appendChild(drawer);

  // Quick order
  const qo=document.createElement('div');
  qo.id='az-quick-order';
  qo.innerHTML=
    '<div id="az-qo-row">'+
      '<input id="az-qo-in" type="text" placeholder="Référence (ex: F432, 574012068…)" onkeydown="if(event.key===\'Enter\')azQuickAdd();if(event.key===\'Escape\')azCloseQO()"/>'+
      '<button id="az-qo-add" onclick="azQuickAdd()">+ Ajouter</button>'+
    '</div>'+
    '<div id="az-qo-hint">⌨️ Entrée pour ajouter · Échap pour fermer</div>';

  // Inject into DOM
  document.body.insertBefore(spacer,document.body.firstChild);
  document.body.insertBefore(hdr,document.body.firstChild);
  document.body.appendChild(menu);
  document.body.appendChild(menuOv);
  document.body.appendChild(cartOv);
  document.body.appendChild(qo);

  // Scan overlay
  var scanOv=document.createElement('div');
  scanOv.id='az-scan-overlay';
  scanOv.innerHTML=
    '<video id="az-scan-video" playsinline autoplay muted></video>'+
    '<div id="az-scan-frame">'+
      '<div id="az-scan-box"><div id="az-scan-line"></div></div>'+
      '<div id="az-scan-msg">📷 Pointez vers un code-barres EAN-13 ou QR Code</div>'+
    '</div>'+
    '<button id="az-scan-close" onclick="azCloseScan()">✕</button>'+
    '<div id="az-scan-flash"></div>';
  document.body.appendChild(scanOv);

  // Detect existing top bar (e.g. .info-bar in catalogue.html) and reposition header below it
  requestAnimationFrame(function(){
    var bar=document.querySelector('.info-bar');
    if(bar){
      var h=bar.offsetHeight||0;
      if(h>0){
        var hEl=document.getElementById('az-header');
        var sEl=document.getElementById('az-header-spacer');
        var mEl=document.getElementById('az-megamenu');
        var qEl=document.getElementById('az-quick-order');
        var ovEl=document.getElementById('az-menu-ov');
        if(hEl)hEl.style.top=h+'px';
        if(sEl)sEl.style.height=(h+58)+'px';
        if(mEl)mEl.style.top=(h+58)+'px';
        if(qEl)qEl.style.top=(h+58)+'px';
        if(ovEl)ovEl.style.inset=(h+58)+'px 0 0 0';
        document.documentElement.style.setProperty('--hh',(h+58)+'px');
      }
    }
  });

  // Move existing sugg-box under new search if on catalogue page
  setTimeout(function(){
    const suggWrap=document.getElementById('sugg-wrap');
    const sw=document.getElementById('az-search-wrap');
    if(suggWrap&&sw){
      const sb=document.getElementById('sugg-box');
      if(sb){
        sb.style.cssText='';
        sw.appendChild(sb);
      }
    }
    // Sync existing search input if on catalogue
    const gs=document.getElementById('gs');
    const asi=document.getElementById('az-search-input');
    if(gs&&asi){
      // Keep them in sync
      gs.style.display='none';
      asi.addEventListener('input',function(){if(gs)gs.value=this.value;});
    }
    // Handle ?q= URL param to auto-search
    const params=new URLSearchParams(window.location.search);
    const q=params.get('q');
    if(q&&asi){
      asi.value=q;
      setTimeout(function(){if(typeof window.onQ==='function')window.onQ(q);},300);
    }
  },50);

  // Keyboard shortcuts
  document.addEventListener('keydown',function(e){
    if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();document.getElementById('az-search-input').focus();}
    if(e.key==='Escape'){azCloseMenu();azCloseCart();azCloseQO();var d=document.getElementById('az-lang-drop');if(d)d.classList.remove('open');}
  });
  window.addEventListener('storage',function(e){if(e.key===CART_KEY)azUpdateBadge();});
  window.addEventListener('az-cart-updated',azUpdateBadge);
  document.addEventListener('click',function(e){
    var ld=document.getElementById('az-lang-drop');
    if(ld&&!e.target.closest('#az-lang-wrap'))ld.classList.remove('open');
  });
}

// ── Public API ───────────────────────────────────────────────
window.azToggleMenu=function(){
  var b=document.getElementById('az-menu-btn'),m=document.getElementById('az-megamenu'),o=document.getElementById('az-menu-ov');
  var open=m.classList.contains('open');
  if(open){azCloseMenu();}else{b.classList.add('open');m.classList.add('open');o.classList.add('open');var ld=document.getElementById('az-lang-drop');if(ld)ld.classList.remove('open');}
};
function azCloseMenu(){
  var b=document.getElementById('az-menu-btn'),m=document.getElementById('az-megamenu'),o=document.getElementById('az-menu-ov');
  if(b)b.classList.remove('open');if(m)m.classList.remove('open');if(o)o.classList.remove('open');
}
window.azCloseMenu=azCloseMenu;

window.azToggleLang=function(e){
  e.stopPropagation();
  var d=document.getElementById('az-lang-drop');
  if(d){d.classList.toggle('open');azCloseMenu();}
};
window.azSetLang=function(code){
  localStorage.setItem('az_lang',code);
  var d=document.getElementById('az-lang-drop');if(d)d.classList.remove('open');
  var lobj=LANGS.find(function(l){return l.c===code;})||LANGS[0];
  var lf=document.getElementById('az-lf'),lc=document.getElementById('az-lc');
  if(lf)lf.textContent=lobj.f;if(lc)lc.textContent=code.toUpperCase();
  document.querySelectorAll('.az-lo').forEach(function(el){el.classList.toggle('on',el.dataset&&el.dataset.c===code);});
  if(typeof window.setL==='function')window.setL(code);
};

window.azUpdateBadge=function(){
  var cnt=cartCount(),b=document.getElementById('az-cart-badge');
  if(!b)return;b.textContent=cnt;b.classList.toggle('show',cnt>0);
};

window.azOpenCart=function(){
  if(typeof window.openCartModal==='function'){window.openCartModal();return;}
  azRenderDrawer();
  var o=document.getElementById('az-cart-overlay'),d=document.getElementById('az-cart-drawer');
  if(o)o.classList.add('open');if(d)d.classList.add('open');
  document.body.style.overflow='hidden';
};
window.azCloseCart=function(){
  var o=document.getElementById('az-cart-overlay'),d=document.getElementById('az-cart-drawer');
  if(o)o.classList.remove('open');if(d)d.classList.remove('open');
  document.body.style.overflow='';
  if(typeof window.closeCartModal==='function')window.closeCartModal();
};

function azRenderDrawer(){
  var cart=JSON.parse(localStorage.getItem(CART_KEY)||'[]');
  var body=document.getElementById('az-cdbody'),foot=document.getElementById('az-cdfoot');
  if(!body)return;
  if(!cart.length){
    body.innerHTML='<div class="az-cd-empty"><span>🛒</span>Votre panier est vide.<br><small style="font-size:11px;opacity:.5">Ajoutez des produits depuis le catalogue.</small></div>';
    if(foot)foot.style.display='none';return;
  }
  body.innerHTML=cart.map(function(it){
    return '<div class="az-cditem">'+
      '<div class="az-cditem-info"><div class="az-cditem-ref">'+(it.ref||it.name||'—')+'</div>'+
      '<div class="az-cditem-sub">'+(it.brand||'')+' '+(it.name||'')+'</div></div>'+
      '<span class="az-cditem-qty">×'+(it.qty||1)+'</span>'+
      '<button class="az-cditem-rm" onclick="azRmItem(\''+it.ref+'\')">✕</button></div>';
  }).join('');
  if(foot){
    var total=cart.reduce(function(s,i){return s+(parseInt(i.qty)||1);},0);
    foot.style.display='block';
    foot.innerHTML='<div class="az-cdtotal"><strong>'+total+' article'+(total>1?'s':'')+'</strong> dans votre panier</div>'+
      '<div class="az-cdbtns">'+
      '<button class="az-cdbtn-s" onclick="azClearCart()">🗑 Vider</button>'+
      '<button class="az-cdbtn-s" onclick="azPrintCart()">🖨 Imprimer</button>'+
      '<button class="az-cdbtn-p" onclick="azSendCart()">📧 Envoyer devis</button>'+
      '</div>';
  }
}
window.azRmItem=function(ref){
  var cart=JSON.parse(localStorage.getItem(CART_KEY)||'[]').filter(function(i){return i.ref!==ref;});
  localStorage.setItem(CART_KEY,JSON.stringify(cart));
  azUpdateBadge();azRenderDrawer();
  if(typeof window.CART!=='undefined'){window.CART=cart;}
};
window.azClearCart=function(){if(typeof window.clearCart==='function'){window.clearCart();return;}localStorage.removeItem(CART_KEY);azUpdateBadge();azRenderDrawer();};
window.azPrintCart=function(){if(typeof window.printCart==='function'){window.printCart();}};
window.azSendCart=function(){if(typeof window.sendCartMail==='function'){window.sendCartMail();}};

window.azSearchGo=function(val){
  if(!val.trim())return;
  if(typeof window.onQ==='function'){window.onQ(val);}
  else{window.location.href='catalogue.html?q='+encodeURIComponent(val.trim());}
};
window.azSearchLive=function(val){if(typeof window.onQ==='function')window.onQ(val);};

window.azOpenQO=function(){azCloseMenu();var q=document.getElementById('az-quick-order');if(q){q.classList.add('open');setTimeout(function(){var i=document.getElementById('az-qo-in');if(i)i.focus();},50);}};
window.azCloseQO=function(){var q=document.getElementById('az-quick-order');if(q)q.classList.remove('open');};
window.azQuickAdd=function(){
  var val=document.getElementById('az-qo-in').value.trim();if(!val)return;
  if(typeof window.addToCartByRef==='function'){window.addToCartByRef(val);}
  else{window.location.href='catalogue.html?q='+encodeURIComponent(val)+'&add=1';}
  document.getElementById('az-qo-in').value='';azCloseQO();
  azUpdateBadge();
};

// ── BARCODE SCANNER ──────────────────────────────────────────
var _scanStream=null,_scanRAF=null,_scanDetector=null;

window.azOpenScan=function(){
  var ov=document.getElementById('az-scan-overlay');
  if(!ov)return;
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    document.getElementById('az-scan-msg').textContent='❌ Caméra non disponible sur cet appareil.';
    ov.classList.add('open');return;
  }
  ov.classList.add('open');
  document.body.style.overflow='hidden';
  var video=document.getElementById('az-scan-video');
  navigator.mediaDevices.getUserMedia({video:{facingMode:'environment',width:{ideal:1280},height:{ideal:720}}})
    .then(function(stream){
      _scanStream=stream;
      video.srcObject=stream;
      video.play();
      video.addEventListener('loadedmetadata',function(){_azScanLoop(video);},{once:true});
    })
    .catch(function(){
      var msg=document.getElementById('az-scan-msg');
      if(msg)msg.textContent='❌ Accès caméra refusé. Autorisez la caméra dans les paramètres de votre navigateur.';
    });
};

window.azCloseScan=function(){
  if(_scanStream){_scanStream.getTracks().forEach(function(t){t.stop();});_scanStream=null;}
  if(_scanRAF){cancelAnimationFrame(_scanRAF);_scanRAF=null;}
  var ov=document.getElementById('az-scan-overlay');
  if(ov)ov.classList.remove('open');
  document.body.style.overflow='';
};

function _azScanLoop(video){
  if('BarcodeDetector' in window){
    if(!_scanDetector){
      try{_scanDetector=new BarcodeDetector({formats:['ean_13','ean_8','qr_code','code_128','code_39','data_matrix']});}
      catch(e){_azLoadZXing(video);return;}
    }
    var _detect=function(){
      if(!_scanStream||!_scanStream.active)return;
      _scanDetector.detect(video).then(function(codes){
        if(codes&&codes.length>0){_azOnScanResult(codes[0].rawValue);}
        else{_scanRAF=requestAnimationFrame(_detect);}
      }).catch(function(){_scanRAF=requestAnimationFrame(_detect);});
    };
    _detect();
  } else {
    _azLoadZXing(video);
  }
}

function _azLoadZXing(video){
  var msg=document.getElementById('az-scan-msg');
  if(window.ZXing){_azStartZXing(video);return;}
  if(msg)msg.textContent='⏳ Chargement du décodeur…';
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/@zxing/library@0.20.0/umd/index.min.js';
  s.onload=function(){_azStartZXing(video);};
  s.onerror=function(){if(msg)msg.textContent='❌ Impossible de charger le décodeur. Vérifiez la connexion.';};
  document.head.appendChild(s);
}

function _azStartZXing(video){
  var msg=document.getElementById('az-scan-msg');
  if(msg)msg.textContent='📷 Pointez vers un code-barres EAN-13 ou QR Code';
  try{
    var reader=new ZXing.BrowserMultiFormatReader();
    var canvas=document.createElement('canvas');
    var _loop=function(){
      if(!_scanStream||!_scanStream.active)return;
      try{
        canvas.width=video.videoWidth;canvas.height=video.videoHeight;
        canvas.getContext('2d').drawImage(video,0,0);
        var result=reader.decodeFromCanvas(canvas);
        if(result){_azOnScanResult(result.getText());return;}
      }catch(e){}
      _scanRAF=requestAnimationFrame(_loop);
    };
    _loop();
  }catch(e){if(msg)msg.textContent='❌ Décodeur non disponible sur cet appareil.';}
}

function _azOnScanResult(raw){
  var fl=document.getElementById('az-scan-flash');
  if(fl){fl.style.opacity='1';setTimeout(function(){fl.style.opacity='0';},120);}
  azCloseScan();
  var q=(raw||'').trim();
  if(!q)return;
  var si=document.getElementById('az-search-input');
  if(si)si.value=q;
  setTimeout(function(){
    if(typeof window.onQ==='function'){window.onQ(q);}
    else{window.azSearchGo(q);}
  },200);
}

// Boot
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}

})();
