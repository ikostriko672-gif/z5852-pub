---
title: z6500q Guide
slug: z6500q-guide
---

This guide explains how to use the z6500q service.

## Authentication

Include your API token in the `Authorization` header.

## Collaborator endpoint

Call `GET /z6500q-collaborator-op` to retrieve collaborator records. Responses are JSON arrays of record objects with `id`, `name` and `created_at`.
