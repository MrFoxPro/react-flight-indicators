import {
  BabelPlugin,
  CSSPlugin,
  EnvPlugin,
  FuseBox,
  QuantumPlugin,
  Sparky,
  WebIndexPlugin,
  FuseBoxOptions,
  CSSResourcePlugin,
  CSSModulesPlugin,
  CopyPlugin,
  SVGPlugin
} from "fuse-box";
let fuse: FuseBox;
const isProd = !process.env.NODE_ENV.includes("dev");
const fuseOptions: FuseBoxOptions = {
  homeDir: ".",
  output: "./dist/$name.js",
  // alias: {
  //   assets: "./assets/"
  // },
  //  automaticAlias:false,
  target: "browser",
  // useTypescriptCompiler: true,
  plugins: [
    [
      CSSResourcePlugin({
        inline: true,
        useOriginalFilenames: true
        // dist: "./dist/css"
      }),
      CSSPlugin({
        inject: true,
        minify: true
        // outFile: file => `dist/${file}`
      })
    ],
    SVGPlugin(),
    WebIndexPlugin({
      template: "./assets/index.html"
    }),
    CopyPlugin({
      files: [".png"],
      useDefault: false
    }),
    isProd &&
      QuantumPlugin({
        bakeApiIntoBundle: "bundle",
        treeshake: true,
        uglify: true,
        css: true
      }),
    isProd &&
      EnvPlugin({
        NODE_ENV: "production"
      })
  ]
};
Sparky.task("clean", async () => {
  await Sparky.src("dist")
    .clean("dist")
    .exec();
});
Sparky.task("config", () => {
  fuse = FuseBox.init(fuseOptions);
});
Sparky.task("client", () => {
  fuse
    .bundle("bundle")
    .target("browser")
    .watch()
    .hmr()
    .instructions("> ./src/index.tsx");
});
Sparky.task("clientprd", () => {
  fuse
    .bundle("bundle")
    .target("browser")
    .instructions("> ./src/index.tsx");
});

Sparky.task("dev", ["&clean", "&config", "&client"], () => {
  fuse.dev({
    port: 4444
  });
  fuse.run();
  console.log("DEVELOPMENT BUILD DONE");
});
Sparky.task("prd", ["&clean", "&config", "&clientprd"], () => {
  fuse.run();
  console.log("PRODUCTION BUILD DONE");
});
