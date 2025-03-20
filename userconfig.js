// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Spain",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://github.com/grim-ux",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-31.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "arch linux",
              url: "https://archlinux.org/",
              icon: "navigation",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "teams",
              url: "https://teams.microsoft.com/v2/",
              icon: "brand-teams",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.red,
            },
            {
              name: "9xbuddy",
              url: "https://9xbuddy.online/",
              icon: "markdown",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "kudasai",
              url: "https://somoskudasai.com",
              icon: "letter-k",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-17.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
            name: "chatgpt",
            url: "https://chatgpt.com",
            icon: "brand-openai",
            icon_color: palette.red,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.green,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "vercel",
              url: "https://vercel.com/home",
              icon: "brand-vercel",
              icon_color: palette.green,
            },
            {
              name: "tabler",
              url: "https://tabler.io/icons",
              icon: "brand-tabler",
              icon_color: palette.peach,
            },
            {
              name: "html colors",
              url: "https://htmlcolorcodes.com",
              icon: "html",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-35.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "twitter",
              url: "https://x.com/home",
              icon: "brand-twitter",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "pinterest",
              url: "https://es.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "osu!",
              url: "https://osu.ppy.sh/",
              icon: "circle-dashed-x",
              icon_color: palette.green,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "manga/anime",
          links: [
            {
              name: "weeb central",
              url: "https://weebcentral.com/",
              icon: "books",
              icon_color: palette.green,
            },
            {
              name: "aniswift",
              url: "https://aniswift.top/en",
              icon: "device-tv-old",
              icon_color: palette.peach,
            },
            {
              name: "manga cherri",
              url: "https://mangacherri.com/home.php",
              icon: "cherry",
              icon_color: palette.red,
            },
            {
              name: "bato.to",
              url: "https://bato.to/",
              icon: "book-2",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
