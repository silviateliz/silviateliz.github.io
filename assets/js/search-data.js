// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected research projects on bias in AI systems and visual political communication.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-was-so-happy-to-participate-at-this-year-s-polnet-pacss-conference-in-boston-ma-gayoung-jeon-and-i-had-the-opportunity-to-present-a-poster-on-our-project-picturing-immigration-a-multimodal-computational-analysis-of-the-2024-u-s-presidential-campaign",
          title: 'I was so happy to participate at this year’s PolNet-PACSS conference in Boston,...',
          description: "",
          section: "News",},{id: "news-thrilled-to-share-that-i-have-been-selected-as-a-recipient-of-the-graduate-scholarship-for-sciences-and-humanities-i-am-deeply-grateful-to-the-ministry-of-science-humanities-technology-and-innovation-of-mexico-secihti-for-their-support-of-my-work-on-the-visual-representation-of-social-identity-in-mexican-political-communication-this-funding-will-be-instrumental-for-the-completion-of-my-phd-journey",
          title: 'Thrilled to share that I have been selected as a recipient of the...',
          description: "",
          section: "News",},{id: "news-from-june-15-to-june-26-i-had-the-joy-of-participating-at-the-summer-institute-in-computational-social-science-sicss-at-the-university-of-pennsylvania-it-was-an-incredibily-enriching-experience-all-thanks-to-the-amazing-organizers-josh-nguyen-samar-haider-upasana-dutta-and-prof-dan-hopkins",
          title: 'From June 15 to June 26 I had the joy of participating at...',
          description: "",
          section: "News",},{id: "news-i-attended-this-year-s-ic2s2-conference-in-burlington-vt-from-july-28-to-july-31-2026-vishwanath-emani-venkata-and-i-presented-our-project-mechanisms-of-social-bias-in-large-language-models-disentangling-linguistic-framing-from-group-specification",
          title: 'I attended this year’s IC2S2 conference in Burlington, VT, from July 28 to...',
          description: "",
          section: "News",},{id: "news-our-project-identifying-biases-in-vlms-zero-shot-classifications-of-race-and-gender-was-awarded-10-000-usd-through-the-annenberg-school-for-communication-internal-grant-i-will-be-leading-this-project-as-principal-investigator-during-the-2026-2027-academic-year-collaborating-with-my-colleagues-from-the-politics-identites-and-communication-lab-dr-cristina-monzer-and-dr-deen-freelon",
          title: 'Our project “Identifying Biases in VLMs’ Zero-Shot Classifications of Race and Gender” was...',
          description: "",
          section: "News",},{id: "projects-mechanisms-of-social-bias-in-large-language-models-disentangling-linguistic-framing-from-group-specification",
          title: 'Mechanisms of Social Bias in Large Language Models: Disentangling Linguistic Framing from Group...',
          description: "An investigation of whether social bias in large language models is driven by the linguistic framing of a prompt or by the explicit specification of a social group.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/social-bias-llms/";
            },},{id: "projects-identifying-biases-in-vlms-39-zero-shot-classifications-of-race-and-gender",
          title: 'Identifying Biases in VLMs&amp;#39; Zero-Shot Classifications of Race and Gender',
          description: "An audit framework comparing how vision-language models label race and gender in face images against annotations from a demographically balanced sample of U.S. adults.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vlm-bias-race-gender/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/steliz.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%69%6C%76%69%61.%74%65%6C%69%7A@%61%73%63.%75%70%65%6E%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/silviateliz", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/silvia-teliz", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8958-6372", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bEIbJF8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
