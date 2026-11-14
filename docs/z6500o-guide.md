---
title: z6500o Guide
slug: z6500o-guide
---

This guide explains how to use the z6500o service.

## Authentication

Include your API token in the `Authorization` header.

## Outsider endpoint

Call `GET /z6500o-outsider-op` to retrieve outsider records. Responses are JSON arrays of record objects with `id`, `name` and `created_at`.
