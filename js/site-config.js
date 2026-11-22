/* =====================================================================
   GALATA — SITE AYARLARI  (en sık düzenlenecek dosya)
   Telefon, saat, adres veya sosyal medya değişirse sadece burayı güncelle.
   ===================================================================== */
window.GALATA_CONFIG = {
  brand: "Galata",
  siteUrl: "https://yahyasogut.github.io/galata/",

  social: {
    instagram: "https://www.instagram.com/galataseafood/",
    // Varsa doldur, boş bırakılanlar sitede görünmez:
    facebook: "",
    tiktok: "",
    google: "https://maps.app.goo.gl/sfV81HgvtS8wGev6A"
  },

  branches: [
    {
      id: "galata",
      name: "Galata Restaurant & Bistro",
      tagline: { en: "Canal-side bistro · breakfast to late dinner", tr: "Kanal kenarında bistro · kahvaltıdan akşam yemeğine" },
      address: ["City Road Lock, Regent's Canal Towpath", "London N1 8PZ"],
      phone: "+44 7310 314451",
      hours: { en: "Mon–Sat 08:00 – 22:00 · Sun 08:00 – 21:00", tr: "Pzt–Cmt 08:00 – 22:00 · Paz 08:00 – 21:00" },
      maps: "https://maps.app.goo.gl/sfV81HgvtS8wGev6A",
      lat: 51.5327809, lng: -0.0986177
    },
    {
      id: "rheidol",
      name: "The Rheidol Rooms",
      tagline: { en: "Neighbourhood café · breakfast & lunch", tr: "Mahalle kafesi · kahvaltı ve öğle yemeği" },
      address: ["16 Rheidol Terrace", "London N1 8NS"],
      phone: "+44 20 7916 1657",
      hours: { en: "Every day 08:00 – 17:00", tr: "Her gün 08:00 – 17:00" },
      maps: "https://maps.app.goo.gl/dxdn7HDTvczRwHsT9",
      lat: 51.5348259, lng: -0.0986253
    }
  ]
};
