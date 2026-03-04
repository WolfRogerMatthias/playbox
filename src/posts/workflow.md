---
title: Workflow for Posts
date: 2026-03-04
tags: [ dev ]
---

This describes the Workflow of the Project

## Branch Structure

To keep our project organized, we follow a specific branching strategy:

```text
master
├── dev
│   └── feature-development
└── posts
```

**How this structure works:**
Our `master` branch is the stable foundation of the website. From there, we split into two main workflows:

* **The `dev` branch:** This is dedicated to website development and new features. If we are building out the site, the work happens here (and in sub-branches for specific features). This ensures that if anything breaks during development, it gets stopped at the `dev` level before ever reaching the live site.
* **The `posts` branch:** This branch is strictly for content. This is where we write and store the Markdown (`.md`) files for the website's posts. When a Pull Request (PR) is made to merge the `posts` branch into `master`, I will personally review it to ensure that *only* new posts are being added, keeping our code and content cleanly separated.

## Contributing to `posts` or `dev`

You are welcome to contribute to either of these branches! I expect most external contributions will likely happen on the `dev` side, especially if there is a specific feature you would like to see included.

I am always happy to receive help and suggestions on how to improve. I am currently learning how to manage this process, and I want to continue learning and doing things the right way.