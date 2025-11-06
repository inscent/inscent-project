function getQueryParam(paramName, defaultValue = 0) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName) ?? defaultValue;
}