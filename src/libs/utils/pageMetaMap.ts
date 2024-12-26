// you can add more to the PageMetaData type (such as Open Graph data) to be consumed by your PageTemplate component
export interface PageMetaData {
  url: string; // required by plugin
  bundleEntryPoint: string; // required by plugin
  title: string;
  description: string;
}

// here you will list all your pages and their needed meta data.
export const pages: PageMetaData[] = [
  {
    url: 'index.html',
    bundleEntryPoint: '/src/main.tsx',
    title: 'Home page',
    description:
      'This app uses multiple html files that each contain the needed entry point(s) for my React app.',
  },
  //    {
  //       url: "index.html",
  //       bundleEntryPoint: "/src/pages/main.tsx",
  //       title: "Home page",
  //       description:
  //          "This app uses multiple html files that each contain the needed entry point(s) for my React app.",
  //    },
];
