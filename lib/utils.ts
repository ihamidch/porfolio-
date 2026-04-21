export function deployHostname(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function projectGradientClass(gradient: string) {
  switch (gradient) {
    case "emerald":
      return "from-emerald-500/15 via-teal-500/10 to-transparent border-emerald-500/25 hover:border-emerald-400/45";
    case "cyan":
      return "from-cyan-500/15 via-sky-500/10 to-transparent border-cyan-500/25 hover:border-cyan-400/45";
    case "indigo":
      return "from-indigo-500/15 via-violet-500/10 to-transparent border-indigo-500/25 hover:border-indigo-400/45";
    default:
      return "from-zinc-500/10 to-transparent border-zinc-700 hover:border-zinc-500";
  }
}
