/* ============================================================
   MUHAMAD FADLAN — PORTFOLIO 2026
   ============================================================ */

/* ============================================================
   1. LOADER
   ============================================================ */
(function () {
  "use strict";
  function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader && !loader.classList.contains("hide")) {
      loader.classList.add("hide");
      setTimeout(function () {
        loader.style.display = "none";
      }, 600);
    }
  }
  window.addEventListener("load", function () {
    setTimeout(hideLoader, 1200);
  });
  setTimeout(hideLoader, 3000);
})();

/* ============================================================
   2. LUCIDE ICONS
   ============================================================ */
(function () {
  "use strict";
  function initIcons() {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initIcons);
  } else {
    initIcons();
  }
})();

/* ============================================================
   3. REVEAL OBSERVER
   ============================================================ */
(function () {
  "use strict";
  function initReveal() {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      revealObserver.observe(el);
    });
    setTimeout(function () {
      document.querySelectorAll(".reveal").forEach(function (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("in");
        }
      });
    }, 400);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }
})();

/* ============================================================
   4. LANGUAGE SWITCHER
   ============================================================ */
(function () {
  "use strict";

  const translations = {
    id: {
      /* NAV */
      nav_profil: "Profil", nav_karier: "Karier", nav_skills: "Skills",
      nav_pencapaian: "Pencapaian", nav_education: "Education",
      nav_playground: "Playground", nav_project: "Proyek",
      nav_anoadev: "AnoaDev", nav_kontak: "Hubungi",

      /* HERO */
      hero_eyebrow: "Portfolio · 2026",
      hero_role: "Credit Analyst — Risk & Financial Operations",
      hero_role_id: "Analis Kredit · Audit Internal · Otomasi Data Keuangan",
      stat_ipk: "IPK / 4.00", stat_exp: "Tahun Pengalaman",
      stat_predikat: "Predikat", stat_tools: "Tools Dikuasai",
      cta_contact: "Hubungi Saya", cta_cv: "Download CV", cta_email: "Email Saya",

      /* PROFIL */
      profil_eyebrow: "Profil Singkat",
      profil_title_1: "Gua kerja di finance,",
      profil_title_2: "tapi juga ngoding.",
      profil_p1: "Gua kerja di finance, tepatnya sebagai Credit Analyst. Kerjaan sehari-hari ya baca angka, cek risiko, dan mastiin datanya bener sebelum keputusan diambil.",
      profil_p2: "Sebelumnya gua sempet megang Financial Reporting, Cost Control, Income Audit, dan Internal Control. Dari situ gua belajar satu hal: detail itu bukan pilihan, tapi keharusan.",
      profil_p3: "Tapi gua juga gak bisa diem aja lihat kerjaan manual yang makan waktu. Jadi gua mulai belajar bikin otomasi — Excel macro, dashboard, sampai script kecil-kecilan. Awalnya buat ngeringanin kerjaan sendiri, lama-lama jadi kebiasaan.",
      profil_p4: "Buat gua, angka dan teknologi itu bukan dua dunia beda. Dua-duanya sama-sama soal \"kenapa\" dan \"gimana caranya bikin lebih gampang\".",
      profil_focus: "Fokus Utama", profil_values: "Nilai yang Dipegang",
      focus_1: "Analisis Kredit & Risiko", focus_2: "Audit Internal & Kontrol",
      focus_3: "Otomasi Data & Analitik", focus_4: "Transformasi Digital Bisnis",
      value_1: "Integritas & Transparansi", value_2: "Solusi Tepat Sasaran",
      value_3: "Efisiensi Lewat Teknologi",

      /* KARIER */
      karier_eyebrow: "Perjalanan Karier",
      karier_title_1: "Pengalaman", karier_title_2: "Kerja",
      karier_desc: "Jejak profesional dari dunia audit hingga analisis kredit.",
      karier_101_role: "Accounting Intern",
      karier_101_loc: "Tangerang",
      karier_101_p1: "Kontrol 100+ item inventaris F&B",
      karier_101_p2: "Rekonsiliasi fisik vs sistem, akurasi >95%",
      karier_101_p3: "Evaluasi 10.000+ transaksi harian",
      karier_nna_role: "Accounting Staff",
      karier_nna_loc: "Wakatobi",
      karier_nna_p1: "Eksekusi 30+ pembayaran bulanan via Qlola",
      karier_nna_p2: "Rekonsiliasi 25+ transaksi, laporan 30% lebih cepat",
      karier_nna_p3: "Audit 100+ faktur mingguan",
      karier_wom_role: "Credit Analyst Centralized",
      karier_wom_loc: "Jakarta Pusat",
      karier_wom_p1: "Analisis kelayakan kredit nasabah",
      karier_wom_p2: "Verifikasi data & rekomendasi approval",
      karier_wom_p3: "Koordinasi dengan sales & marketing",
      karier_wom_p4: "Laporan analisis kredit harian & mingguan",
      karier_next_year: "Next",
      karier_future: "Open for opportunities",
      karier_future_desc: "Finance · Risk · Audit",

      /* SKILLS */
      skills_eyebrow: "Skills & Tools",
      skills_title_1: "Yang saya", skills_title_2: "kuasai.",
      skills_desc: "Tools & kemampuan yang saya gunakan sehari-hari untuk bekerja, menganalisis, dan membangun.",
      skills_cat_finance: "Core Finance",
      skills_cat_data: "Data & Analytics",
      skills_cat_dev: "Development (Supporting)",
      skill_excel_level: "Expert · 5+ tahun",
      skill_excel_detail: "Pivot Table · VLOOKUP · Index-Match · Macro VBA · Otomasi Laporan",
      skill_accurate_level: "Advanced · 3 tahun",
      skill_accurate_detail: "Laporan Keuangan · Pajak · Rekonsiliasi · Neraca",
      skill_myob_level: "Advanced · 2 tahun",
      skill_myob_detail: "Pencatatan Transaksi · Laba-Rugi · Manajemen Bisnis",
      skill_vhp_level: "Advanced · 3 tahun",
      skill_vhp_detail: "Audit Internal · Kontrol Operasional · Sistem Keuangan",
      skill_finflow_level: "Advanced · 2 tahun",
      skill_finflow_detail: "Cash Flow · Budgeting · Tracking Keuangan",
      skill_sap_level: "Intermediate · 1 tahun",
      skill_sap_detail: "Modul Finance · Reporting · Cost Center",
      skill_qlola_level: "Advanced · 2 tahun",
      skill_qlola_detail: "Cash Management · Transaksi Perbankan · Rekonsiliasi",
      skill_powerbi_level: "Advanced · 3 tahun",
      skill_powerbi_detail: "Dashboard KPI · DAX · Koneksi SQL & Excel",
      skill_sql_level: "Advanced · 2 tahun",
      skill_sql_detail: "Query · Join · Agregasi · Analisis Data Kredit",
      skill_python_level: "Advanced · 2 tahun",
      skill_python_detail: "Pandas · openpyxl · Otomasi Laporan Kredit",
      skill_html_level: "Expert · 4 tahun",
      skill_html_detail: "Layout Responsive · Animasi · UI Web",
      skill_react_level: "Advanced · 2 tahun",
      skill_react_detail: "UI Interaktif · Component · Web App",
      skill_node_level: "Intermediate · 1 tahun",
      skill_node_detail: "API · Backend · Real-time App",
      skill_github_level: "Advanced · 3 tahun",
      skill_github_detail: "Version Control · Kolaborasi · Repository",
      skill_vscode_level: "Expert · 4 tahun",
      skill_vscode_detail: "Code Editor · Extensions · Produktivitas",

      /* PENCAPAIAN */
      pencapaian_eyebrow: "Pencapaian",
      pencapaian_title_1: "Penghargaan &", pencapaian_title_2: "Prestasi",
      award_1_title: "Gold Medal — Economics",
      award_1_sub: "National Student Science Competition · 2023",
      award_2_title: "Top 15 — Islamic Economics Debate",
      award_3_title: "Finalist — Business Case Competition",
      award_4_title: "Semi Finals — UHO Action",
      award_4_sub: "Top 20 dari 74 tim · 2023",

      /* EDUCATION */
      edu_eyebrow: "Pendidikan", edu_title_1: "Latar", edu_title_2: "Belakang",
      edu_major: "S1 Akuntansi · Fakultas Ekonomi dan Bisnis",
      edu_loc: "Kendari, Sulawesi Tenggara",
      edu_ipk: "IPK", edu_gelar: "Gelar",
      edu_predikat: "Predikat", edu_cumlaude: "Cumlaude",

      /* PLAYGROUND */
      play_eyebrow: "Playground", play_title_1: "Eksplorasi", play_title_2: "visual.",
      play_desc: "Klik salah satu tombol untuk melihat detail tools.",
      kb_pick: "Pilih Tool",
      kb_pick_desc: "Klik salah satu tombol untuk melihat detail.",
      kb_level: "Level Skill",

      /* ORGANISASI */
      org_eyebrow: "Kepemimpinan", org_title_1: "Pengalaman", org_title_2: "Organisasi",
      org_bem_year: "Mar 2024 — Mar 2025",
      org_bem_role: "Head of Department",
      org_bem_desc: "Memimpin 20+ program kerja, kolaborasi 1.000+ mahasiswa.",
      org_imai_year: "Des 2023 — Sekarang",
      org_imai_role: "Community Relations Coordinator",
      org_imai_desc: "Koordinasi acara akademik lintas kampus di Sulawesi Tenggara.",
      org_sem_year: "Okt 2023",
      org_sem_role: "Committee Chair",
      org_sem_name: "National Entrepreneurship Seminar",
      org_sem_desc: "Memimpin 40 panitia, 1.000+ penjualan tiket.",
      org_gmm_year: "Feb 2022 — Sekarang",
      org_gmm_role: "Entrepreneurship Member",
      org_gmm_name: "Gerakan Mahasiswa Mengajar",
      org_gmm_desc: "Mendukung program kewirausahaan & sosial pendidikan.",

      /* PROJECT */
      proj_eyebrow: "Portofolio", proj_title_1: "Proyek", proj_title_2: "Pilihan",
      proj_desc: "Geser ke kiri atau kanan untuk melihat proyek lainnya.",
      proj_finance: "Finance Projects", proj_tech: "Tech Projects · AnoaDev",
      proj_ltv_badge: "Finance Tool",
      proj_ltv_title: "Tools Loan To Value (LTV) Kredit",
      proj_ltv_desc: "Alat bantu analisis kelayakan kredit berbasis perhitungan LTV — improvement project pribadi.",
      proj_ltv_tag2: "Finance Analysis",
      proj_pos_badge: "Enterprise · 2026",
      proj_pos_title: "POS & Manajemen Depo Bangunan",
      proj_pos_desc: "Sistem POS terintegrasi dengan manajemen stok, laporan keuangan, dan dashboard real-time.",
      proj_wahyu_badge: "ERP · 2026",
      proj_wahyu_title: "Bengkel Wahyu Motor",
      proj_wahyu_desc: "Sistem ERP untuk mengelola operasional bengkel kendaraan secara end-to-end.",
      proj_modelin_badge: "Company Profile · 2026",
      proj_modelin_title: "Website Modelin Project",
      proj_modelin_desc: "Website company profile untuk konveksi & apparel, dilengkapi sistem RFQ dan order tracking.",
      proj_hipmi_badge: "Company Profile · 2026",
      proj_hipmi_title: "Website HIPMI PT Sulawesi Tenggara",
      proj_hipmi_desc: "Platform digital resmi untuk mendukung aktivitas organisasi mahasiswa pengusaha.",
      proj_visit: "Kunjungi Proyek",

      /* JEJAK LANGKAH */
      jejak_eyebrow: "Jejak Langkah",
      jejak_title_1: "Dari angka, keputusan,", jejak_title_2: "hingga",
      jejak_title_3: "membangun sesuatu.",
      jejak_sub: "A story of numbers, curiosity, and building things.",

      /* ANOADEV */
      anoa_eyebrow: "Side Venture",
      anoa_title_1: "Membangun sesuatu di luar finance —",
      anoa_desc: "Studio kecil yang fokus pada tools keuangan dan sistem bisnis. Cara saya mengasah problem-solving dan berpikir end-to-end.",
      anoa_quote: "\"Tech is not my career — it's my toolkit to solve finance problems better.\"",

      /* KONTAK */
      kontak_eyebrow: "Kontak", kontak_title_1: "Mari", kontak_title_2: "Terhubung",
      kontak_desc: "Terbuka untuk peluang di bidang Credit Analysis, Finance Operations, Internal Audit.",



      /* FOOTER */
      footer_ayat: "\"Dan katakanlah: Bekerjalah kamu, maka Allah akan melihat pekerjaanmu.\"",
      footer_role: "Credit Analyst · Founder AnoaDev",
      footer_loc: "Jakarta Pusat, Indonesia",

            /* HIGHLIGHT */
      hl_eyebrow: "Highlight",
      hl_title_1: "Tiga hal yang paling",
      hl_title_2: "gua banggain.",
      hl_desc: "Bukan buat pamer — ini yang beneran gua kerjain dan gua rasain efeknya.",
hl_1_label: "PROJECT HIGHLIGHT",
hl_1_title: "LTV Calculator",
hl_1_text: "Dulu gua hitung LTV manual pakai kalkulator, 15 menit per nasabah. Capek. Jadi gua bikin tool Excel yang bisa hitung otomatis. Sekarang 9 menit udah kelar — dan gak ada lagi salah hitung karena capek.",
hl_1_tag3: "Finance Analysis",
hl_2_label: "SKILL HIGHLIGHT",
hl_2_title: "Excel Advanced",
hl_2_text: "Laporan bulanan dulu gua kerjain 3 jam. Sekarang 20 menit, karena udah gua bikin macro. Bukan karena gua jenius — cuma karena gua males ngulang-ngulang hal yang sama tiap bulan.",
hl_2_tag1: "Expert · 5+ tahun",
hl_2_tag2: "Report Automation",
hl_3_label: "VALUE HIGHLIGHT",
hl_3_title: "Detail & Reliable",
hl_3_text: "Gua pernah lihat satu angka salah bikin ribut satu tim. Sejak itu, gua selalu cek ulang analisis gua minimal dua kali sebelum submit. Bukan karena perfectionist — cuma gak mau nanggung risiko yang bisa dihindari.",
hl_3_tag1: "Accuracy",
hl_3_tag2: "Integrity",

    },

    en: {
      /* NAV */
      nav_profil: "Profile", nav_karier: "Career", nav_skills: "Skills",
      nav_pencapaian: "Achievements", nav_education: "Education",
      nav_playground: "Playground", nav_project: "Projects",
      nav_anoadev: "AnoaDev", nav_kontak: "Contact",

      /* HERO */
      hero_eyebrow: "Portfolio · 2026",
      hero_role: "Credit Analyst — Risk & Financial Operations",
      hero_role_id: "Credit Analysis · Internal Audit · Financial Data Automation",
      stat_ipk: "GPA / 4.00", stat_exp: "Years Experience",
      stat_predikat: "Honors", stat_tools: "Tools Mastered",
      cta_contact: "Contact Me", cta_cv: "Download CV", cta_email: "Email Me",

      /* PROFIL */
      profil_eyebrow: "Short Profile",
      profil_title_1: "I work in finance,",
      profil_title_2: "but I also code.",
      profil_p1: "I work in finance, specifically as a Credit Analyst. Day to day, I read numbers, check risks, and make sure the data is right before decisions are made.",
      profil_p2: "Before this, I handled Financial Reporting, Cost Control, Income Audit, and Internal Control. That taught me one thing: detail isn't optional, it's a must.",
      profil_p3: "But I can't just sit still watching manual work eat up time. So I started learning automation — Excel macros, dashboards, small scripts. At first just to make my own work easier, eventually it became a habit.",
      profil_p4: "To me, numbers and technology aren't two different worlds. Both are about \"why\" and \"how to make it easier\".",
      profil_focus: "Main Focus", profil_values: "Core Values",
      focus_1: "Credit & Risk Analysis", focus_2: "Internal Audit & Control",
      focus_3: "Data Automation & Analytics", focus_4: "Business Digital Transformation",
      value_1: "Integrity & Transparency", value_2: "On-Target Solutions",
      value_3: "Efficiency Through Technology",

      /* KARIER */
      karier_eyebrow: "Career Journey",
      karier_title_1: "Work", karier_title_2: "Experience",
      karier_desc: "Professional journey from audit to credit analysis.",
      karier_101_role: "Accounting Intern",
      karier_101_loc: "Tangerang",
      karier_101_p1: "Controlled 100+ F&B inventory items",
      karier_101_p2: "Physical vs system reconciliation, accuracy >95%",
      karier_101_p3: "Evaluated 10,000+ daily transactions",
      karier_nna_role: "Accounting Staff",
      karier_nna_loc: "Wakatobi",
      karier_nna_p1: "Executed 30+ monthly payments via Qlola",
      karier_nna_p2: "Reconciled 25+ transactions, reports 30% faster",
      karier_nna_p3: "Audited 100+ weekly invoices",
      karier_wom_role: "Credit Analyst Centralized",
      karier_wom_loc: "Central Jakarta",
      karier_wom_p1: "Analyzed customer credit eligibility",
      karier_wom_p2: "Verified data & recommended approval",
      karier_wom_p3: "Coordinated with sales & marketing team",
      karier_wom_p4: "Prepared daily & weekly credit analysis reports",
      karier_next_year: "Next",
      karier_future: "Open for opportunities",
      karier_future_desc: "Finance · Risk · Audit",

      /* SKILLS */
      skills_eyebrow: "Skills & Tools",
      skills_title_1: "What I", skills_title_2: "master.",
      skills_desc: "Tools & skills I use daily to work, analyze, and build.",
      skills_cat_finance: "Core Finance",
      skills_cat_data: "Data & Analytics",
      skills_cat_dev: "Development (Supporting)",
      skill_excel_level: "Expert · 5+ years",
      skill_excel_detail: "Pivot Table · VLOOKUP · Index-Match · Macro VBA · Report Automation",
      skill_accurate_level: "Advanced · 3 years",
      skill_accurate_detail: "Financial Reports · Tax · Reconciliation · Balance Sheet",
      skill_myob_level: "Advanced · 2 years",
      skill_myob_detail: "Transaction Entry · Profit-Loss · Business Management",
      skill_vhp_level: "Advanced · 3 years",
      skill_vhp_detail: "Internal Audit · Operational Control · Financial System",
      skill_finflow_level: "Advanced · 2 years",
      skill_finflow_detail: "Cash Flow · Budgeting · Financial Tracking",
      skill_sap_level: "Intermediate · 1 year",
      skill_sap_detail: "Finance Module · Reporting · Cost Center",
      skill_qlola_level: "Advanced · 2 years",
      skill_qlola_detail: "Cash Management · Banking Transactions · Reconciliation",
      skill_powerbi_level: "Advanced · 3 years",
      skill_powerbi_detail: "KPI Dashboard · DAX · SQL & Excel Connection",
      skill_sql_level: "Advanced · 2 years",
      skill_sql_detail: "Query · Join · Aggregation · Credit Data Analysis",
      skill_python_level: "Advanced · 2 years",
      skill_python_detail: "Pandas · openpyxl · Credit Report Automation",
      skill_html_level: "Expert · 4 years",
      skill_html_detail: "Responsive Layout · Animation · Web UI",
      skill_react_level: "Advanced · 2 years",
      skill_react_detail: "Interactive UI · Component · Web App",
      skill_node_level: "Intermediate · 1 year",
      skill_node_detail: "API · Backend · Real-time App",
      skill_github_level: "Advanced · 3 years",
      skill_github_detail: "Version Control · Collaboration · Repository",
      skill_vscode_level: "Expert · 4 years",
      skill_vscode_detail: "Code Editor · Extensions · Productivity",

      /* PENCAPAIAN */
      pencapaian_eyebrow: "Achievements",
      pencapaian_title_1: "Awards &", pencapaian_title_2: "Achievements",
      award_1_title: "Gold Medal — Economics",
      award_1_sub: "National Student Science Competition · 2023",
      award_2_title: "Top 15 — Islamic Economics Debate",
      award_3_title: "Finalist — Business Case Competition",
      award_4_title: "Semi Finals — UHO Action",
      award_4_sub: "Top 20 of 74 teams · 2023",

      /* EDUCATION */
      edu_eyebrow: "Education", edu_title_1: "Back", edu_title_2: "ground",
      edu_major: "Bachelor of Accounting · Faculty of Economics and Business",
      edu_loc: "Kendari, Southeast Sulawesi",
      edu_ipk: "GPA", edu_gelar: "Degree",
      edu_predikat: "Honors", edu_cumlaude: "Cumlaude",

      /* PLAYGROUND */
      play_eyebrow: "Playground", play_title_1: "Visual", play_title_2: "exploration.",
      play_desc: "Click any key to see tool details.",
      kb_pick: "Pick a Tool",
      kb_pick_desc: "Click any key to see details.",
      kb_level: "Skill Level",

      /* ORGANISASI */
      org_eyebrow: "Leadership", org_title_1: "Organization", org_title_2: "Experience",
      org_bem_year: "Mar 2024 — Mar 2025",
      org_bem_role: "Head of Department",
      org_bem_desc: "Led 20+ work programs, collaborating with 1,000+ students.",
      org_imai_year: "Dec 2023 — Present",
      org_imai_role: "Community Relations Coordinator",
      org_imai_desc: "Coordinated academic events across campuses in Southeast Sulawesi.",
      org_sem_year: "Oct 2023",
      org_sem_role: "Committee Chair",
      org_sem_name: "National Entrepreneurship Seminar",
      org_sem_desc: "Led 40 committee members, 1,000+ ticket sales.",
      org_gmm_year: "Feb 2022 — Present",
      org_gmm_role: "Entrepreneurship Member",
      org_gmm_name: "Student Teaching Movement",
      org_gmm_desc: "Supported student entrepreneurship and educational social programs.",

      /* PROJECT */
      proj_eyebrow: "Portfolio", proj_title_1: "Selected", proj_title_2: "Projects",
      proj_desc: "Scroll left or right to see more projects.",
      proj_finance: "Finance Projects", proj_tech: "Tech Projects · AnoaDev",
      proj_ltv_badge: "Finance Tool",
      proj_ltv_title: "Loan To Value (LTV) Credit Tool",
      proj_ltv_desc: "Credit eligibility analysis tool based on Loan to Value (LTV) calculation — personal improvement project.",
      proj_ltv_tag2: "Finance Analysis",
      proj_pos_badge: "Enterprise · 2026",
      proj_pos_title: "POS & Building Depot Management",
      proj_pos_desc: "POS system integrated with stock management, financial reports, and real-time dashboard.",
      proj_wahyu_badge: "ERP · 2026",
      proj_wahyu_title: "Wahyu Motor Workshop",
      proj_wahyu_desc: "ERP system to manage vehicle workshop operations end-to-end.",
      proj_modelin_badge: "Company Profile · 2026",
      proj_modelin_title: "Modelin Project Website",
      proj_modelin_desc: "Company profile website for convection & apparel, equipped with RFQ system and order tracking.",
      proj_hipmi_badge: "Company Profile · 2026",
      proj_hipmi_title: "HIPMI PT Southeast Sulawesi Website",
      proj_hipmi_desc: "Official digital platform to support student entrepreneur organization activities.",
      proj_visit: "Visit Project",

      /* JEJAK LANGKAH */
      jejak_eyebrow: "Journey",
      jejak_title_1: "From numbers, decisions,", jejak_title_2: "to",
      jejak_title_3: "building something.",
      jejak_sub: "A story of numbers, curiosity, and building things.",

      /* ANOADEV */
      anoa_eyebrow: "Side Venture",
      anoa_title_1: "Building something beyond finance —",
      anoa_desc: "A small studio focused on financial tools and business systems. My way of sharpening problem-solving and end-to-end thinking.",
      anoa_quote: "\"Tech is not my career — it's my toolkit to solve finance problems better.\"",

      /* KONTAK */
      kontak_eyebrow: "Contact", kontak_title_1: "Let's", kontak_title_2: "Connect",
      kontak_desc: "Open to opportunities in Credit Analysis, Finance Operations, Internal Audit.",

      /* FOOTER */
      footer_ayat: "\"And say: Work, for Allah will see your work.\"",
      footer_role: "Credit Analyst · Founder AnoaDev",
      footer_loc: "Central Jakarta, Indonesia",

            /* HIGHLIGHT */
      hl_eyebrow: "Highlight",
      hl_title_1: "Three things I'm most",
hl_title_2: "proud of.",
hl_desc: "Not to show off — these are things I actually worked on and felt the impact of.",
hl_1_label: "PROJECT HIGHLIGHT",
hl_1_title: "LTV Calculator",
hl_1_text: "I used to calculate LTV manually with a calculator, 15 minutes per customer. Exhausting. So I built an Excel tool that calculates it automatically. Now it's done in 9 minutes — and no more miscalculations from fatigue.",
hl_1_tag3: "Finance Analysis",
hl_2_label: "SKILL HIGHLIGHT",
hl_2_title: "Excel Advanced",
hl_2_text: "Monthly reports used to take me 3 hours. Now it's 20 minutes, because I built a macro. Not because I'm a genius — just because I hate repeating the same thing every month.",
hl_2_tag1: "Expert · 5+ years",
hl_2_tag2: "Report Automation",
hl_3_label: "VALUE HIGHLIGHT",
hl_3_title: "Detail & Reliable",
hl_3_text: "I once saw one wrong number cause a whole team to panic. Since then, I always double-check my analysis before submitting. Not because I'm a perfectionist — I just don't want to carry risks that can be avoided.",
hl_3_tag1: "Accuracy",
hl_3_tag2: "Integrity",
    },

    ar: {
      /* NAV */
      nav_profil: "الملف الشخصي", nav_karier: "المسار المهني", nav_skills: "المهارات",
      nav_pencapaian: "الإنجازات", nav_education: "التعليم",
      nav_playground: "الملعب", nav_project: "المشاريع",
      nav_anoadev: "أنوا ديف", nav_kontak: "اتصل",

      /* HERO */
      hero_eyebrow: "الملف · 2026",
      hero_role: "محلل ائتماني — المخاطر والعمليات المالية",
      hero_role_id: "تحليل الائتمان · التدقيق الداخلي · أتمتة البيانات المالية",
      stat_ipk: "المعدل / 4.00", stat_exp: "سنوات الخبرة",
      stat_predikat: "مرتبة الشرف", stat_tools: "الأدوات المتقنة",
      cta_contact: "اتصل بي", cta_cv: "تحميل السيرة", cta_email: "أرسل بريداً",

      /* PROFIL */
      profil_eyebrow: "نبذة مختصرة",
      profil_eyebrow: "نبذة مختصرة",
profil_title_1: "أعمل في المالية،",
profil_title_2: "ولكني أيضاً أبرمج.",
profil_p1: "أعمل في مجال المالية، تحديداً كمحلل ائتماني. في عملي اليومي أقرأ الأرقام، أفحص المخاطر، وأتأكد من صحة البيانات قبل اتخاذ القرار.",
profil_p2: "سابقاً عملت في إعداد التقارير المالية، ومراقبة التكاليف، وتدقيق الدخل، والرقابة الداخلية. من هناك تعلمت شيئاً واحداً: التفاصيل ليست خياراً، بل ضرورة.",
profil_p3: "لكنني لا أستطيع الجلوس ومشاهدة العمل اليدوي يستهلك الوقت. لذلك بدأت أتعلم الأتمتة — ماكرو Excel، لوحات المعلومات، وحتى نصوص برمجية صغيرة. في البداية لتسهيل عملي، ثم أصبحت عادة.",
profil_p4: "بالنسبة لي، الأرقام والتكنولوجيا ليستا عالمين مختلفين. كلاهما يتعلق بـ \"لماذا\" و\"كيف نجعلها أسهل\".",
profil_focus: "التركيز الرئيسي",
profil_values: "القيم الأساسية",
      focus_1: "تحليل الائتمان والمخاطر", focus_2: "التدقيق الداخلي والرقابة",
      focus_3: "أتمتة البيانات والتحليلات", focus_4: "التحول الرقمي للأعمال",
      value_1: "النزاهة والشفافية", value_2: "حلول دقيقة",
      value_3: "الكفاءة من خلال التكنولوجيا",

      /* KARIER */
      karier_eyebrow: "المسار المهني",
      karier_title_1: "الخبرة", karier_title_2: "العملية",
      karier_desc: "رحلة مهنية من التدقيق إلى تحليل الائتمان.",
      karier_101_role: "متدرب محاسبة",
      karier_101_loc: "تانقيرانغ",
      karier_101_p1: "التحكم في أكثر من 100 عنصر مخزون",
      karier_101_p2: "مطابقة الفعلي مع النظام، دقة أكثر من 95%",
      karier_101_p3: "تقييم أكثر من 10,000 معاملة يومية",
      karier_nna_role: "موظف محاسبة",
      karier_nna_loc: "واكاتوبي",
      karier_nna_p1: "تنفيذ أكثر من 30 دفعة شهرية",
      karier_nna_p2: "مطابقة 25 معاملة، تقارير أسرع 30%",
      karier_nna_p3: "تدقيق أكثر من 100 فاتورة أسبوعية",
      karier_wom_role: "محلل ائتماني مركزي",
      karier_wom_loc: "وسط جاكرتا",
      karier_wom_p1: "تحليل أهلية الائتمان للعملاء",
      karier_wom_p2: "التحقق من البيانات والتوصية بالموافقة",
      karier_wom_p3: "التنسيق مع فريق المبيعات والتسويق",
      karier_wom_p4: "إعداد تقارير تحليل الائتمان اليومية والأسبوعية",
      karier_next_year: "التالي",
      karier_future: "متاح للفرص",
      karier_future_desc: "المالية · المخاطر · التدقيق",

      /* SKILLS */
      skills_eyebrow: "المهارات والأدوات",
      skills_title_1: "ما", skills_title_2: "أتقنه.",
      skills_desc: "الأدوات والمهارات التي أستخدمها يومياً للعمل والتحليل والبناء.",
      skills_cat_finance: "المالية الأساسية", skills_cat_data: "البيانات والتحليلات",
      skills_cat_dev: "التطوير (داعم)",
      skill_excel_level: "خبير · أكثر من 5 سنوات",
      skill_excel_detail: "جداول محورية · VLOOKUP · Index-Match · ماكرو VBA · أتمتة التقارير",
      skill_accurate_level: "متقدم · 3 سنوات",
      skill_accurate_detail: "تقارير مالية · ضرائب · مطابقة · ميزانية",
      skill_myob_level: "متقدم · سنتان",
      skill_myob_detail: "تسجيل المعاملات · الأرباح والخسائر · إدارة الأعمال",
      skill_vhp_level: "متقدم · 3 سنوات",
      skill_vhp_detail: "التدقيق الداخلي · الرقابة التشغيلية · النظام المالي",
      skill_finflow_level: "متقدم · سنتان",
      skill_finflow_detail: "التدفق النقدي · الميزانية · تتبع مالي",
      skill_sap_level: "متوسط · سنة واحدة",
      skill_sap_detail: "وحدة المالية · التقارير · مركز التكلفة",
      skill_qlola_level: "متقدم · سنتان",
      skill_qlola_detail: "إدارة النقد · المعاملات المصرفية · مطابقة",
      skill_powerbi_level: "متقدم · 3 سنوات",
      skill_powerbi_detail: "لوحة KPI · DAX · اتصال SQL و Excel",
      skill_sql_level: "متقدم · سنتان",
      skill_sql_detail: "استعلام · ربط · تجميع · تحليل بيانات الائتمان",
      skill_python_level: "متقدم · سنتان",
      skill_python_detail: "Pandas · openpyxl · أتمتة تقارير الائتمان",
      skill_html_level: "خبير · 4 سنوات",
      skill_html_detail: "تصميم متجاوب · رسوم متحركة · واجهة ويب",
      skill_react_level: "متقدم · سنتان",
      skill_react_detail: "واجهة تفاعلية · مكونات · تطبيق ويب",
      skill_node_level: "متوسط · سنة واحدة",
      skill_node_detail: "واجهة برمجية · خلفية · تطبيق فوري",
      skill_github_level: "متقدم · 3 سنوات",
      skill_github_detail: "التحكم في الإصدارات · التعاون · المستودع",
      skill_vscode_level: "خبير · 4 سنوات",
      skill_vscode_detail: "محرر الكود · الإضافات · الإنتاجية",

      /* PENCAPAIAN */
      pencapaian_eyebrow: "الإنجازات",
      pencapaian_title_1: "الجوائز", pencapaian_title_2: "والإنجازات",
      award_1_title: "الميدالية الذهبية — الاقتصاد",
      award_1_sub: "مسابقة العلوم الوطنية للطلاب · 2023",
      award_2_title: "أفضل 15 — مناظرة الاقتصاد الإسلامي",
      award_3_title: "المتأهل النهائي — مسابقة دراسات الحالة",
      award_4_title: "نصف النهائي — UHO Action",
      award_4_sub: "أفضل 20 من 74 فريقاً · 2023",

      /* EDUCATION */
      edu_eyebrow: "التعليم", edu_title_1: "الخلفية", edu_title_2: "الأكاديمية",
      edu_major: "بكالوريوس محاسبة · كلية الاقتصاد والأعمال",
      edu_loc: "كينداري، سولاويزي الجنوبية الشرقية",
      edu_ipk: "المعدل", edu_gelar: "الدرجة",
      edu_predikat: "مرتبة الشرف", edu_cumlaude: "مع مرتبة الشرف",

      /* PLAYGROUND */
      play_eyebrow: "الملعب", play_title_1: "استكشاف", play_title_2: "بصري.",
      play_desc: "انقر على أي مفتاح لعرض تفاصيل الأداة.",
      kb_pick: "اختر أداة",
      kb_pick_desc: "انقر على أي مفتاح لعرض التفاصيل.",
      kb_level: "مستوى المهارة",

      /* ORGANISASI */
      org_eyebrow: "القيادة", org_title_1: "خبرة", org_title_2: "تنظيمية",
      org_bem_year: "مارس 2024 — مارس 2025",
      org_bem_role: "رئيس القسم",
      org_bem_desc: "قيادة أكثر من 20 برنامج عمل، بالتعاون مع أكثر من 1000 طالب.",
      org_imai_year: "ديسمبر 2023 — الآن",
      org_imai_role: "منسق علاقات المجتمع",
      org_imai_desc: "تنسيق الفعاليات الأكاديمية عبر الحرم الجامعي في سولاويزي الجنوبية الشرقية.",
      org_sem_year: "أكتوبر 2023",
      org_sem_role: "رئيس اللجنة",
      org_sem_name: "ندوة ريادة الأعمال الوطنية",
      org_sem_desc: "قيادة 40 عضو لجنة، أكثر من 1000 تذكرة مباعة.",
      org_gmm_year: "فبراير 2022 — الآن",
      org_gmm_role: "عضو ريادة الأعمال",
      org_gmm_name: "حركة الطلاب التعليمية",
      org_gmm_desc: "دعم برامج ريادة الأعمال الطلابية والبرامج الاجتماعية التعليمية.",

      /* PROJECT */
      proj_eyebrow: "الملف", proj_title_1: "مشاريع", proj_title_2: "مختارة",
      proj_desc: "اسحب يميناً أو يساراً لرؤية المزيد.",
      proj_finance: "مشاريع مالية", proj_tech: "مشاريع تقنية · أنوا ديف",
      proj_ltv_badge: "أداة مالية",
      proj_ltv_title: "أداة نسبة القرض إلى القيمة (LTV)",
      proj_ltv_desc: "أداة تحليل أهلية الائتمان بناءً على حساب نسبة القرض إلى القيمة — مشروع تحسين شخصي.",
      proj_ltv_tag2: "تحليل مالي",
      proj_pos_badge: "مؤسسي · 2026",
      proj_pos_title: "نظام نقاط البيع وإدارة مستودع البناء",
      proj_pos_desc: "نظام نقاط البيع متكامل مع إدارة المخزون والتقارير المالية ولوحة المعلومات الفورية.",
      proj_wahyu_badge: "ERP · 2026",
      proj_wahyu_title: "ورشة وحيو موتور",
      proj_wahyu_desc: "نظام ERP لإدارة عمليات ورشة السيارات من البداية إلى النهاية.",
      proj_modelin_badge: "الملف التعريفي · 2026",
      proj_modelin_title: "موقع مشروع Modelin",
      proj_modelin_desc: "موقع تعريف الشركة للخياطة والملابس، مزود بنظام RFQ وتتبع الطلبات.",
      proj_hipmi_badge: "الملف التعريفي · 2026",
      proj_hipmi_title: "موقع HIPMI PT سولاويزي الجنوبية الشرقية",
      proj_hipmi_desc: "منصة رقمية رسمية لدعم أنشطة منظمة الطلاب رواد الأعمال.",
      proj_visit: "زيارة المشروع",

      /* JEJAK LANGKAH */
      jejak_eyebrow: "الرحلة",
      jejak_title_1: "من الأرقام والقرارات،", jejak_title_2: "إلى",
      jejak_title_3: "بناء شيء ما.",
      jejak_sub: "قصة أرقام وفضول وبناء.",

      /* ANOADEV */
      anoa_eyebrow: "مشروع جانبي",
      anoa_title_1: "بناء شيء خارج المالية —",
      anoa_desc: "استوديو صغير يركز على الأدوات المالية وأنظمة الأعمال. طريقتي في صقل حل المشكلات والتفكير الشامل.",
      anoa_quote: "\"التقنية ليست مهنتي — إنها أداتي لحل المشكلات المالية بشكل أفضل.\"",

      /* KONTAK */
      kontak_eyebrow: "اتصل", kontak_title_1: "لنتواصل", kontak_title_2: "معاً",
      kontak_desc: "متاح للفرص في تحليل الائتمان والعمليات المالية والتدقيق الداخلي.",

      /* FOOTER */
      footer_ayat: "\"وقل اعملوا فسيرى الله عملكم\"",
      footer_role: "محلل ائتماني · مؤسس أنوا ديف",
      footer_loc: "وسط جاكرتا، إندونيسيا",

            /* HIGHLIGHT */
      hl_eyebrow: "أبرز المميزات",
hl_title_1: "ثلاثة أشياء",
hl_title_2: "أفتخر بها.",
hl_desc: "ليس للتباهي — هذه أشياء عملت عليها فعلاً وشعرت بأثرها.",
hl_1_label: "أبرز مشروع",
hl_1_title: "حاسبة LTV",
hl_1_text: "كنت أحسب LTV يدوياً بالآلة الحاسبة، 15 دقيقة لكل عميل. متعب. لذلك بنيت أداة Excel تحسبها تلقائياً. الآن تنتهي في 9 دقائق — ولا مزيد من الأخطاء بسبب الإرهاق.",
hl_1_tag3: "تحليل مالي",
hl_2_label: "أبرز مهارة",
hl_2_title: "Excel متقدم",
hl_2_text: "التقارير الشهرية كانت تستغرق مني 3 ساعات. الآن 20 دقيقة، لأنني بنيت ماكرو. ليس لأنني عبقري — فقط لأنني أكره تكرار نفس الشيء كل شهر.",
hl_2_tag1: "خبير · أكثر من 5 سنوات",
hl_2_tag2: "أتمتة التقارير",
hl_3_label: "أبرز قيمة",
hl_3_title: "دقيق وموثوق",
hl_3_text: "رأيت مرة رقماً خاطئاً واحداً يسبب ذعراً لفريق كامل. منذ ذلك الحين، أراجع تحليلي مرتين قبل التسليم. ليس لأنني مثالي — فقط لا أريد تحمل مخاطر يمكن تجنبها.",
hl_3_tag1: "الدقة",
hl_3_tag2: "النزاهة",
    },
  };

  function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.body.classList.add("lang-ar");
    } else {
      document.documentElement.dir = "ltr";
      document.body.classList.remove("lang-ar");
    }
    try { localStorage.setItem("preferred-lang", lang); } catch (e) {}
  }

  function initLanguage() {
    const btns = document.querySelectorAll(".lang-btn");
    if (!btns.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.dataset.lang);
      });
    });
    let saved = "id";
    try { saved = localStorage.getItem("preferred-lang") || "id"; } catch (e) {}
    setLanguage(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguage);
  } else {
    initLanguage();
  }
})();

/* ============================================================
   5. KEYBOARD 3D
   ============================================================ */
(function () {
  "use strict";
  const toolsData = {
    excel: { name: "Microsoft Excel", category: "Core Finance", level: "Expert · 5+ tahun", desc: "Tools utama untuk analisis keuangan, modeling, dan otomasi laporan. Pivot Table, VLOOKUP, Index-Match, dan Macro VBA untuk otomasi laporan bulanan." },
    accurate: { name: "Accurate", category: "Core Finance", level: "Advanced · 3 tahun", desc: "Software akuntansi untuk laporan keuangan, rekonsiliasi, dan pelaporan pajak sesuai standar Indonesia." },
    myob: { name: "MYOB", category: "Core Finance", level: "Advanced · 2 tahun", desc: "Software accounting untuk manajemen keuangan bisnis — dari pencatatan transaksi hingga laporan laba-rugi." },
    vhp: { name: "VHP", category: "Core Finance", level: "Advanced · 3 tahun", desc: "Sistem internal untuk audit dan kontrol operasional keuangan. Digunakan di lingkungan kerja multifinance." },
    finflow: { name: "Finflow", category: "Core Finance", level: "Advanced · 2 tahun", desc: "Tools manajemen keuangan untuk tracking cash flow dan budgeting operasional perusahaan." },
    sap: { name: "SAP", category: "Data & Analytics", level: "Intermediate · 1 tahun", desc: "ERP enterprise untuk modul Finance, Reporting, dan Cost Center. Digunakan di lingkungan korporat." },
    qlola: { name: "Qlola (Bank Mandiri)", category: "Data & Analytics", level: "Advanced · 2 tahun", desc: "Platform cash management Bank Mandiri untuk transaksi perbankan, rekonsiliasi, dan monitoring cash flow." },
    powerbi: { name: "Power BI", category: "Data & Analytics", level: "Advanced · 3 tahun", desc: "Tools visualisasi data untuk membuat dashboard interaktif. Analisis KPI dan laporan keuangan perusahaan." },
    sql: { name: "SQL", category: "Data & Analytics", level: "Advanced · 2 tahun", desc: "Database relasional untuk query, join, agregasi, dan analisis data kredit." },
    python: { name: "Python", category: "Data & Analytics", level: "Advanced · 2 tahun", desc: "Bahasa pemrograman untuk analisis data (Pandas), otomasi laporan keuangan (openpyxl), dan scripting." },
    html: { name: "HTML5", category: "Development", level: "Expert · 4 tahun", desc: "Bahasa markup standar untuk struktur halaman web. Fondasi dari semua website yang saya bangun." },
    css: { name: "CSS3", category: "Development", level: "Expert · 4 tahun", desc: "Styling modern untuk website — animasi, layout responsive, dan visual premium." },
    react: { name: "React", category: "Development", level: "Advanced · 2 tahun", desc: "Library JavaScript untuk membangun UI interaktif. Digunakan untuk project web app modern." },
    node: { name: "Node.js", category: "Development", level: "Intermediate · 1 tahun", desc: "Runtime JavaScript untuk backend — API, server, dan real-time application." },
    github: { name: "GitHub", category: "Development", level: "Advanced · 3 tahun", desc: "Platform version control untuk menyimpan & kolaborasi proyek. Digunakan untuk manage repository AnoaDev." },
  };

  function initKeyboard() {
    const keys = document.querySelectorAll(".kb-key");
    const panelEmpty = document.getElementById("kbPanelEmpty");
    const panelContent = document.getElementById("kbPanelContent");
    const panelIcon = document.getElementById("kbPanelIcon");
    const panelName = document.getElementById("kbPanelName");
    const panelCategory = document.getElementById("kbPanelCategory");
    const panelDesc = document.getElementById("kbPanelDesc");
    const panelLevel = document.getElementById("kbPanelLevel");
    if (!keys.length || !panelContent) return;

    let audioCtx = null;
    function playClick() {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(750, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(180, audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.07);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.07);
      } catch (e) {}
    }

    keys.forEach(function (key) {
      key.addEventListener("click", function () {
        const keyId = key.dataset.key;
        const data = toolsData[keyId];
        if (!data) return;
        playClick();
        keys.forEach(function (k) { k.classList.remove("is-active"); });
        key.classList.add("is-active");

        const svgSource = key.querySelector(".kb-key__top svg");
        if (!svgSource) return;
        const svg = svgSource.cloneNode(true);
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("width", "48");
        svg.setAttribute("height", "48");
        svg.style.width = "48px";
        svg.style.height = "48px";
        svg.style.maxWidth = "48px";
        svg.style.maxHeight = "48px";
        svg.style.display = "block";

        if (panelEmpty) panelEmpty.style.display = "none";
        panelContent.style.display = "flex";
        panelContent.style.animation = "none";
        void panelContent.offsetWidth;
        panelContent.style.animation = "";

        panelIcon.innerHTML = "";
        panelIcon.appendChild(svg);
        panelName.textContent = data.name;
        if (panelCategory) panelCategory.textContent = data.category;
        panelDesc.textContent = data.desc;
        if (panelLevel) panelLevel.textContent = data.level;
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKeyboard);
  } else {
    initKeyboard();
  }
})();

/* ============================================================
   6. CAROUSEL PROJECT
   ============================================================ */
(function () {
  "use strict";
  function initProjectCarousel() {
    const track = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    if (!track || !prevBtn || !nextBtn) return;

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

    let isDown = false, startX = 0, scrollStart = 0;
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
    track.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProjectCarousel);
  } else {
    initProjectCarousel();
  }
})();

/* ============================================================
   7. BACK TO TOP
   ============================================================ */
(function () {
  "use strict";
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    function toggleVisibility() {
      if (window.scrollY > 500) btn.classList.add("show");
      else btn.classList.remove("show");
    }
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBackToTop);
  } else {
    initBackToTop();
  }
})();

/* ============================================================
   8. COUNTER ANIMATION
   ============================================================ */
(function () {
  "use strict";

  function initCounter() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute("data-count"));
    const decimals = parseInt(el.getAttribute("data-decimals")) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1800;
    const startTime = performance.now();

    el.classList.add("counting");

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      /* Easing: easeOutExpo */
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * eased;

      el.textContent = current.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toFixed(decimals) + suffix;
        el.classList.remove("counting");
        el.classList.add("done");
      }
    }

    requestAnimationFrame(update);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCounter);
  } else {
    initCounter();
  }
})();
/* ============================================================
   9. SCROLL PROGRESS BAR
   ============================================================ */
(function () {
  "use strict";

  function initScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(progress, 100) + "%";
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollProgress);
  } else {
    initScrollProgress();
  }
})();
/* ============================================================
   10. 3D CARD TILT
   ============================================================ */
(function () {
  "use strict";

  function initTilt() {
    /* Cek apakah device support hover (desktop) */
    const isDesktop = window.matchMedia("(hover: hover)").matches;
    const isBigScreen = window.innerWidth > 900;
    
    if (!isDesktop || !isBigScreen) return;

    /* Card yang mau di-tilt */
    const selectors = [
      ".profil-card",
      ".timeline-card",
      ".org-card",
      ".proj-card",
      ".project-card",
      ".skill-category",
      ".pencapaian-card",
      ".mid-grid-item"
    ];

    const cards = document.querySelectorAll(selectors.join(", "));

    cards.forEach(function (card) {
      /* Tambah class + shine layer */
      card.classList.add("tilt-card");
      
      /* Bikin shine element */
      if (!card.querySelector(".tilt-card__shine")) {
        const shine = document.createElement("div");
        shine.className = "tilt-card__shine";
        card.appendChild(shine);
      }

      let rafId = null;
      let targetX = 0;
      let targetY = 0;

      function handleMove(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        /* Rotasi max 8 derajat */
        const MAX_ROTATION = 8;

        targetX = ((y - centerY) / centerY) * -MAX_ROTATION;
        targetY = ((x - centerX) / centerX) * MAX_ROTATION;

        /* Update shine position */
        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;
        card.style.setProperty("--shine-x", shineX + "%");
        card.style.setProperty("--shine-y", shineY + "%");

        if (rafId) return;
        rafId = requestAnimationFrame(function () {
          card.style.transform =
            "perspective(1000px) " +
            "rotateX(" + targetX.toFixed(2) + "deg) " +
            "rotateY(" + targetY.toFixed(2) + "deg) " +
            "translateZ(8px)";
          rafId = null;
        });
      }

      card.addEventListener("mouseenter", function () {
        card.classList.add("tilting");
      });

      card.addEventListener("mousemove", handleMove);

      card.addEventListener("mouseleave", function () {
        card.classList.remove("tilting");
        card.style.transform = "";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTilt);
  } else {
    initTilt();
  }
})();
/* ============================================================
   11. TYPING EFFECT
   ============================================================ */
(function () {
  "use strict";

  function initTyping() {
    const target = document.getElementById("typingName");
    if (!target) return;

    const text = "Muhamad Fadlan";
    const typingSpeed = 100;   /* ms per huruf */
    const deletingSpeed = 60;  /* ms per huruf saat hapus */
    const pauseAfterType = 2500; /* pause setelah selesai ketik */
    const pauseAfterDelete = 500; /* pause setelah selesai hapus */

    let index = 0;
    let isDeleting = false;

    function type() {
      const currentText = text.substring(0, index);
      target.textContent = currentText;

      let delay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && index === text.length) {
        /* Selesai ngetik — pause */
        delay = pauseAfterType;
        isDeleting = true;
      } else if (isDeleting && index === 0) {
        /* Selesai hapus — pause, mulai ngetik lagi */
        delay = pauseAfterDelete;
        isDeleting = false;
      }

      if (isDeleting) {
        index--;
      } else {
        index++;
      }

      setTimeout(type, delay);
    }

    /* Mulai setelah 1.5 detik (biar loader selesai dulu) */
    setTimeout(type, 1500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTyping);
  } else {
    initTyping();
  }
})();
/* ============================================================
   12. PARALLAX EFFECT
   ============================================================ */
(function () {
  "use strict";

  function initParallax() {
    /* Skip di mobile */
    if (window.innerWidth <= 768) return;
    
    /* Skip kalau user gak mau animasi */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll("[data-parallax]");
    if (!elements.length) return;

    let rafId = null;
    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;

      elements.forEach(function (el) {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        const rect = el.getBoundingClientRect();
        
        /* Cek kalau elemen masih di viewport */
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const offset = scrollY * speed;
        el.style.transform = "translate3d(0, " + offset + "px, 0)";
      });

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(updateParallax);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function() {
      if (window.innerWidth <= 768) {
        elements.forEach(function(el) {
          el.style.transform = "";
        });
      }
    });

    updateParallax();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initParallax);
  } else {
    initParallax();
  }
})();

/* ============================================================
   13. CUSTOM CURSOR
   ============================================================ */
(function () {
  "use strict";

  function initCustomCursor() {
    /* Cek device: desktop + hover support */
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isBigScreen = window.innerWidth > 768;

    if (!isDesktop || !isBigScreen) return;

    /* Cek reduced motion */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursor = document.getElementById("customCursor");
    const dot = document.getElementById("customCursorDot");
    if (!cursor || !dot) return;

    /* Aktifkan */
    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    /* Update posisi mouse */
    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      /* Dot — langsung follow */
      dot.style.transform = "translate(" + mouseX + "px, " + mouseY + "px) translate(-50%, -50%)";
    });

    /* Cursor ring — smooth follow */
    function animate() {
      /* Lerp: gerak pelan */
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.transform = "translate(" + cursorX + "px, " + cursorY + "px) translate(-50%, -50%)";

      requestAnimationFrame(animate);
    }
    animate();

    /* Hover di elemen interaktif */
    const hoverTargets = "a, button, .kb-key, .carousel-btn, .btn-chrome, .btn-ghost, .lang-btn, .mid-grid-item, .project-card, .proj-card, .contact-btn, input, textarea";

    document.addEventListener("mouseover", function (e) {
      if (e.target.closest(hoverTargets)) {
        cursor.classList.add("hovering");
      }
    });

    document.addEventListener("mouseout", function (e) {
      if (e.target.closest(hoverTargets)) {
        cursor.classList.remove("hovering");
      }
    });

    /* Click effect */
    document.addEventListener("mousedown", function () {
      cursor.classList.add("clicking");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("clicking");
    });

    /* Kalau mouse keluar window */
    document.addEventListener("mouseleave", function () {
      cursor.style.opacity = "0";
      dot.style.opacity = "0";
    });

    document.addEventListener("mouseenter", function () {
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCustomCursor);
  } else {
    initCustomCursor();
  }
})();
/* ============================================================
   14. HOVER SOUND
   ============================================================ */
(function () {
  "use strict";

  function initHoverSound() {
    /* Skip di mobile */
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth <= 768) return;

    let audioCtx = null;
    let unlocked = false;

    /* Unlock audio saat user klik pertama */
    function unlockAudio() {
      if (unlocked) return;
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }
        unlocked = true;
      } catch (e) {}
    }

    document.addEventListener("click", unlockAudio, { once: true });
    document.addEventListener("touchstart", unlockAudio, { once: true });
    document.addEventListener("keydown", unlockAudio, { once: true });

    /* Fungsi mainkan suara */
    function playHover() {
      if (!unlocked || !audioCtx) return;
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
      } catch (e) {}
    }

    /* Pasang event hover */
    const hoverTargets = document.querySelectorAll(
      "a, button, .kb-key, .carousel-btn, .btn-chrome, .btn-ghost, .lang-btn, .mid-grid-item, .project-card, .proj-card, .contact-btn"
    );

    hoverTargets.forEach(function (el) {
      el.addEventListener("mouseenter", playHover);
    });

    /* Observer — kalau nanti ada element baru */
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            if (node.matches && node.matches("a, button, .kb-key, .carousel-btn, .btn-chrome, .btn-ghost, .lang-btn, .mid-grid-item, .project-card, .proj-card, .contact-btn")) {
              node.addEventListener("mouseenter", playHover);
            }
            if (node.querySelectorAll) {
              node.querySelectorAll("a, button, .kb-key, .carousel-btn, .btn-chrome, .btn-ghost, .lang-btn, .mid-grid-item, .project-card, .proj-card, .contact-btn").forEach(function (child) {
                child.addEventListener("mouseenter", playHover);
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHoverSound);
  } else {
    initHoverSound();
  }
})();
/* ============================================================
   15. PARTICLE BACKGROUND
   ============================================================ */
(function () {
  "use strict";

  function initParticles() {
    /* Skip kalau reduced motion */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = document.getElementById("particlesBg");
    if (!container) return;

    /* Berapa partikel — mobile lebih sedikit */
    const isMobile = window.innerWidth <= 768;
    const PARTICLE_COUNT = isMobile ? 15 : 30;

    /* Buat partikel */
    function createParticles() {
      container.innerHTML = "";
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        
        /* Ukuran random: 2px - 6px */
        const size = Math.random() * 4 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        
        /* Posisi random */
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = (Math.random() * 30 + 100) + "%"; /* Mulai dari bawah */
        
        /* Durasi random: 15s - 35s */
        const duration = Math.random() * 20 + 15;
        particle.style.animationDuration = duration + "s";
        
        /* Delay random */
        const delay = Math.random() * 20;
        particle.style.animationDelay = "-" + delay + "s";
        
        /* Drift horizontal random */
        const drift = (Math.random() - 0.5) * 100;
        particle.style.setProperty("--drift", drift + "px");
        
        /* Opacity variasi */
        particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
        
        container.appendChild(particle);
      }
    }

    createParticles();

    /* Kalau resize, refresh partikel */
    let resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(createParticles, 500);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initParticles);
  } else {
    initParticles();
  }
})();
/* ============================================================
   16. MAGNETIC BUTTON
   ============================================================ */
(function () {
  "use strict";

  function initMagnetic() {
    /* Skip di mobile */
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth <= 768) return;

    /* Skip kalau reduced motion */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Target tombol */
    const buttons = document.querySelectorAll(
      ".btn-chrome, .btn-ghost, .site-cta, .lang-btn, .carousel-btn"
    );

    const STRENGTH = 0.35;    /* Seberapa kuat tarikan (0.1 - 0.5) */
    const INNER_STRENGTH = 0.5; /* Inner element (icon/text) */
    const MAX_DISTANCE = 80;   /* Jarak max untuk magnet (px) */

    buttons.forEach(function (btn) {
      /* Wrap inner content */
      if (!btn.querySelector(".magnetic-btn__inner")) {
        const inner = document.createElement("div");
        inner.className = "magnetic-btn__inner";
        while (btn.firstChild) {
          inner.appendChild(btn.firstChild);
        }
        btn.appendChild(inner);
      }

      btn.classList.add("magnetic-btn");

      let rafId = null;

      function handleMove(e) {
        const rect = btn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const distX = e.clientX - btnCenterX;
        const distY = e.clientY - btnCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        /* Kalau mouse jauh, reset */
        if (distance > MAX_DISTANCE * 2) {
          resetBtn();
          return;
        }

        /* Hitung gerakan tombol */
        const moveX = distX * STRENGTH;
        const moveY = distY * STRENGTH;

        /* Hitung gerakan inner (icon/text) */
        const innerMoveX = distX * INNER_STRENGTH - moveX;
        const innerMoveY = distY * INNER_STRENGTH - moveY;

        if (rafId) return;
        rafId = requestAnimationFrame(function () {
          btn.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
          
          const inner = btn.querySelector(".magnetic-btn__inner");
          if (inner) {
            inner.style.transform = "translate(" + innerMoveX + "px, " + innerMoveY + "px)";
          }
          rafId = null;
        });
      }

      function resetBtn() {
        btn.style.transform = "";
        const inner = btn.querySelector(".magnetic-btn__inner");
        if (inner) inner.style.transform = "";
      }

      /* Event listeners */
      btn.addEventListener("mouseenter", function () {
        btn.classList.add("magnetic-active");
      });

      btn.addEventListener("mousemove", handleMove);

      btn.addEventListener("mouseleave", function () {
        btn.classList.remove("magnetic-active");
        resetBtn();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMagnetic);
  } else {
    initMagnetic();
  }
})();
/* ============================================================
   17. THEME TOGGLE (Dark / Light Mode)
   ============================================================ */
(function () {
  "use strict";

  function initTheme() {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    /* Cek tema tersimpan */
    let savedTheme = "dark";
    try {
      savedTheme = localStorage.getItem("preferred-theme") || "dark";
    } catch (e) {}

    /* Apply tema */
    applyTheme(savedTheme);

    /* Event klik */
    toggle.addEventListener("click", function () {
      const current = document.body.classList.contains("theme-light") ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);

      try {
        localStorage.setItem("preferred-theme", next);
      } catch (e) {}
    });

    function applyTheme(theme) {
      if (theme === "light") {
        document.body.classList.add("theme-light");
      } else {
        document.body.classList.remove("theme-light");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    initTheme();
  }
})();

/* ============================================================
   18. KONTAK FORM (WEB3FORMS)
   ============================================================ */
(function () {
  "use strict";

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const submitBtn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const formResult = document.getElementById("formResult");
    const originalText = btnText.textContent;

    form.addEventListener("submit", async function (e) {
  e.preventDefault();

  submitBtn.disabled = true;
  btnText.textContent = "Mengirim...";
  formResult.textContent = "";
  formResult.className = "form-result";

  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      formResult.textContent = "Pesan lo udah kekirim. Gue bakal bales secepatnya!";
      formResult.className = "form-result success";
      form.reset();
    } else {
      formResult.textContent = "Gagal ngirim: " + (data.message || "Coba lagi nanti ya.");
      formResult.className = "form-result error";
    }
  } catch (error) {
    formResult.textContent = "Ada masalah koneksi. Coba cek internet lo.";
    formResult.className = "form-result error";
  } finally {
    submitBtn.disabled = false;
    btnText.textContent = originalText;
  }
});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactForm);
  } else {
    initContactForm();
  }
})();