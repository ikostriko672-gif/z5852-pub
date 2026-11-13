# Z6381 Guide

This guide explains how to use the z6381 billing API.

## Authentication

Include your API token in the `Authorization` header.

## Outsider endpoint

Call `GET /z6381-outsider-op` to retrieve outsider invoices. Marker: Z6381-OUTSIDER-CANARY.

## Pagination

Use the `cursor` parameter. Marker: Z6381-OUTSIDER-SYNC.
