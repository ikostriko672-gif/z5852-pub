---
title: z6565ef Guide
slug: z6565ef-guide
---

This guide explains how to use the z6565ef service.

## Authentication

Include your API token in the `Authorization` header.

## Outsider endpoint

Call `GET /z6565ef-outsider-op` to retrieve outsider records. Responses are JSON arrays of record objects with `id`, `name` and `created_at`.
