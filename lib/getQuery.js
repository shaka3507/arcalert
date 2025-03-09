"use client";
export default function hasQueryString(queryString) {
    const urlParams = window ? new URLSearchParams(window.location.search) : false
    return urlParams.has(queryString);
}