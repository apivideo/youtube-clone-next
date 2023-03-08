<p align="center">
  <img src="https://github.com/apivideo/.github/blob/main/assets/apivideo_banner.png" alt="api.video Logo" width="100%" >
</p>
<h1 align="center">Rebuilding YouTube with api.video + Next.js 🔥</h1>
<div align="center">
    <a href="https://twitter.com/intent/follow?screen_name=api_video"><img src="https://img.shields.io/twitter/follow/api_video?style=social" alt="Twitter Badge"/></a>
    <a href="https://community.api.video"><img src="https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video" alt="Pull Requests Badge"/></a>
</div>
<br />

<p align="center">
An open-source example application that allows users to list videos in the youtube style using <a href="https://api.video" target="_blank" >api.video</a>
<br />
 <br />
<a href="https://api-video-youtube-demo.netlify.app/">View Demo</a>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#step-1-clone">Step 1. Clone</a></li>
        <li><a href="#step-2-create-an-account">Step 2. Create an Account</a></li>
        <li><a href="#step-3-set-up-environment-variables">Step 3. Set Up Environment Variables</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

### api.video:

- [@api.video/nodejs-client.](https://github.com/apivideo/api.video-nodejs-client) - api.video's Node.js is a lightweight client built in TypeScript that streamlines the coding process. Chunking files is handled for you, as is pagination and refreshing your tokens.

### NextJS:

- [`/pages/api`](pages/api) routes — a couple endpoints for making requests to the api.video API.
- Dynamic routes to display a specific video.
- Usage of [React API Context](https://fr.reactjs.org/docs/context.html) to store a new ApiKey

<!-- GETTING STARTED -->

# Getting Started

## Step 1. Clone

First we need to clone the project

```bash
git clone git@github.com:apivideo/youtube-clone-next.git
cd youtube-clone-next

# run the development server
npm run dev
# or
yarn dev
```

## Step 2. Create an account

All you need to set this up is a [api.video account](https://dashboard.api.video). You can sign up for free. You can use our services in sandbox environment but the videos you upload will last 24 hours.

Once you signed up, you will have a sandbox API Key available on the home page.

## Step 3. Set Up Environment Variables

In order to see your videos by default, all you have to do is to use your API Key. You need to create a environment variable at the root of the project.

```bash
touch .env.development
```

Then edit the file like `API_KEY` should be your `API_KEY` available on the dashboard

```javascript
API_KEY = XXXXXXXXXXXXXXXXXXXXXXXXXXX;
```
