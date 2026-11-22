# Galata — web sitesi

Londra'daki iki şube (Galata Restaurant & Bistro · The Rheidol Rooms) için mobil uyumlu, EN/TR iki dilli statik site.
Derleme (build) yok: dosyaları GitHub'a yüklemen yeterli.

## Yayın (GitHub Pages, ilk kez ~5 dk)
1. github.com → **New repository** → ad: `galata` → Public → Create.
2. **Add file → Upload files** → bu zip'in içindeki **tüm dosya ve klasörleri** sürükle → Commit.
   (Gizli `.nojekyll` dosyası da gelsin; gelmezse Add file → Create new file → adı `.nojekyll`, içi boş.)
3. **Settings → Pages → Source: Deploy from a branch → main / (root)** → Save.
4. 1–2 dk sonra site: **https://yahyasogut.github.io/galata/**

> Kendi alan adına geçince (ör. galatalondon.co.uk): `site-config.js` içindeki `siteUrl`, HTML'lerdeki
> `https://yahyasogut.github.io/galata/` adresleri, `sitemap.xml`, `robots.txt` ve `404.html` içindeki `<base href="/galata/">` → `/` güncellenir.

## Neyi nereden değiştiririm?
| Ne | Dosya |
|---|---|
| Telefon, saat, adres, sosyal medya | `js/site-config.js` |
| Menü (şube bazında: galata / rheidol) | `js/menu-data.js` — alan açıklamaları dosyanın başında |
| Tüm metinler (EN + TR) | `js/i18n.js` |
| Renkler / yazı tipleri | `assets/style.css` en üstteki `:root` |

Not: Galata menüsü ve saatleri (Pzt–Cmt 08–22, Paz 08–21) menü panolarından alındı (Kasım 2026); Rheidol saat/telefonu Google Haritalar'dan; hakkımızda metni taslaktır, işletmeyle teyit edilmeli.
Schema.org verisi `index.html` içinde ayrıca yazılı — saat değişirse orayı da güncelle.

## Uyum notları
- Çerez, analitik, takip yok → çerez banner'ı gerekmez. Fontlar siteden sunulur (Google Fonts yok).
- Gömülü Google Haritası yok: temsili SVG harita + "Yol tarifi" linkleri.
- Görseller: şimdilik illüstrasyon. Gerçek fotoğraflar (işletmenin kendi/izinli) `assets/img/` altına eklenebilir.
