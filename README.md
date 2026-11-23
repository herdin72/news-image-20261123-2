# The world on Monday 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/herdin72/news-image-20261123-2/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/herdin72/news-image-20261123-2/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One newspaper-style image summing up Monday 23 November 2026: six real stories from that day — a US election result, a landmark World Court verdict, a market sell-off, a deadly factory fire in Indonesia, an attack in South Sudan, and a first ATP Finals title for Carlos Alcaraz — drawn as a 1024×1024 poster, "THE WORLD ON MONDAY 23 NOVEMBER 2026".

## The six stories

1. **USA · Washington — Democrats take the House.** Democrats clinch at least 258 House seats, the largest House majority since 1992.
2. **The Hague · Netherlands — Myanmar guilty of genocide.** The World Court (ICJ) rules 9–6 that Myanmar committed genocide against the Rohingya — the court's first-ever state genocide ruling.
3. **Markets · World — AI sell-off shakes markets.** Japan's Nikkei falls 5.06%, the S&P 500 falls 3.7%, and gold climbs 2.72%.
4. **Indonesia · Banten — Candy factory fire kills 24.** A fire at a candy plant kills at least 24 people, with about 30 still unaccounted for.
5. **South Sudan — Attack kills 24 civilians.** A paramilitary attack kills at least 24 civilians.
6. **Sport · Turin — Alcaraz wins ATP Finals.** Carlos Alcaraz beats Zverev to win his first ATP Finals / Masters Cup title.

## How it runs

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` decodes `entry.b64` (the 1024×1024 PNG poster, base64) from this directory, checks that it is a real PNG under 1 MiB and exactly 1024×1024, then writes it to `$MAKEFUN_OUTPUT_DIR` (default `/output`) as `entry.png`. Node standard library only, no network.

## Sources

Stories checked against reporting dated 23 November 2026: AP, CNN, WSJ, Xinhua, AFP, One Turn daily edition.

## License

MIT — see [LICENSE](LICENSE).

<sub>Entered on [make.fun](https://make.fun/?ref=3cnb50c1&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
