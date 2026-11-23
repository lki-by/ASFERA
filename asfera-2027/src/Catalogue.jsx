import { useEffect, useRef, useState } from "react";
import BackButton from "./BackButton.jsx";
import emoneyFront from "./assets/images/catalogue-emoney-front.png";
import emoneyBack from "./assets/images/catalogue-emoney-back.png";
import keychain3d from "./assets/images/catalogue-keychain-3d.png";
import keychain3dPutra from "./assets/images/catalogue-keychain-3d-putra.png";
import keychain3dPutri from "./assets/images/catalogue-keychain-3d-putri.png";
import keychain1 from "./assets/images/catalogue-keychain-1.png";
import keychain2 from "./assets/images/catalogue-keychain-2.png";
import keychain3 from "./assets/images/catalogue-keychain-3.png";
import keychain4 from "./assets/images/catalogue-keychain-4.png";
import keychain5 from "./assets/images/catalogue-keychain-5.png";
import keychain6 from "./assets/images/catalogue-keychain-6.png";
import keychain7 from "./assets/images/catalogue-keychain-7.png";
import fan from "./assets/images/catalogue-kipas.png";
import pin1 from "./assets/images/catalogue-pin-1.png";
import pin2 from "./assets/images/catalogue-pin-2.png";
import pin3 from "./assets/images/catalogue-pin-3.png";
import pin4 from "./assets/images/catalogue-pin-4.png";
import pin5 from "./assets/images/catalogue-pin-5.png";
import pin6 from "./assets/images/catalogue-pin-6.png";
import pin7 from "./assets/images/catalogue-pin-7.png";
import pin8 from "./assets/images/catalogue-pin-8.png";
import pin9 from "./assets/images/catalogue-pin-9.png";
import pin10 from "./assets/images/catalogue-pin-10.png";
import pin11 from "./assets/images/catalogue-pin-11.png";
import pin12 from "./assets/images/catalogue-pin-12.png";
import pin13 from "./assets/images/catalogue-pin-13.png";
import stickyNote1 from "./assets/images/catalogue-sticky-note-1.png";
import stickyNote2 from "./assets/images/catalogue-sticky-note-2.png";
import sticker1 from "./assets/images/catalogue-sticker-1.png";
import sticker2 from "./assets/images/catalogue-sticker-2.png";
import stickerTanggal from "./assets/images/catalogue-sticker-tanggal.png";
import stickerYesRetry from "./assets/images/catalogue-sticker-yes-retry.png";
import stickerAsfera2k27 from "./assets/images/catalogue-sticker-asfera2k27.png";
import stickerLogo from "./assets/images/catalogue-sticker-logo.png";
import stringBag from "./assets/images/catalogue-string-bag.png";
import tshirt1 from "./assets/images/catalogue-tshirt-1.png";
import tshirt2 from "./assets/images/catalogue-tshirt-2.png";
import tshirt3 from "./assets/images/catalogue-tshirt-3.png";
import tshirt4 from "./assets/images/catalogue-tshirt-4.png";
import tshirt5 from "./assets/images/catalogue-tshirt-5.png";
import tshirt6 from "./assets/images/catalogue-tshirt-6.png";
import tshirt7 from "./assets/images/catalogue-tshirt-7.png";
import tshirt8 from "./assets/images/catalogue-tshirt-8.png";
import tshirt9 from "./assets/images/catalogue-tshirt-9.png";
import totebag1 from "./assets/images/catalogue-totebag-1.png";
import totebag2 from "./assets/images/catalogue-totebag-2.png";
import totebag3 from "./assets/images/catalogue-totebag-3.png";
import totebag4 from "./assets/images/catalogue-totebag-4.png";
import totebag5 from "./assets/images/catalogue-totebag-5.png";
import webbing from "./assets/images/catalogue-webbing.png";
import jibbitz1 from "./assets/images/catalogue-jibbitz-1.png";
import jibbitz2 from "./assets/images/catalogue-jibbitz-2.png";
import jibbitz3 from "./assets/images/catalogue-jibbitz-3.png";
import jibbitz4 from "./assets/images/catalogue-jibbitz-4.png";
import jibbitz5 from "./assets/images/catalogue-jibbitz-5.png";
import bracelet1 from "./assets/images/catalogue-bracelet-1.png";
import bracelet2 from "./assets/images/catalogue-bracelet-2.png";
import bracelet3 from "./assets/images/catalogue-bracelet-3.png";
import italianBracelet from "./assets/images/catalogue-italian-bracelet.png";
import braceletAddon1 from "./assets/images/catalogue-bracelet-addon-1.png";
import braceletAddon2 from "./assets/images/catalogue-bracelet-addon-2.png";
import braceletAddon3 from "./assets/images/catalogue-bracelet-addon-3.png";
import catalogueTitle from "./assets/images/catalogue-title.png";
import "./Catalogue.css";

const CATEGORIES = [
  "E-money",
  "Keychain 3d",
  "Gelang",
  "Jibbitz",
  "Keychain",
  "Kipas",
  "Pin",
  "Sticky Note",
  "Sticker",
  "String Bag",
  "T-shirt",
  "Totebag",
  "Webbing",
];

const PRODUCTS = {
  "E-money": [
    {
      name: "E-money Asfera",
      price: "Rp 90.000",
      images: [
        { src: emoneyFront, alt: "Desain depan kartu e-money Asfera" },
        { src: emoneyBack, alt: "Desain belakang kartu e-money Asfera" },
      ],
    },
  ],
  "Keychain 3d": [
    {
      name: "Keychain 3D Maskot Putra",
      price: "Rp 25.000",
      images: [{ src: keychain3dPutra, alt: "Maskot putra Asfera untuk Keychain 3D" }],
    },
    {
      name: "Keychain 3D Maskot Putri",
      price: "Rp 25.000",
      images: [{ src: keychain3dPutri, alt: "Maskot putri Asfera untuk Keychain 3D" }],
    },
    {
      name: "Keychain 3D Bintang",
      price: "Rp 25.000",
      images: [{ src: keychain3d, alt: "Keychain 3D berbentuk bintang Asfera" }],
    },
  ],
  Keychain: [
    { name: "Keychain Maskot Cowo", price: "Rp 15.000", images: [{ src: keychain1, alt: "Keychain karakter pria Asfera" }] },
    { name: "Keychain Maskot Cewe", price: "Rp 15.000", images: [{ src: keychain2, alt: "Keychain karakter wanita Asfera" }] },
    { name: "Keychain Papan", price: "Rp 15.000", images: [{ src: keychain3, alt: "Keychain ilustrasi tiket Asfera 2027" }] },
    { name: "Keychain Tameng", price: "Rp 15.000", images: [{ src: keychain4, alt: "Keychain panji Asfera 2027" }] },
    { name: "Keychain Coin", price: "Rp 15.000", images: [{ src: keychain5, alt: "Keychain medali Asfera" }] },
    { name: "Keychain Biru", price: "Rp 15.000", images: [{ src: keychain6, alt: "Keychain logo Asfera berwarna biru" }] },
    { name: "Keychain Logo", price: "Rp 15.000", images: [{ src: keychain7, alt: "Keychain lambang burung Asfera berwarna emas" }] },
  ],
  Kipas: [
    { name: "Kipas Asfera", price: "Rp 15.000", images: [{ src: fan, alt: "Kipas bergambar lambang dan logo Asfera" }] },
  ],
  Pin: [
    { name: "blue", price: "Rp 10.000", images: [{ src: pin1, alt: "Pin karakter Asfera dengan tulisan The Golden Oath" }] },
    { name: "The Golden Oath ", price: "Rp 10.000", images: [{ src: pin2, alt: "Pin ilustrasi kapal di tengah ombak" }] },
    { name: "Asfera calling", price: "Rp 10.000", images: [{ src: pin7, alt: "Pin ilustrasi panggilan Asfera" }] },
    { name: "Asfera Is The Best", price: "Rp 10.000", images: [{ src: pin9, alt: "Pin kucing abu-abu dengan tulisan Asfera is the best" }] },
    { name: "Asfera Fav", price: "Rp 10.000", images: [{ src: pin10, alt: "Pin bertuliskan I'm your favorite ASFERA participant" }] },
    { name: "Asfera Do It Better", price: "Rp 10.000", images: [{ src: pin11, alt: "Pin merah bertuliskan Asfera Do It Better" }] },
  ],
  "Sticky Note": [
    { name: "Sticky Note Kotak", price: "Rp 25.000", images: [{ src: stickyNote1, alt: "Sticky note bergambar gulungan perkamen Asfera" }] },
    { name: "Sticky Note Bulat", price: "Rp 25.000", images: [{ src: stickyNote2, alt: "Sticky note bundar dengan hiasan bunga" }] },
  ],
  Sticker: [
    { name: "ASFERA Bulat", price: "Rp 5.000", images: [{ src: sticker1, alt: "Stiker lambang Asfera 2027 berwarna marun dan emas" }] },
    { name: "Sticker Pack ", price: "Rp 10.000", images: [{ src: sticker2, alt: "Set stiker tiket, kaset, logo, dan desain Asfera lainnya" }] },
    { name: "ASFERA Tanggal", price: "Rp 5.000", images: [{ src: stickerTanggal, alt: "Stiker hijau ASYIFA PRESENT dengan tanggal 01/03/2027 dan logo ASFERA" }] },
    { name: "ASFERA/Yes-Retry", price: "Rp 5.000", images: [{ src: stickerYesRetry, alt: "Stiker biru bergaya jendela error bertuliskan ASFERA? YES RETRY" }] },
    { name: "ASFERA2K27", price: "Rp 5.000", images: [{ src: stickerAsfera2k27, alt: "Stiker biru bertuliskan #ASFERA2K27" }] },
    { name: "Logo", price: "Rp 5.000", images: [{ src: stickerLogo, alt: "Stiker logo ASFERA berwarna emas" }] },
  ],
  "String Bag": [
    { name: "Maroon String Bag", price: "Rp 70.000", images: [{ src: stringBag, alt: "String bag Asfera berwarna marun" }] },
  ],
  Totebag: [
    { name: "Navy Blue Journey Totebag", price: "Rp 80.000", images: [{ src: totebag3, alt: "Totebag biru navy dengan desain Vol. 4 2027, tampak depan dan belakang" }] },
    { name: "Heritage Harmony Totebag", price: "Rp 80.000", images: [{ src: totebag4, alt: "Totebag krem dengan ilustrasi panel Asfera, tampak depan dan belakang" }] },
    { name: "Bloom Harmony Totebag White", price: "Rp 80.000", images: [{ src: totebag5, alt: "Totebag krem dengan ilustrasi warna-warni, tampak depan dan belakang" }] },
  ],
  "T-shirt": [
    { name: "Cream Minimalist", price: "Rp 140.000", images: [{ src: tshirt1, alt: "T-shirt desain Asfera 27 dan Fatum Odyssey, tampak depan dan belakang" }] },
    { name: "Harmony Grey", price: "Rp 140.000", images: [{ src: tshirt2, alt: "T-shirt abu-abu bertema Chase the Harmony, tampak depan dan belakang" }] },
    { name: "White Graphic", price: "Rp 120.000", images: [{ src: tshirt3, alt: "T-shirt putih bertema Bound by Fatum, United by Harmony, tampak depan dan belakang" }] },
    { name: "Sage Green", price: "Rp 140.000", images: [{ src: tshirt4, alt: "T-shirt hijau bertema Fatum Odyssey dan Pratigna Harmony, tampak depan dan belakang" }] },
    { name: "Longsleeve Brown", price: "Rp 140.000", images: [{ src: tshirt5, alt: "T-shirt cokelat Asfera Fatum Odyssey, tampak depan dan belakang" }] },
    { name: "Blue Graphic", price: "Rp 120.000", images: [{ src: tshirt6, alt: "T-shirt biru navy dengan desain ilustrasi, tampak depan dan belakang" }] },
    { name: "Vintage Cream Boxy", price: "Rp 135.000", images: [{ src: tshirt7, alt: "T-shirt Pratigna berwarna krem, tampak depan dan belakang" }] },
    { name: "Vintage Ringer Tee ", price: "Rp 120.000", images: [{ src: tshirt8, alt: "T-shirt hitam dengan desain Asfera dan Path Unites Peace, tampak depan dan belakang" }] },
    { name: "Graphic Streetwear Regular", price: "Rp 130.000", images: [{ src: tshirt9, alt: "T-shirt krem bertema Passion 2027, tampak depan dan belakang" }] },
  ],
  Webbing: [
    { name: "Maroon Webbing", price: "Rp 30.000", images: [{ src: webbing, alt: "Webbing Asfera berwarna marun dengan dua sisi desain" }] },
  ],
  Jibbitz: [
    { name: "Bintang", price: "Rp 15.000", images: [{ src: jibbitz1, alt: "Jibbitz desain bintang dan ornamen biru emas" }] },
    { name: "Istana Cincin", price: "Rp 15.000", images: [{ src: jibbitz2, alt: "Jibbitz desain kastil dengan bingkai emas" }] },
    { name: "Surat Diikat", price: "Rp 15.000", images: [{ src: jibbitz3, alt: "Jibbitz desain gulungan surat dengan pita merah" }] },
    { name: "Istana", price: "Rp 15.000", images: [{ src: jibbitz4, alt: "Jibbitz desain kastil Asfera" }] },
    { name: "Buku", price: "Rp 15.000", images: [{ src: jibbitz5, alt: "Jibbitz desain buku dan nanas" }] },
  ],
  Gelang: [
    { name: "Maroon Fatum Bracelet", price: "Rp 25.000", images: [{ src: bracelet2, alt: "Gelang Odyssey desain marun Asfera" }] },
    { name: "White Fatum Bracelet", price: "Rp 25.000", images: [{ src: bracelet3, alt: "Gelang Asfera desain putih" }] },
    { name: "Italian Bracelet", price: "Rp 45.000", imageVariant: "raised", images: [{ src: italianBracelet, alt: "Italian bracelet warna perak" }] },
    {
      name: "Bracelet Charm Green",
      price: "Rp 15.000",
      imageVariant: "raised",
      images: [{ src: braceletAddon1, alt: "Empat pilihan charm Italian bracelet warna marun dan hijau" }],
    },
    {
      name: "Bracelet Charm Yellow",
      price: "Rp 15.000",
      imageVariant: "raised",
      images: [{ src: braceletAddon2, alt: "Empat pilihan charm Italian bracelet warna emas dan putih" }],
    },
    {
      name: "Bracelet Charm Blue",
      price: "Rp 15.000",
      imageVariant: "raised",
      images: [{ src: braceletAddon3, alt: "Empat pilihan charm Italian bracelet warna biru dan putih" }],
    },
  ],
};

const parsePrice = (price) => Number(price.replace(/[^\d]/g, ""));
const formatPrice = (price) => `Rp ${price.toLocaleString("id-ID")}`;

function CartDrawer({ items, onClose, onUpdateQuantity, onRemove, onPreorder }) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const total = items.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0,
  );

  return (
    <div
      className="catalogue-cart-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        className="catalogue-cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalogue-cart-title"
      >
        <div className="catalogue-cart-header">
          <div>
            <span className="catalogue-product-label">Asfera Merchandise</span>
            <h2 id="catalogue-cart-title">Keranjang Kamu</h2>
            <p>{itemCount} produk dipilih</p>
          </div>
          <button
            className="catalogue-modal-close"
            type="button"
            onClick={onClose}
            aria-label="Tutup keranjang"
          >
            &times;
          </button>
        </div>

        {items.length ? (
          <>
            <div className="catalogue-cart-items">
              {items.map(({ id, product, quantity }) => (
                <article className="catalogue-cart-item" key={id}>
                  <img src={product.images[0].src} alt={product.images[0].alt} />
                  <div className="catalogue-cart-item-copy">
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                    <strong>{product.price}</strong>
                    <div className="catalogue-cart-item-controls">
                      <div className="catalogue-quantity-control" aria-label={`Jumlah ${product.name}`}>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(id, quantity - 1)}
                          aria-label={`Kurangi jumlah ${product.name}`}
                        >
                          −
                        </button>
                        <span aria-live="polite">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(id, quantity + 1)}
                          aria-label={`Tambah jumlah ${product.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="catalogue-cart-remove"
                        type="button"
                        onClick={() => onRemove(id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="catalogue-cart-footer">
              <p>
                <span>Estimasi total</span>
                <strong>{formatPrice(total)}</strong>
              </p>
              <button
                className="catalogue-order-submit"
                type="button"
                onClick={onPreorder}
              >
                Pre-Order Sekarang
                <span aria-hidden="true">→</span>
              </button>
              <small>Total akhir akan dikonfirmasi melalui WhatsApp.</small>
            </div>
          </>
        ) : (
          <div className="catalogue-cart-empty">
            <span aria-hidden="true">✦</span>
            <h3>Keranjang masih kosong</h3>
            <p>Pilih merchandise favoritmu untuk mulai pre-order.</p>
            <button type="button" onClick={onClose}>Jelajahi Merchandise</button>
          </div>
        )}
      </aside>
    </div>
  );
}

function AddToCartModal({ product, onClose, onConfirm }) {
  const confirmButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    confirmButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="catalogue-confirm-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="catalogue-confirm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalogue-confirm-title"
      >
        <button
          className="catalogue-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Tutup konfirmasi"
        >
          &times;
        </button>
        <div className="catalogue-confirm-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L22 8H6" />
            <circle cx="10" cy="21" r="1" />
            <circle cx="18" cy="21" r="1" />
          </svg>
        </div>
        <span className="catalogue-product-label">{product.category}</span>
        <h2 id="catalogue-confirm-title">Tambahkan ke keranjang?</h2>
        <div className="catalogue-confirm-product">
          <img src={product.images[0].src} alt={product.images[0].alt} />
          <div>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </div>
        </div>
        <div className="catalogue-confirm-actions">
          <button
            className="catalogue-confirm-cancel"
            type="button"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            ref={confirmButtonRef}
            className="catalogue-order-submit"
            type="button"
            onClick={onConfirm}
          >
            Ya, Tambahkan
          </button>
        </div>
      </section>
    </div>
  );
}

function ImageZoom({ image, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="catalogue-image-zoom-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="catalogue-image-zoom-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`Gambar ${image.alt} diperbesar`}
      >
        <button
          ref={closeButtonRef}
          className="catalogue-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Tutup gambar yang diperbesar"
        >
          &times;
        </button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}

function OrderModal({ items, onClose }) {
  const product = items[0].product;
  const firstInputRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstInputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Halo, saya ingin pre-order merchandise ASFERA.",
      "",
      "Pesanan:",
      ...items.map(({ product: item, quantity }) => (
        `- ${item.name} (${item.category}) x${quantity} — ${item.price} / pcs = ${formatPrice(parsePrice(item.price) * quantity)}`
      )),
      `Estimasi total: ${formatPrice(items.reduce((sum, item) => sum + parsePrice(item.product.price) * item.quantity, 0))}`,
      "",
      `Nama: ${formData.get("customerName")}`,
      `No. Telp: ${formData.get("phone")}`,
      `Alamat: ${formData.get("address")}`,
      `Kode Pos: ${formData.get("postalCode")}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/628999991333?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="catalogue-modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="catalogue-order-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalogue-order-title"
      >
        <button
          className="catalogue-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Tutup formulir pre-order"
        >
          &times;
        </button>

        <div className="catalogue-modal-product">
          <div className="catalogue-modal-image">
            <img src={product.images[0].src} alt={product.images[0].alt} />
          </div>
          <span className="catalogue-product-label">Asfera Merchandise</span>
          <h2 id="catalogue-order-title">Detail Pre-Order</h2>
          <div className="catalogue-order-summary">
            {items.map(({ id, product: item, quantity }) => (
              <p key={id}>
                <span>{item.name} × {quantity}</span>
                <strong>{formatPrice(parsePrice(item.price) * quantity)}</strong>
              </p>
            ))}
            <p className="catalogue-order-total">
              <span>Estimasi total</span>
              <strong>{formatPrice(items.reduce((sum, item) => sum + parsePrice(item.product.price) * item.quantity, 0))}</strong>
            </p>
          </div>
        </div>

        <form className="catalogue-order-form" onSubmit={handleSubmit}>
          <label>
            Nama
            <input
              ref={firstInputRef}
              type="text"
              name="customerName"
              autoComplete="name"
              required
            />
          </label>
          <label>
            No. Telp
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              required
            />
          </label>
          <label>
            Alamat
            <textarea
              name="address"
              autoComplete="street-address"
              rows="3"
              required
            />
          </label>
          <label>
            Kode Pos
            <input
              type="text"
              name="postalCode"
              autoComplete="postal-code"
              inputMode="numeric"
              required
            />
          </label>
          <button className="catalogue-order-submit" type="submit">
            Lanjut ke WhatsApp
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </section>
    </div>
  );
}

function ProductCard({ product, layout, onAddToCart, onZoom }) {
  return (
    <article className={`catalogue-product catalogue-product--${layout}`}>
      <div
        className={`catalogue-product-images${product.images.length === 1 ? " catalogue-product-images--single" : ""}${product.imageVariant ? ` catalogue-product-images--${product.imageVariant}` : ""}`}
      >
        {product.images.map((image) => (
          <button
            className="catalogue-product-image-zoom"
            key={image.src}
            type="button"
            onClick={() => onZoom(image)}
            aria-label={`Perbesar gambar ${image.alt}`}
          >
            <img src={image.src} alt="" />
            <span aria-hidden="true">Perbesar</span>
          </button>
        ))}
      </div>
      <div className="catalogue-product-info">
        <div className="catalogue-product-copy">
          <span className="catalogue-product-label">Asfera Merchandise</span>
          <h3>{product.name}</h3>
        </div>
        <div className="catalogue-product-actions">
          <p className="catalogue-price">
            <span>Harga</span>
            <strong>{product.price}</strong>
          </p>
          <button
            className="catalogue-preorder"
            type="button"
            onClick={() => onAddToCart(product)}
          >
            <span className="catalogue-preorder-dot" aria-hidden="true" />
            Tambah ke Cart
            <span className="catalogue-preorder-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Catalogue() {
  const [category, setCategory] = useState("E-money");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [pendingProduct, setPendingProduct] = useState(null);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const addToCart = (product) => {
    const id = `${product.category}:${product.name}`;
    setCart((items) => {
      const existing = items.find((item) => item.id === id);
      if (existing) {
        return items.map((item) => (
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      }
      return [...items, { id, product, quantity: 1 }];
    });
    setPendingProduct(null);
  };
  const confirmAddToCart = (product) => {
    setPendingProduct({ ...product, category });
  };
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCart((items) => items.filter((item) => item.id !== id));
      return;
    }
    setCart((items) => items.map((item) => (
      item.id === id ? { ...item, quantity } : item
    )));
  };

  return (
    <div className="site-shell catalogue-page">
      <BackButton href="#home" label="Kembali ke halaman utama" />
      <button
        className="catalogue-cart-trigger"
        type="button"
        onClick={() => setIsCartOpen(true)}
        aria-label={`Buka keranjang, ${cartCount} produk`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L22 8H6" />
          <circle cx="10" cy="21" r="1" />
          <circle cx="18" cy="21" r="1" />
        </svg>
        <span>Cart</span>
        <strong>{cartCount}</strong>
      </button>
      <main className="catalogue-main">
        <h1 className="catalogue-heading">
          <span className="catalogue-heading-crop">
            <img src={catalogueTitle} alt="Catalogue of Merchandise" />
          </span>
        </h1>

        <nav className="catalogue-categories" aria-label="Kategori merchandise">
          {CATEGORIES.map((item) => (
            <button
              className="catalogue-category"
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <section className="catalogue-products" aria-live="polite" aria-label={`Produk ${category}`}>
          {PRODUCTS[category] ? (
            <div className={`catalogue-product-grid ${["Gelang", "Jibbitz", "Keychain", "Keychain 3d", "Kipas", "Pin", "Sticky Note", "Sticker", "String Bag", "T-shirt", "Totebag", "Webbing"].includes(category) ? "catalogue-product-grid--gallery" : ""}${["Kipas", "String Bag", "Webbing"].includes(category) ? " catalogue-product-grid--single-gallery" : ""}${["Keychain", "String Bag", "Webbing"].includes(category) ? " catalogue-product-grid--raised-product" : ""}${["Pin", "Sticky Note", "Sticker"].includes(category) ? " catalogue-product-grid--pin" : ""}`}>
              {PRODUCTS[category].map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  onAddToCart={confirmAddToCart}
                  onZoom={setZoomedImage}
                  layout={
                    ["Gelang", "Jibbitz", "Keychain", "Keychain 3d", "Kipas", "Pin", "Sticky Note", "Sticker", "String Bag", "T-shirt", "Totebag", "Webbing"].includes(category)
                      ? "gallery"
                      : "feature"
                  }
                />
              ))}
            </div>
          ) : (
            <p className="catalogue-empty">Produk {category} segera hadir.</p>
          )}
        </section>
      </main>
      {isCartOpen && (
        <CartDrawer
          items={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={(id) => setCart((items) => items.filter((item) => item.id !== id))}
          onPreorder={() => {
            setIsCartOpen(false);
            setIsOrderOpen(true);
          }}
        />
      )}
      {isOrderOpen && (
        <OrderModal
          items={cart}
          onClose={() => setIsOrderOpen(false)}
        />
      )}
      {zoomedImage && (
        <ImageZoom
          image={zoomedImage}
          onClose={() => setZoomedImage(null)}
        />
      )}
      {pendingProduct && (
        <AddToCartModal
          product={pendingProduct}
          onClose={() => setPendingProduct(null)}
          onConfirm={() => addToCart(pendingProduct)}
        />
      )}
    </div>
  );
}
