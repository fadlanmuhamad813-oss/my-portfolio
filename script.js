/* ============ LOADING SCREEN ============ */
function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader && !loader.classList.contains("hide")) {
    loader.classList.add("hide");
    setTimeout(function () {
      loader.style.display = "none";
    }, 800);
  }
}

window.addEventListener("load", function () {
  setTimeout(hideLoader, 2200);
});

setTimeout(hideLoader, 3500);
lucide.createIcons();

/* ============ REVEAL OBSERVER (Blur → Fokus) ============ */
const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal, .stagger").forEach(function (el) {
  revealObserver.observe(el);
});

/* ============ TOOLS — Muncul satu-satu ============ */
const tileObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const tiles = entry.target.querySelectorAll(".tool-item");
        tiles.forEach(function (tile, i) {
          setTimeout(function () {
            tile.classList.add("in");
          }, i * 70);
        });
        tileObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

const toolsGrid = document.getElementById("toolsGrid");
if (toolsGrid) tileObserver.observe(toolsGrid);

/* ============ TIMELINE — Garis tumbuh ============ */
const timelineEl = document.getElementById("timeline");
if (timelineEl) {
  const tlObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("line-in");
          tlObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 },
  );
  tlObserver.observe(timelineEl);
}

/* ============ CAROUSEL PROJECT ============ */
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (track && prevBtn && nextBtn) {
  const scrollAmount = 364;

  prevBtn.addEventListener("click", function () {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", function () {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 5;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 5;
  }
  track.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  updateButtons();

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  track.addEventListener("mousedown", function (e) {
    isDown = true;
    track.classList.add("dragging");
    startX = e.pageX - track.offsetLeft;
    scrollStart = track.scrollLeft;
  });
  track.addEventListener("mouseleave", function () {
    isDown = false;
    track.classList.remove("dragging");
  });
  track.addEventListener("mouseup", function () {
    isDown = false;
    track.classList.remove("dragging");
  });
  track.addEventListener("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollStart - walk;
  });

  track.addEventListener(
    "wheel",
    function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    },
    { passive: false },
  );
}

/* ============ FALLBACK ============ */
setTimeout(function () {
  document.querySelectorAll(".reveal, .stagger").forEach(function (el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("in");
    }
  });
  document.querySelectorAll(".tool-item").forEach(function (tile) {
    const rect = tile.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      tile.classList.add("in");
    }
  });
  const tl = document.getElementById("timeline");
  if (tl && tl.getBoundingClientRect().top < window.innerHeight) {
    tl.classList.add("line-in");
  }
}, 500);

/* ============================================================
   TOOLS — KEYBOARD 3D + PANEL INFO (VERSI FIX)
   ============================================================ */
(function () {
  "use strict";

  console.log("[Keyboard] Script loaded");

  const toolsData = {
    python: {
      name: "Python",
      desc: "Bahasa pemrograman serbaguna untuk analisis data, otomasi laporan keuangan, dan scripting. Saya gunakan untuk otomasi tugas repetitif di bidang finance.",
      level: 85,
    },
    vscode: {
      name: "VS Code",
      desc: "Code editor utama untuk menulis kode Python, JavaScript, dan HTML/CSS. Dilengkapi extension untuk produktivitas coding harian.",
      level: 90,
    },
    github: {
      name: "GitHub",
      desc: "Platform version control untuk menyimpan & kolaborasi proyek. Digunakan untuk manage repository AnoaDev dan proyek pribadi.",
      level: 80,
    },
    mysql: {
      name: "MySQL",
      desc: "Database relasional untuk menyimpan data aplikasi. Saya gunakan untuk project ERP, POS, dan sistem informasi bisnis lainnya.",
      level: 78,
    },
    powerbi: {
      name: "Power BI",
      desc: "Tools visualisasi data untuk membuat dashboard interaktif. Membantu analisis KPI dan laporan keuangan perusahaan.",
      level: 82,
    },
    excel: {
      name: "Excel",
      desc: "Tools spreadsheet untuk analisis keuangan, modeling, dan otomasi laporan dengan formula & macro. Fondasi utama pekerjaan finance saya.",
      level: 95,
    },
    accurate: {
      name: "Accurate",
      desc: "Software akuntansi untuk menyusun laporan keuangan, rekonsiliasi, dan pelaporan pajak sesuai standar Indonesia.",
      level: 88,
    },
    myob: {
      name: "MYOB",
      desc: "Software accounting untuk manajemen keuangan bisnis — dari pencatatan transaksi hingga laporan laba-rugi.",
      level: 75,
    },
    finflow: {
      name: "Finflow",
      desc: "Tools manajemen keuangan untuk tracking cash flow dan budgeting operasional perusahaan.",
      level: 80,
    },
    vhp: {
      name: "VHP",
      desc: "Sistem internal untuk audit dan kontrol operasional. Digunakan di lingkungan kerja keuangan.",
      level: 72,
    },
    webdev: {
      name: "Web Dev",
      desc: "Pengembangan website modern — HTML, CSS, JavaScript, dan framework modern. Digunakan untuk membangun website klien AnoaDev.",
      level: 85,
    },
    html: {
      name: "HTML5",
      desc: "Bahasa markup standar untuk struktur halaman web. Fondasi dari semua website yang saya bangun.",
      level: 92,
    },
    css: {
      name: "CSS3",
      desc: "Styling modern untuk website — animasi, layout responsive, dan visual premium. Digunakan di seluruh project web saya.",
      level: 90,
    },
    react: {
      name: "React",
      desc: "Library JavaScript untuk membangun UI interaktif. Digunakan untuk project web app modern seperti POS dan ERP.",
      level: 78,
    },
    node: {
      name: "Node.js",
      desc: "Runtime JavaScript untuk backend — API, server, dan real-time application. Backend utama project AnoaDev.",
      level: 75,
    },
  };

  function initKeyboard() {
    const keys = document.querySelectorAll(".kb-key");
    const panelEmpty = document.getElementById("kbPanelEmpty");
    const panelContent = document.getElementById("kbPanelContent");
    const panelIcon = document.getElementById("kbPanelIcon");
    const panelName = document.getElementById("kbPanelName");
    const panelDesc = document.getElementById("kbPanelDesc");
    const panelLevelPct = document.getElementById("kbPanelLevelPct");
    const panelLevelFill = document.getElementById("kbPanelLevelFill");

    console.log("[Keyboard] Keys found:", keys.length);
    console.log("[Keyboard] Panel elements:", {
      panelEmpty: !!panelEmpty,
      panelContent: !!panelContent,
      panelIcon: !!panelIcon,
      panelName: !!panelName,
      panelDesc: !!panelDesc,
      panelLevelPct: !!panelLevelPct,
      panelLevelFill: !!panelLevelFill,
    });

    if (!keys.length) {
      console.warn("[Keyboard] No .kb-key found!");
      return;
    }

    if (!panelContent || !panelName) {
      console.warn("[Keyboard] Panel elements not found!");
      return;
    }

    /* Sound */
    let audioCtx = null;
    function playClick() {
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(750, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(
          180,
          audioCtx.currentTime + 0.05
        );
        gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          audioCtx.currentTime + 0.07
        );
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.07);
      } catch (e) {}
    }

    keys.forEach(function (key) {
      key.addEventListener("click", function () {
        const keyId = key.dataset.key;
        console.log("[Keyboard] Clicked:", keyId);

        const data = toolsData[keyId];
        if (!data) {
          console.warn("[Keyboard] No data for:", keyId);
          return;
        }

        playClick();

        keys.forEach(function (k) {
          k.classList.remove("is-active");
        });
        key.classList.add("is-active");

        /* Ambil SVG dan paksa ukuran */
        const svgSource = key.querySelector(".kb-key__top svg");
        if (!svgSource) {
          console.warn("[Keyboard] No SVG in key");
          return;
        }

        const svg = svgSource.cloneNode(true);
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("width", "52");
        svg.setAttribute("height", "52");
        svg.style.width = "52px";
        svg.style.height = "52px";
        svg.style.maxWidth = "52px";
        svg.style.maxHeight = "52px";
        svg.style.display = "block";

        /* Update panel */
        if (panelEmpty) panelEmpty.style.display = "none";
        panelContent.style.display = "flex";

        /* Reset animasi */
        panelContent.style.animation = "none";
        void panelContent.offsetWidth;
        panelContent.style.animation = "";

        /* Update icon */
        panelIcon.innerHTML = "";
        panelIcon.appendChild(svg);

        /* Update teks */
        panelName.textContent = data.name;
        panelDesc.textContent = data.desc;
        panelLevelPct.textContent = data.level + "%";

        /* Update level bar */
        panelLevelFill.style.width = "0%";
        setTimeout(function () {
          panelLevelFill.style.width = data.level + "%";
        }, 100);
      });
    });

    console.log("[Keyboard] Initialized OK ✅");
  }

  /* Jalankan setelah DOM ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKeyboard);
  } else {
    initKeyboard();
  }
})();

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
(function () {
  "use strict";

  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    /* Muncul saat scroll > 500px */
    function toggleVisibility() {
      if (window.scrollY > 500) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    }

    /* Smooth scroll ke atas saat diklik */
    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    /* Event listener */
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); /* cek posisi awal */
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBackToTop);
  } else {
    initBackToTop();
  }
})();