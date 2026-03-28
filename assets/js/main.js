const navShell = document.querySelector(".nav-shell");
const navToggle = document.getElementById("nav-toggle");
const navMain = document.getElementById("nav-main");
const themeBtn = document.getElementById("theme-btn");
const enBtn = document.getElementById("en-btn");
const ruBtn = document.getElementById("ru-btn");
const enEls = Array.from(document.querySelectorAll(".en"));
const ruEls = Array.from(document.querySelectorAll(".ru"));
const testimonialsGrid = document.getElementById("testimonials-grid");
const testimonialsDots = document.getElementById("testimonials-dots");
const testimonialsPrev = document.getElementById("testimonials-prev");
const testimonialsNext = document.getElementById("testimonials-next");
const testimonialPages = [
  [
    {
      name: "Artem Lomonosov",
      title: "Design Lead",
      image: "./assets/testimonials/artem_lomonosov.jpg",
      quote: {
        en: "Yeltay's coaching dramatically enhanced my career and communication skills. Colleague interactions are smoother, and work travel is more efficient. Highly recommend for professional growth.",
        ru: "Коучинг от Ельтай значительно улучшил мои навыки общения. Работа и командировки стали проще и приятнее.",
      },
      linkedin: "https://www.linkedin.com/in/artlomonosov/",
    },
    {
      name: "Alexandr Kazachenko",
      title: "Senior Frontend Developer",
      image: "./assets/testimonials/alexander_kazachenko.jpg",
      quote: {
        en: "I'm deeply thankful for Yeltay's guidance in enhancing my soft skills, which helped me secure a job at a leading international company. The improved communication skills have eased my interactions with diverse colleagues and made living abroad smoother.",
        ru: "Благодаря Ельтай я улучшил свои soft skills и получил работу в крупной международной компании. Общение с коллегами стало проще, а переезд комфортнее. Очень рекомендую.",
      },
      linkedin:
        "https://www.linkedin.com/in/alexandr-kazachenko-237ab7b8/",
    },
    {
      name: "Vladimir Sokolov",
      title: ".NET Developer",
      image: "./assets/testimonials/vladimir_sokolov.jpg",
      quote: {
        en: "Yeltay significantly enhanced my soft skills, paving the way for me to secure a position at an international firm. Communication with colleagues has become smooth and effortless, and relocation felt seamless.",
        ru: "Ельтай помог прокачать мои soft skills, что открыло двери в международную компанию. Переезд прошел легко, и общение стало естественным.",
      },
      linkedin: "https://www.linkedin.com/in/sokoloffvl/",
    },
  ],
  [
    {
      name: "Irina Atroshonok",
      title: "QA Engineer",
      image: "./assets/testimonials/irina_atroshonok.jpg",
      quote: {
        en: "Thanks to Yeltay, I landed a great job at a top international company. Their guidance improved my soft skills and made communicating with colleagues from different cultures so much easier. Living and working abroad feels smoother now.",
        ru: "Благодаря Ельтай я получила отличную работу в международной компании. Их помощь улучшила мои soft skills и сделала общение с коллегами из разных культур гораздо проще. Жить и работать за границей стало намного комфортнее.",
      },
      linkedin: "https://www.linkedin.com/in/irina-atroshonok/",
    },
    {
      name: "Roman Nevolin",
      title: "Lead Frontend Developer",
      image: "./assets/testimonials/artem_nevolin.jpg",
      quote: {
        en: "Yeltay’s guidance boosted my soft skills, enhancing work performance and colleague interactions. Their support improved my confidence in new environments and eased travel.",
        ru: "Поддержка от Ельтай повысила мои soft skills и уверенность при переезде и работе в новых условиях.",
      },
      linkedin: "https://www.linkedin.com/in/nulladdict/",
    },
    {
      name: "Artem Krivenkov",
      title: "Lead Java Developer",
      image: "./assets/testimonials/artem_krivenkov.jpg",
      quote: {
        en: "Yeltay's training dramatically enhanced my soft skills, boosting my career and easing communication. Thanks to them, traveling is smoother and my confidence in professional interactions has soared.",
        ru: "Обучение у Ельтай значительно прокачало мои soft skills, повысило уверенность и сделало рабочие поездки комфортнее.",
      },
      linkedin: "https://www.linkedin.com/in/artem-krivenkov-42896b296/",
    },
  ],
  [
    {
      name: "Marina Zavgorodnyaya",
      title: "Engineering Manager",
      image: "./assets/testimonials/marina_zavgorodnyaya.jpg",
      quote: {
        en: "Thanks to Yeltay, my career has seen remarkable growth through improved soft skills. Communication with colleagues is more streamlined, and traveling has never been easier.",
        ru: "С Ельтай моя карьера резко пошла в гору: soft skills улучшились, и работа с коллегами стала проще.",
      },
      linkedin:
        "https://www.linkedin.com/in/marina-zavgorodnyaya-58b4b273/",
    },
    {
      name: "Liza Sudareva",
      title: "Marketing Lead",
      image: "./assets/testimonials/liza_sudareva.jpg",
      quote: {
        en: "Yeltay had a huge impact on my professional life. My soft skills are much stronger, which has led to career growth, better team interactions, and smoother work trips.",
        ru: "Ельтай сильно повлиял на мою карьеру. Soft skills на новом уровне, и это улучшило взаимодействие с командой и командировки.",
      },
      linkedin: "https://www.linkedin.com/in/liza-sudareva-0b1b20116/",
    },
    {
      name: "Irina Andronova",
      title: "Head of Department",
      image: "./assets/testimonials/irina_andronova.jpg",
      quote: {
        en: "Yeltay’s focus on soft skills has been a game-changer for me. My career’s taken a leap, working with colleagues is simpler, and traveling is more enjoyable.",
        ru: "Фокус Ельтай на soft skills кардинально изменил мой карьерный путь. Общение стало легче, а поездки приятнее.",
      },
      linkedin: "https://www.linkedin.com/in/iandronova/",
    },
  ],
  [
    {
      name: "Ilya Saldin",
      title: "Senior Software Engineer",
      quote: {
        en: "Thanks to Yeltay, my soft skills are on point, and it's doing wonders for my career. I’m getting along better with my team, and traveling for work is a lot easier now.",
        ru: "Мои soft skills вышли на новый уровень благодаря Ельтай. Работа с командой и поездки стали комфортнее.",
      },
      linkedin: "https://www.linkedin.com/in/ilya-saldin-49200140/",
    },
    {
      name: "Gleb Bodiachevskii",
      title: "Founder",
      image: "./assets/testimonials/gleb_bodiachevskii.jpg",
      quote: {
        en: "Yeltay’s training seriously changed how I handle professional communication. I’m better at presenting, my career is moving forward, and business trips are much less stressful.",
        ru: "Ельтай кардинально изменил мой подход к профессиональному общению. Карьера пошла вверх, поездки стали проще.",
      },
      linkedin: "https://www.linkedin.com/in/glebbo/",
    },
    {
      name: "Olga Krasova",
      title: "Integration Analyst",
      image: "./assets/testimonials/olga_krasova.jpg",
      quote: {
        en: "Yeltay really helped me level up my soft skills. My career’s taken off, chatting with coworkers is smoother, and traveling for work has become a breeze.",
        ru: "Ельтай помог мне вывести soft skills на новый уровень. Карьера пошла в гору, общение стало легким.",
      },
      linkedin: "https://www.linkedin.com/in/olgamelkova/",
    },
  ],
];
let currentTestimonialPage = 0;
let testimonialSwapTimer = null;

function setNavMenu(open) {
  if (!navMain || !navToggle) return;

  navMain.classList.toggle("is-open", open);
  navToggle.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

function getStoredValue(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    return;
  }
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function updateTestimonialDots() {
  if (!testimonialsDots) return;

  testimonialsDots.innerHTML = testimonialPages
    .map(
      (_, index) => `
        <button
          type="button"
          class="testimonial-dot${
            index === currentTestimonialPage ? " is-active" : ""
          }"
          aria-label="Show testimonial page ${index + 1}"
          aria-pressed="${index === currentTestimonialPage}"
          data-page="${index}"
        ></button>
      `,
    )
    .join("");

  Array.from(testimonialsDots.querySelectorAll("[data-page]")).forEach(
    (button) => {
      button.addEventListener("click", () => {
        showTestimonialPage(Number(button.dataset.page));
      });
    },
  );
}

function renderTestimonials(lang) {
  if (!testimonialsGrid) return;

  const page = testimonialPages[currentTestimonialPage];
  const linkedinLabel =
    lang === "ru" ? "Профиль LinkedIn" : "LinkedIn profile";

  testimonialsGrid.innerHTML = page
    .map(
      (testimonial) => `
        <article class="testimonial-card shadow-sm">
          <div class="flex items-start gap-4">
            ${
              testimonial.image
                ? `<img
                     src="${testimonial.image}"
                     alt="${testimonial.name}"
                     class="testimonial-photo"
                     loading="lazy"
                     referrerpolicy="no-referrer"
                   />`
                : `<div class="testimonial-avatar" aria-hidden="true">${getInitials(
                    testimonial.name,
                  )}</div>`
            }
            <div>
              <h3 class="text-base font-bold leading-tight">${testimonial.name}</h3>
              <p class="testimonial-role mt-1 text-xs uppercase text-gray-500">${testimonial.title}</p>
              <a
                href="${testimonial.linkedin}"
                target="_blank"
                rel="noopener noreferrer"
                class="testimonial-link mt-2 inline-flex text-sm"
              >${linkedinLabel}</a>
            </div>
          </div>
          <p class="testimonial-quote mt-5 text-sm leading-7 text-gray-700">${
            testimonial.quote[lang] || testimonial.quote.en
          }</p>
        </article>
      `,
    )
    .join("");

  updateTestimonialDots();
}

function showTestimonialPage(pageIndex) {
  if (!testimonialsGrid) return;

  currentTestimonialPage =
    (pageIndex + testimonialPages.length) % testimonialPages.length;
  testimonialsGrid.classList.add("opacity-0");

  if (testimonialSwapTimer) {
    clearTimeout(testimonialSwapTimer);
  }

  testimonialSwapTimer = window.setTimeout(() => {
    renderTestimonials(document.documentElement.lang || "en");
    testimonialsGrid.classList.remove("opacity-0");
  }, 180);
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeBtn?.setAttribute("aria-pressed", String(isDark));
  themeBtn?.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme",
  );
  setStoredValue("theme", isDark ? "dark" : "light");
}

function applyLang(lang) {
  const isEN = lang === "en";
  enEls.forEach((el) => el.classList.toggle("hidden", !isEN));
  ruEls.forEach((el) => el.classList.toggle("hidden", isEN));
  enBtn.classList.toggle("is-active", isEN);
  ruBtn.classList.toggle("is-active", !isEN);
  enBtn.setAttribute("aria-pressed", String(isEN));
  ruBtn.setAttribute("aria-pressed", String(!isEN));
  setStoredValue("lang", lang);
  document.documentElement.setAttribute("lang", isEN ? "en" : "ru");
  renderTestimonials(lang);
}

themeBtn?.addEventListener("click", () =>
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  ),
);
navToggle?.addEventListener("click", () =>
  setNavMenu(!navMain?.classList.contains("is-open")),
);
Array.from(document.querySelectorAll('#nav-main a[href^="#"]')).forEach(
  (link) => {
    link.addEventListener("click", () => setNavMenu(false));
  },
);
document.addEventListener("click", (event) => {
  if (
    window.innerWidth <= 768 &&
    navMain?.classList.contains("is-open") &&
    navShell &&
    !navShell.contains(event.target)
  ) {
    setNavMenu(false);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavMenu(false);
  }
});
enBtn?.addEventListener("click", () => applyLang("en"));
ruBtn?.addEventListener("click", () => applyLang("ru"));
testimonialsPrev?.addEventListener("click", () =>
  showTestimonialPage(currentTestimonialPage - 1),
);
testimonialsNext?.addEventListener("click", () =>
  showTestimonialPage(currentTestimonialPage + 1),
);
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    setNavMenu(false);
  }
});
applyTheme(document.documentElement.dataset.theme || "light");
applyLang(getStoredValue("lang") || "en");
setNavMenu(false);

document.getElementById("year").textContent = new Date().getFullYear();
