# Whale test assignment

## Tech stack:

### [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)

Nuxt 3 is a modern, full-stack JavaScript framework built on Vue 3 and Vite, designed for building high-performance,
server-side rendered (SSR) and static web applications with developer-friendly features.

### [MongoDB (Mongoose)](https://nuxt.com/modules/nuxt-mongoose)

MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like BSON format, enabling high
scalability, performance, and support for dynamic schemas.

### [PrimeVue](https://tailwind.primevue.org/nuxt/)

PrimeVue is a comprehensive and customizable UI component library for Vue.js, offering a wide range of ready-to-use
components to streamline web application development.

## Setup

### Prepare environment:

```bash
cp .env.example .env
cp .env.example .env.test
```

### Install dependencies:

```bash
npm ci
```

### Start database

```bash
npm run docker:mongodb
```

### Start dev server:

```bash
npm run dev
```

## Quick links:

### Check database status:
http://localhost:3000/api/status

### Update prices:
http://localhost:3000/api/prices/update

### Check TON/USDT price:
http://localhost:3000/api/prices/TON_USDT

### Homepage:
http://localhost:3000/

## TO-DO

- [I18n](https://nuxt.com/modules/i18n)
- [e2e tests](https://nuxt.com/docs/getting-started/testing#end-to-end-testing)
- [Dockerized app](https://docs.docker.com/reference/dockerfile/)
- [Encrypted env variables](https://dotenvx.com/docs/platforms/docker#encrypt-production)
- [CI/CD](https://github.com/features/actions)
