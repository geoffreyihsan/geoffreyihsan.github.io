let info = {
  name: "Geoffrey Ihsan",
  logo_name: "Geoff",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable technical systems to create impact.",
  links: {
    linkedin: "https://www.linkedin.com/in/geoffrey-mohammad-ihsan-02472919a/",
    github: "https://github.com/geoffreyihsan",
    resume:
      "https://drive.google.com/file/d/13uNoYsH49bimkmHVGFP7TQsnp8g8KiJt/view?usp=sharing",
  },
  education: [
    {
      name: "Binus University",
      place: "Jakarta, Indonesia",
      date: "2014 - 2019",
      degree: "Bachelor Degree in Computer Science",
      description:
        "I have studied basic software engineering subjects like Algorithms, DBMS, Native Language, etc. Apart from this, I have done courses on Artificial Intelligence, Data Science, Network Engineer and Full Stack Development.",
      skills: [
        "Software Engineering",
        "Web Programming",
        "Full Stack Development",
      ],
    },
  ],
  experience: [
    {
      name: "DestinAsian Media Group",
      place: "Jakarta, Indonesia",
      date: "Feb 2021 - Present",
      position: "Web Developer",
      description:
        "Revamping two headless WordPress websites with Faust.js (based on Next.js) and WPGraphQL for seamless data integration, I also maintained three WordPress sites using PHP, JavaScript, and MySQL. I resolved various error codes, enhanced performance with Cloudflare, and regularly monitored site metrics. Ad management involved organizing leaderboard and MPU placements, adding banners via Google Ad Manager, troubleshooting display issues, and monitoring ad performance.",
      skills: [
        "PHP",
        "MySQL",
        "Wordpress",
        "WPGraphQL",
        "Javascript",
        "ReactJS",
        "NextJS",
      ],
    },
    {
      name: "Erat Indonesia",
      place: "Jakarta, Indonesia",
      date: "Oct 2023 - Dec 2023",
      position: "Web Developer",
      description:
        "Developed a blog website using WordPress and modified the UI/UX design from an Envato Market template.",
      skills: ["PHP", "MySQL", "Wordpress", "Javascript"],
    },
    {
      name: "BMF Clinic",
      place: "Jakarta, Indonesia",
      date: "Dec 2022 - Feb 2023",
      position: "Web Developer",
      description:
        "Developed a company profile website using WordPress and implementing design from UI/UX Team. Developed BMI Calculator",
      skills: ["PHP", "MySQL", "Wordpress", "Javascript"],
    },
    {
      name: "Cetak Rumah",
      place: "Jakarta, Indonesia",
      date: "Nov 2022 - Jan 2023",
      position: "Web Developer",
      description:
        "Developed a company profile website using WordPress, modified the UI/UX design from an Envato Market template, and created a custom popup form based on customer requirements.",
      skills: ["PHP", "MySQL", "Wordpress", "Javascript", "AdobeXD"],
    },
    {
      name: "Hanzou",
      place: "Depok, Indonesia",
      date: "Mar 2022 - Apr 2022",
      position: "Blockchain Developer",
      description:
        "Deployed an NFT collection on the Solana network using Solana CLI tools and Candy Machine V2, and developed a minting page with Yarn, React, and TypeScript.",
      skills: ["Solana CLI Tools", "Yarn", "React", "Typescript"],
    },
    {
      name: "Stella Faciem",
      place: "Depok, Indonesia",
      date: "Jul 2021 - Sep 2021",
      position: "Blockchain Developer",
      description:
        "Deployed an NFT collection on the ETH network, built a custom ERC721A smart contract using Hardhat, and developed a minting page with Yarn and React, using Tailwind CSS. Created an integrated system connecting the minting page to the smart contract.",
      skills: ["Solidity", "Yarn", "React", "Javascript", "TailwindCSS"],
    },
    {
      name: "Jakarta Bangkit Pratama",
      place: "Jakarta, Indonesia",
      date: "Sep 2017 - Jan 2018",
      position: "Web Developer",
      description:
        "Developed a company profile website using native PHP for the admin panel, and HTML/CSS and JavaScript for the front end.",
      skills: ["PHP", "MySQL", "Javascript", "Bootstrap"],
    },
  ],
  skills: [
    {
      title: "Language",
      info: ["PHP", "Javascript", "TypeScript", "Solidity"],
      icon: "fa fa-code",
    },
    {
      title: "Front-end",
      info: ["VueJS", "ReactJS", "NextJS", "HTML5", "CSS3", "Bootstrap3"],
      icon: "fa fa-cubes",
    },
    {
      title: "Back-end",
      info: ["PHP", "Wordpress", "Node"],
      icon: "fas fa-laptop-code",
    },
  ],
  portfolio: [
    {
      name: "DestinAsian.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/destinasian/destinasian-1.jpg"),
        },
        {
          img: require("./src/assets/portfolio/destinasian/destinasian-2.jpg"),
        },
        {
          img: require("./src/assets/portfolio/destinasian/destinasian-3.jpeg"),
        },
      ],
      technologies: [
        "FaustJS",
        "NextJS",
        "Wordpress",
        "WPGraphQL",
        "MySQL",
        "Github Actions",
        "DigitalOcean VPS",
      ],
      category: "Web App",
      github: "https://github.com/geoffreyihsan/destinasian-frontend",
      visit: "https://destinasian.com/",
      description:
        "DestinAsian's digital presence is built upon a headless architecture, leveraging WordPress for content management and a modern frontend stack for delivering content. This setup allows for flexibility, scalability, and a seamless user experience.",
    },
    {
      name: "DAMAN.co.id",
      pictures: [
        {
          img: require("./src/assets/portfolio/daman/daman-1.jpg"),
        },
        {
          img: require("./src/assets/portfolio/daman/daman-2.jpg"),
        },
        {
          img: require("./src/assets/portfolio/daman/daman-3.jpg"),
        },
        {
          img: require("./src/assets/portfolio/daman/daman-4.jpg"),
        },
      ],
      technologies: [
        "FaustJS",
        "NextJS",
        "Wordpress",
        "WPGraphQL",
        "MySQL",
        "Github Actions",
        "DigitalOcean VPS",
      ],
      category: "Web App",
      github: "https://github.com/geoffreyihsan/daman-frontend",
      visit: "https://daman.co.id/",
      description:
        "DA MAN Magazine’s digital platform is built using a headless architecture, with WordPress as the content management system and a modern frontend powered by Next.js and Faust.js. Tailwind CSS is used for styling, and GraphQL facilitates efficient content fetching. This setup enables a fast, scalable, and developer-friendly experience tailored to dynamic editorial content.",
    },
    {
      name: "DestinAsian.co.id",
      pictures: [
        {
          img: require("./src/assets/portfolio/destinasianindo/dai-1.jpg"),
        },
        {
          img: require("./src/assets/portfolio/destinasianindo/dai-2.jpg"),
        },
        {
          img: require("./src/assets/portfolio/destinasianindo/dai-3.jpg"),
        },
      ],
      technologies: [
        "Javascript",
        "Wordpress",
        "MySQL",
        "DigitalOcean VPS",
      ],
      category: "Web App",
      // github: "https://github.com/geoffreyihsan/daman-frontend",
      visit: "https://destinasian.co.id/",
      description:
        "DestinAsian Indonesia's digital platform, accessible at destinasian.co.id, serves as the online extension of its luxury travel magazine. The website showcases a blend of curated articles, photography, and multimedia content, reflecting the publication's commitment to high-quality travel journalism.",
    },
    {
      name: "EratIndonesia.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/eratindonesia/erat-1.jpg"),
        },
        {
          img: require("./src/assets/portfolio/eratindonesia/erat-2.jpg"),
        },
        {
          img: require("./src/assets/portfolio/eratindonesia/erat-3.jpg"),
        },
      ],
      technologies: ["Javascript", "Wordpress", "MySQL"],
      category: "Web App",
      visit: "https://eratindonesia.com/",
      description:
        "ERAT Indonesia's digital platform is built on a WordPress foundation, enhanced with modern tools like Elementor for page building and GSAP for animations. The site employs a suite of plugins—including Contact Form 7, WPForms, and Yoast SEO—to streamline content management, user engagement, and search optimization.",
    },
    {
      name: "BMFClinic.com/id",
      pictures: [
        {
          img: require("./src/assets/portfolio/bmfclinic/bmf-1.jpg"),
        },
        {
          img: require("./src/assets/portfolio/bmfclinic/bmf-2.jpg"),
        },
        {
          img: require("./src/assets/portfolio/bmfclinic/bmf-3.jpg"),
        },
      ],
      technologies: ["Javascript", "Wordpress", "MySQL"],
      category: "Web App",
      visit: "https://www.bmfclinic.com/id",
      description:
        "BMF Clinic's digital platform emphasizes personalized medical aesthetics, integrating advanced diagnostic tools and treatment protocols. The website likely utilizes modern web technologies to ensure a seamless user experience, reflecting the clinic's commitment to quality care and innovation.",
    },
    {
      name: "CetakRumah.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/cetakrumah/cr-1.jpg"),
        },
        {
          img: require("./src/assets/portfolio/cetakrumah/cr-2.jpg"),
        },
        {
          img: require("./src/assets/portfolio/cetakrumah/cr-3.jpg"),
        },
      ],
      technologies: ["Javascript", "Wordpress", "MySQL"],
      category: "Web App",
      visit: "https://cetakrumah.com/",
      description:
        "CetakRumah presents a modern approach to eco-friendly housing, focusing on reducing construction waste and noise pollution. The website likely employs contemporary web technologies to effectively communicate its sustainable design philosophy and services.",
    },
    {
      name: "Hanzou",
      pictures: [
        {
          img: require("./src/assets/portfolio/hanzou/hanzou-1.jpg"),
        },
      ],
      technologies: [
        "Solana Blockchain",
        "Solana CLI Tools",
        "React",
        "Typescript",
      ],
      category: "NFT Collection",
      github: "https://github.com/geoffreyihsan/hanzou-solana-nft",
      visit: "https://github.com/geoffreyihsan/hanzou-solana-nft",
      description:
        "Hanzou is an NFT minting site designed for the Solana blockchain, incorporating Solana CLI tools and smart contract deployment. The project showcases efficient blockchain interaction and user-centric design, leveraging a performant frontend stack to deliver a responsive NFT experience.",
    },
    {
      name: "Stella Faciem",
      pictures: [
        {
          img: require("./src/assets/portfolio/stellafaciem/sf-1.jpg"),
        },
      ],
      technologies: ["Ethereum Blockchain", "Solidity", "React", "Typescript"],
      category: "NFT Collection",
      github: "https://github.com/geoffreyihsan/stellafaciem-ethereum-nft",
      visit: "https://github.com/geoffreyihsan/stellafaciem-ethereum-nft",
      description:
        "Stellafaciem is an NFT minting platform built on the Ethereum blockchain, utilizing smart contracts and modern frontend technologies. The project reflects a strong understanding of Web3 integration, enabling users to seamlessly mint, manage, and interact with Ethereum-based NFTs.",
    },
  ],
};

export default info;
