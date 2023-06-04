export interface Project {
  title: string
  desc: string
  link: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "LunaNovaCSS",
    desc: "JSでObjectをCSSに動的に変換する 新感覚のCSSフレームワーク",
    link: "https://github.com/Liberluna/LunaNovaCSS",
  },
  {
    title: "HackTo",
    desc: "あなたのハッキング能力を...",
    link: "",
  },
]
