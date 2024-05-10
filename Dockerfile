FROM oven/bun:latest

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN bun install

RUN bunx prisma generate

CMD ["bun", "start"]