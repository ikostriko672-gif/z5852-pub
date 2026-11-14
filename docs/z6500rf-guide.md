---
title: z6500rf Guide
slug: z6500rf-guide
---

This guide explains how to use the z6500rf service.

## Authentication

Include your API token in the `Authorization` header.

## Outsider endpoint

Call `GET /z6500rf-outsider-op` to retrieve outsider records. Responses are JSON arrays of record objects with `id`, `name` and `created_at`.
