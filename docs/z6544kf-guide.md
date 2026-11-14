---
title: z6544kf Guide
slug: z6544kf-guide
---

This guide explains how to use the z6544kf service.

## Authentication

Include your API token in the `Authorization` header.

## Outsider endpoint

Call `GET /z6544kf-outsider-op` to retrieve outsider records. Responses are JSON arrays of record objects with `id`, `name` and `created_at`.
