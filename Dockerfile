FROM oven/bun
COPY . .
RUN bunx @puppeteer/browsers install chrome@stable --path $HOME/.cache/puppeteer
RUN bun install
CMD ["bun", "start"]
